"use client";

import { useState } from "react";
import Image from "next/image";

const PHOTOS = [
  {
    src: "/ace_2026/IMG_4128.JPG",
    alt: "McMaster team members checking the exoskeleton outdoors before an ACE 2026 event.",
    caption: "Every run starts with the team.",
  },
  {
    src: "/ace_2026/IMG_4800.JPG",
    alt: "Teammates kneeling beside the pilot to adjust the exoskeleton's leg assemblies.",
    caption: "Adjust. Test. Learn. Repeat.",
  },
  {
    src: "/ace_2026/IMG_4563.jpg",
    alt: "Pilots from competing university teams standing together in their exoskeletons at ACE 2026.",
    caption: "Different teams. A shared ambition.",
  },
];

export default function HomeCompetitionGallery() {
  const [index, setIndex] = useState(0);
  const photo = PHOTOS[index];

  return (
    <figure aria-label="ACE 2026 photo gallery">
      <div className="competition-gallery-photo">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 760px) 100vw, 55vw"
          className="object-cover"
        />
        <span className="photo-index">ACE 2026 / McMaster</span>
      </div>
      <div className="gallery-footer">
        <figcaption aria-live="polite" aria-atomic="true">
          <span>{String(index + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}</span>
          {photo.caption}
        </figcaption>
        <div className="gallery-controls">
          <button type="button" aria-label="Previous competition photo" onClick={() => setIndex((index + PHOTOS.length - 1) % PHOTOS.length)}>←</button>
          <button type="button" aria-label="Next competition photo" onClick={() => setIndex((index + 1) % PHOTOS.length)}>→</button>
        </div>
      </div>
    </figure>
  );
}
