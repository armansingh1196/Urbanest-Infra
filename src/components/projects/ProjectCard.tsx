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
      <div 
        className="bg-card h-full flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
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
                "linear-gradient(180deg, rgba(23,23,27,0) 55%, rgba(23,23,27,0.85) 100%)",
            }}
          />
          
          <div
            className="absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wider"
            style={{
              borderColor: "rgba(245,243,239,0.25)",
              color: "#F5F3EF",
              background: "rgba(23,23,27,0.55)",
              backdropFilter: "blur(6px)",
            }}
          >
            {type.toUpperCase()}
          </div>

          <div
            className="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide text-background bg-primary"
          >
            {status}
          </div>

          {/* Price tag, deed-plaque style */}
          <div
            className="absolute bottom-4 left-4 rounded-lg border px-3 py-1.5"
            style={{
              borderColor: "rgba(245,243,239,0.18)",
              background: "rgba(23,23,27,0.6)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="font-serif text-xl tracking-wide text-primary"
            >
              {price}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 justify-between px-5 py-4">
          <div>
            <h3 className="text-lg font-serif font-medium leading-snug group-hover:text-primary transition-colors">{name}</h3>
            <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {location}
              </div>
              <div className="font-light opacity-80 mt-1">
                Developer: {developer}
              </div>
            </div>
          </div>
          
          <div
            className="flex items-center justify-between border-t pt-3 mt-4 font-mono text-xs text-muted-foreground"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
             <span className="opacity-70 group-hover:text-primary group-hover:opacity-100 transition-colors uppercase tracking-widest">
               Explore Details →
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
