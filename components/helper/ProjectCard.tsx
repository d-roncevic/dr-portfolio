import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  tech: string;
  image?: string;
  url?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  url,
}: Props) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-8 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>

        <p className="text-sm text-neutral-500">{tech}</p>
        {url && (
          <Link href={url} className="pt-4" target="_blank">
            <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all hover:underline">
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
