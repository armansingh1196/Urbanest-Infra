import Link from "next/link";
import { MapPin, IndianRupee } from "lucide-react";

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
      <div className="bg-card border border-border h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(200,160,80,0.1)] hover:border-primary/30">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          />
          {/* Overlay gradient for text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-xs uppercase tracking-widest px-3 py-1 font-medium shadow-sm">
            {status}
          </div>
          <div className="absolute bottom-4 left-4 flex gap-2">
             <span className="bg-primary/90 text-primary-foreground text-xs tracking-wider px-2 py-1 shadow-sm">{type}</span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-sm text-muted-foreground font-light mb-6 flex items-center">
            <MapPin className="w-3 h-3 mr-2" /> {location} <span className="mx-2 text-border">|</span> By {developer}
          </p>
          
          <div className="flex justify-between items-center border-t border-border pt-6 mt-auto">
            <span className="text-lg font-medium flex items-center">
               <IndianRupee className="w-4 h-4 mr-1 text-primary" /> {price}
            </span>
            <span className="text-xs uppercase tracking-widest text-primary font-medium group-hover:underline underline-offset-4 transition-all">Explore →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
