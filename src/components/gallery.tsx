import React, { useEffect, useState, type ReactNode, useCallback } from "react";
import { create } from 'zustand';

import type { ImageMetadata } from "astro";
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/gallery/*.{jpeg,jpg,png}"
);

type TGalleryStoreState = {
  showCarousel: boolean
  activeImageIndex: number
}

type TGalleryStoreActions = {
  setActiveImageIndex: (index: number) => void
  toggleCarousel: (showCarousel?: boolean, index?: number) => void
}

type TGallyStore = TGalleryStoreState & TGalleryStoreActions

const useGalleryStore = create<TGallyStore>()((set) => ({
  showCarousel: false,
  activeImageIndex: 0,
  setActiveImageIndex: (index) => set({ activeImageIndex: index }),
  toggleCarousel: (show, index) => set((state) => ({ showCarousel: show ?? !state.showCarousel, activeImageIndex: index ?? state.activeImageIndex })),
}))

type GalleryImageProps = {
  children: ReactNode
  index: number
}

export const GalleryItem = ({ index, children }: GalleryImageProps) => {
  const { toggleCarousel } = useGalleryStore()

  return (
    <div onClick={() => toggleCarousel(true, index)}>
      {children}
    </div>
  )
}

const getResolvedImages = async () => {
  const resolvedImages = await Promise.all(
    Object.entries(images).map(async ([path, image]) => {
      const { default: metadata } = await image()
      return { path, metadata }
    })
  )

  return resolvedImages
}

const Carousel = () => {
  const { showCarousel, toggleCarousel, activeImageIdx, setActiveImageIdx } = useGalleryStore(store => ({ showCarousel: store.showCarousel, toggleCarousel: store.toggleCarousel, activeImageIdx: store.activeImageIndex, setActiveImageIdx: store.setActiveImageIndex }))

  const [images, setImages] = useState<Awaited<ReturnType<typeof getResolvedImages>>>([])

  const setResolvedImagesImages = useCallback(async () => {
    const resolvedImages = await getResolvedImages()
    setImages(resolvedImages)
  }, [])

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      toggleCarousel(false)
    }
  }, [])

  useEffect(() => {
    setResolvedImagesImages()
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  if (!showCarousel) return null

  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="w-full h-full z-[100] relative grid place-items-center">
        <div className="absolute inset-0 w-full h-full bg-black/80 backdrop-blur z-50" onClick={() => toggleCarousel(false)} />

        <div className="max-w-7xl mx-auto flex-1 relative z-[100]">
          <img src={images[activeImageIdx]?.metadata.src} className="w-full md:w-max max-w-full h-auto aspect-video object-contain" />
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[100] w-max mx-auto flex items-center text-white justify-center gap-4">
          <button className="p-3" onClick={() => setActiveImageIdx(activeImageIdx <= 0 ? 0 : activeImageIdx - 1)}>prev</button>
          <button className="p-3" onClick={() => setActiveImageIdx(activeImageIdx >= images.length - 1 ? activeImageIdx : activeImageIdx + 1)}>next</button>
        </div>
      </div>
    </div>
  )
}

type GalleryProps = {
  children: ReactNode
}

export const Gallery = ({ children }: GalleryProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
        {children}
      </div>

      <Carousel />
    </div>
  )
}
