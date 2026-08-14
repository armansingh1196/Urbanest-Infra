"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  PanInfo,
} from "framer-motion";
import { X, BadgeCheck, Info, RotateCcw, MapPin, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

/* ---------------------------------------------------------------------
   Design tokens — editorial real-estate ledger, not another dark-glass panel.
   Charcoal base (not pure black) + brass accent used only for the
   "acquire" confirmation, so it stays meaningful rather than decorative.
--------------------------------------------------------------------- */

const TOKENS = {
  bg: "var(--background)",
  surface: "var(--card)",
  surfaceRaised: "var(--card)",
  brass: "var(--primary)",
  brassSoft: "var(--primary)",
  sage: "var(--secondary)",
  ink: "var(--foreground)",
  inkMuted: "var(--muted-foreground)",
  hairline: "var(--border)",
};

export interface Property {
  id: string;
  lot: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  tag?: string;
  image: string;
}

const MAPPED_PROPERTIES: Property[] = PROJECTS.map((p, index) => ({
  id: p.id,
  lot: index + 1,
  title: p.name,
  location: p.location,
  price: p._matchStats.priceValue,
  beds: p._matchStats.beds,
  baths: p._matchStats.baths,
  sqft: p._matchStats.sqft,
  tag: p._matchStats.tag,
  image: p.images[0]
}));

const SWIPE_THRESHOLD = 120;
const SWIPE_VELOCITY = 500;

function formatPrice(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  return `₹${(value / 100000).toFixed(value % 100000 === 0 ? 0 : 2)} L`;
}

/* ---------------------------------------------------------------------
   Single swipeable card. Drag physics live here so the stack component
   stays dumb about gesture math.
--------------------------------------------------------------------- */

function SwipeCard({
  property,
  isTop,
  stackDepth,
  onDecision,
}: {
  property: Property;
  isTop: boolean;
  stackDepth: number;
  onDecision: (direction: "left" | "right") => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-14, 0, 14]);

  const acquireOpacity = useTransform(x, [20, 140], [0, 1]);
  const passOpacity = useTransform(x, [-140, -20], [1, 0]);

  const handleDragEnd = useCallback(
    (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
      const passedDistance = Math.abs(info.offset.x) > SWIPE_THRESHOLD;
      const passedVelocity = Math.abs(info.velocity.x) > SWIPE_VELOCITY;
      if (passedDistance || passedVelocity) {
        onDecision(info.offset.x > 0 ? "right" : "left");
      }
    },
    [onDecision]
  );

  // Cards behind the top one recede slightly — a real stack, not a pile.
  const depthScale = 1 - stackDepth * 0.045;
  const depthY = stackDepth * 14;

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        zIndex: 10 - stackDepth,
      }}
      initial={false}
      animate={{
        scale: depthScale,
        y: depthY,
        opacity: stackDepth > 2 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileTap={isTop ? { cursor: "grabbing" } : undefined}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl border select-none"
        style={{
          background: TOKENS.surface,
          borderColor: TOKENS.hairline,
          boxShadow:
            stackDepth === 0
              ? "0 24px 60px -20px rgba(0,0,0,0.6)"
              : "0 8px 24px -12px rgba(0,0,0,0.4)",
        }}
      >
        {/* Image */}
        <div className="relative h-[62%] w-full overflow-hidden bg-black/5 dark:bg-white/5">
          {/* Blurred backdrop to fill the canvas */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-110 blur-xl"
            style={{ backgroundImage: `url('${property.image}')` }}
          />
          <img
            src={property.image}
            alt={property.title}
            draggable={false}
            className="relative z-10 h-full w-full object-contain p-2"
          />
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(248,245,240,0) 55%, rgba(248,245,240,0.95) 100%)",
            }}
          />

          {/* Lot number — real ordering in the deck, not decoration */}
          <div
            className="absolute left-4 top-4 z-30 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wider"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(6px)",
            }}
          >
            PROJECT №{String(property.lot).padStart(2, "0")}
          </div>

          {property.tag && (
            <div
              className="absolute right-4 top-4 z-30 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide"
              style={{ background: TOKENS.brass, color: TOKENS.bg }}
            >
              {property.tag}
            </div>
          )}

          {/* Price tag, deed-plaque style */}
          <div
            className="absolute bottom-4 left-4 z-30 rounded-lg border px-3 py-1.5"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="font-serif text-xl tracking-wide"
              style={{ color: TOKENS.brassSoft, fontFamily: "'Fraunces', serif" }}
            >
              {formatPrice(property.price)}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="flex h-[38%] flex-col justify-between px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <h3
              className="text-base sm:text-lg font-medium leading-snug"
              style={{ color: TOKENS.ink, fontFamily: "'Fraunces', serif" }}
            >
              {property.title}
            </h3>
            <div
              className="mt-1 flex items-center gap-1 text-sm"
              style={{ color: TOKENS.inkMuted }}
            >
              <MapPin className="h-3.5 w-3.5" />
              {property.location}
            </div>
          </div>

          {/* Spec strip — mono, like a listing sheet */}
          <div
            className="flex items-center justify-between border-t pt-2 sm:pt-3 font-mono text-[10px] sm:text-xs"
            style={{ borderColor: TOKENS.hairline, color: TOKENS.inkMuted }}
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <span>{property.beds} BD</span>
              <span className="opacity-40">/</span>
              <span>{property.baths} BA</span>
              <span className="opacity-40">/</span>
              <span>{property.sqft.toLocaleString()} SQFT</span>
            </div>
            
            <Link 
              href={`/projects/${property.id}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors pointer-events-auto"
            >
              DETAILS <Info className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Stamp overlays — the signature interaction */}
        {isTop && (
          <>
            <motion.div
              style={{ opacity: acquireOpacity }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none z-50"
            >
              <Heart className="w-48 h-48 text-red-500 fill-red-500 drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]" />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------
   Deck controller — owns the queue, dismissed history (for undo),
   and the action-button row.
--------------------------------------------------------------------- */

export function PropertyMatcher({
  properties = MAPPED_PROPERTIES,
}: {
  properties?: Property[];
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [lastDecision, setLastDecision] = useState<{ property: Property; direction: "left" | "right" } | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('urbanest_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      localStorage.removeItem('urbanest_wishlist');
    }
  }, []);

  const visible = useMemo(() => properties.slice(index, index + 3), [
    properties,
    index,
  ]);
  const current = properties[index];
  const isExhausted = index >= properties.length;

  const advance = useCallback(
    (direction: "left" | "right") => {
      if (!current) return;
      if (direction === "right") {
        const updatedWishlist = [...wishlist, current.id];
        setWishlist(updatedWishlist);
        localStorage.setItem('urbanest_wishlist', JSON.stringify(updatedWishlist));
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
      setLastDecision({ property: current, direction });
      setIndex((i) => i + 1);
    },
    [current, wishlist]
  );

  const undo = useCallback(() => {
    if (!lastDecision) return;
    setIndex((i) => Math.max(0, i - 1));
    setLastDecision(null);
  }, [lastDecision]);

  return (
    <div className="mx-auto flex w-full max-w-md md:max-w-4xl flex-col items-center relative">
      {/* Progress — position in the ledger, not a generic bar */}
      <div
        className="mb-6 font-mono text-xs tracking-wider"
        style={{ color: TOKENS.inkMuted }}
      >
        {isExhausted
          ? `${properties.length} OF ${properties.length} REVIEWED`
          : `LISTING ${index + 1} OF ${properties.length}`}
      </div>

      {/* Stack */}
      <div className="relative h-[400px] sm:h-[480px] md:h-[65vh] md:min-h-[500px] w-full">
        <AnimatePresence initial={false}>
          {!isExhausted &&
            visible.map((property, i) => (
              <motion.div
                key={property.id}
                className="absolute inset-0"
                exit={{
                  x: lastDecision?.direction === "right" ? 500 : -500,
                  rotate: lastDecision?.direction === "right" ? 20 : -20,
                  opacity: 0,
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
              >
                <SwipeCard
                  property={property}
                  isTop={i === 0}
                  stackDepth={i}
                  onDecision={advance}
                />
              </motion.div>
            ))}
        </AnimatePresence>

        {isExhausted && (
          <div
            className="flex h-full w-full flex-col items-center justify-center rounded-2xl border px-8 text-center"
            style={{ borderColor: TOKENS.hairline, background: TOKENS.surface }}
          >
            <BadgeCheck
              className="mb-4 h-8 w-8"
              style={{ color: TOKENS.brass }}
            />
            <p
              className="text-lg font-medium"
              style={{ color: TOKENS.ink, fontFamily: "'Fraunces', serif" }}
            >
              You've reviewed every listing
            </p>
            <p className="mt-2 text-sm" style={{ color: TOKENS.inkMuted }}>
              Refine your search criteria or check back — new inventory is
              added daily.
            </p>
            <button
              onClick={() => setIndex(0)}
              className="mt-6 rounded-full border px-5 py-2 text-sm font-medium transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 cursor-pointer"
              style={{ borderColor: TOKENS.brass, color: TOKENS.brass }}
            >
              Review again
            </button>
          </div>
        )}
      </div>



      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 font-medium tracking-wide border"
            style={{ 
              background: TOKENS.surfaceRaised, 
              color: TOKENS.brass,
              borderColor: TOKENS.brass 
            }}
          >
            <BadgeCheck className="w-5 h-5" /> Added to your wishlist
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
