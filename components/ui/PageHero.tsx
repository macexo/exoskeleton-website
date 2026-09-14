import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow, title, accent, children, image, imageAlt = "", focal = "center",
  actions, variant = "split", imageCaption,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  focal?: string;
  actions?: ReactNode;
  variant?: "split" | "wide" | "plain";
  imageCaption?: string;
}) {
  return (
    <header className={`page-hero page-hero--${image ? variant : "plain"}`}>
      <div className="home-container">
        <div className="page-hero-layout">
          <div className="page-hero-copy">
            {eyebrow && <p className="eyebrow"><span className="eyebrow-rule" />{eyebrow}</p>}
            <h1>{title}{accent && <> <span>{accent}</span></>}</h1>
            {children && <div className="page-hero-description">{children}</div>}
            {actions && <div className="page-actions">{actions}</div>}
          </div>
          {image && <figure className="page-hero-image">
            <Image src={image} alt={imageAlt} fill priority sizes={variant === "wide" ? "100vw" : "(max-width: 760px) 100vw, 50vw"} className="object-cover" style={{ objectPosition: focal }} />
            {imageCaption && <figcaption>{imageCaption}</figcaption>}
          </figure>}
        </div>
      </div>
    </header>
  );
}
