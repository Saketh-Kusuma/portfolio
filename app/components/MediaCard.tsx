"use client";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";

type MediaCardProps = {
  href: string;
  /** Projects link off-site; blogs stay internal. Controls target + the arrow affordance. */
  external?: boolean;
  image: string;
  title: string;
  description: string;
  /** "Jun 24, 2026 · 3 min read" or "React · Node.js". Rendered between title and description. */
  meta?: string;
  /** Stagger position in the grid. */
  index?: number;
};

/**
 * Borderless media card: the image sits directly on the page background with no
 * frame, fill, or shadow — matching Landing-Blogs and the About page rather
 * than the boxed UI-kit look the cards used to have. Hover is a slight image
 * zoom, plus the arrow sliding in on external links.
 */
const MediaCard = ({
  href,
  external = false,
  image,
  title,
  description,
  meta,
  index = 0,
}: MediaCardProps) => (
  <FadeUp delay={index * 0.1} className="group">
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="block"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          alt={title}
          src={image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-3">
        {/* Keep the title on --primary in both themes: no dark:text-neutral-100
            override, since --primary already resolves to neutral-100 in dark. */}
        <h2 className="flex items-center gap-1 text-primary font-medium tracking-tight text-sm sm:text-base">
          {title}
          {external && (
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0" />
          )}
        </h2>
        {meta && (
          <p className="text-secondary text-xs mt-1">{meta}</p>
        )}
        <p className="text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  </FadeUp>
);

export default MediaCard;
