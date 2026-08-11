import Link from "next/link";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  id: string;
  name: string;
  developer: string;
  location: string;
  price: string;
  imageUrl: string;
  type: string;
  status: string;
}

export function ProjectCard({ id, name, developer, location, price, imageUrl, type, status }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="group block cursor-pointer h-full">
      <div className="plan-corners bg-card h-full flex flex-col overflow-hidden border border-border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] hover:border-primary/30">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(21,19,15,0) 55%, rgba(21,19,15,0.9) 100%)",
            }}
          />

          <div className="absolute left-3 top-3 sm:left-4 sm:top-4 border border-foreground/20 px-2 py-0.5 sm:px-3 sm:py-1 font-mono text-[9px] sm:text-[10px] tracking-wider bg-background/55 backdrop-blur-sm text-foreground">
            {type.toUpperCase()}
          </div>

          <div className="absolute right-3 top-3 sm:right-4 sm:top-4 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-mono tracking-wide text-primary-foreground bg-primary">
            {status.toUpperCase()}
          </div>

          {/* Price tag, deed-plaque style */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 border border-foreground/15 px-2 py-1 sm:px-3 sm:py-1.5 bg-background/60 backdrop-blur-sm">
            <span className="font-serif text-lg sm:text-xl tracking-wide text-primary">
              {price}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-between px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <h3 className="text-base sm:text-lg font-serif font-medium leading-snug group-hover:text-primary transition-colors">{name}</h3>
            <div className="mt-1 flex flex-col gap-1 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {location}
              </div>
              <div className="font-light opacity-80 mt-1">
                Developer: {developer}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-3 mt-4 font-mono text-[11px] text-muted-foreground">
             <span className="opacity-70 group-hover:text-primary group-hover:opacity-100 transition-colors uppercase tracking-widest">
               Explore Details →
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
