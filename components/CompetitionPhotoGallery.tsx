"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/competitions";

export default function CompetitionPhotoGallery({ photos, year }: { photos: GalleryItem[]; year: number }) {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [active]);

  const close = () => {
    dialog.current?.close();
    setActive(null);
    trigger.current?.focus();
  };
  const move = (direction: number) => setActive(current => current === null ? null : (current + direction + photos.length) % photos.length);

  return <>
    <div className="competition-photo-grid">{photos.map((photo,i)=><figure key={photo.src}>
      <button type="button" onClick={event=>{trigger.current=event.currentTarget;setActive(i);dialog.current?.showModal();}} aria-label={`Enlarge photo ${i+1}: ${photo.alt}`}><Image src={photo.src} alt={photo.alt} fill sizes={i===0 ? "(max-width: 760px) 100vw, 65vw" : "(max-width: 760px) 100vw, 33vw"} className={`object-cover ${photo.position ?? ""}`} /><span className="photo-expand" aria-hidden="true">↗</span></button>
      <figcaption><span>{String(i+1).padStart(2,"0")} / ACE {year}</span>{photo.alt}</figcaption>
    </figure>)}</div>
    <dialog ref={dialog} className="photo-dialog" aria-label={`ACE ${year} photo viewer`} onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target===event.currentTarget)close();}} onKeyDown={event=>{if(event.key==="ArrowRight"){event.preventDefault();move(1);}if(event.key==="ArrowLeft"){event.preventDefault();move(-1);}}}>
      <div className="photo-dialog-content"><button type="button" className="photo-dialog-close" onClick={close} aria-label="Close photo viewer">Close <span aria-hidden="true">×</span></button>
        {active !== null && <><div className="photo-dialog-image"><Image src={photos[active].src} alt={photos[active].alt} fill sizes="90vw" className="object-contain" /></div><div className="photo-dialog-bottom"><button type="button" aria-label="Previous photo" onClick={()=>move(-1)}>←</button><div aria-live="polite"><span>{String(active+1).padStart(2,"0")} / {String(photos.length).padStart(2,"0")}</span><p>{photos[active].alt}</p></div><button type="button" aria-label="Next photo" onClick={()=>move(1)}>→</button></div></>}
      </div>
    </dialog>
  </>;
}
