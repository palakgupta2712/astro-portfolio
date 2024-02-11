import React, { useState, type ReactNode, useContext } from "react"
import { create } from 'zustand'

type TGalleryStoreState = {
  showCarousel: boolean
}

type TGalleryStoreActions = {
  toggleCarousel: (showCarousel?: boolean) => void
}

type TGallyStore = TGalleryStoreState & TGalleryStoreActions

const useGalleryStore = create<TGallyStore>()((set) => ({
  showCarousel: false,
  toggleCarousel: (show) => set((state) => ({ showCarousel: show ?? !state.showCarousel })),
}))

type GalleryImageProps = {
  children: ReactNode
  path: string
}

export const GalleryItem = ({ path, children }: GalleryImageProps) => {
  const { toggleCarousel } = useGalleryStore()

  return (
    <div onClick={() => {
      toggleCarousel()
      console.log("hello", path)
    }}>
      {children}
    </div>
  )
}

type GalleryProps = {
  children: ReactNode
}

export const Gallery = ({ children }: GalleryProps) => {
  const [count, setCount] = useState(0)
  const { showCarousel } = useGalleryStore()
  console.log(showCarousel)

  return (
    <div className="text-gray-50 space-x-4">
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>add</button>
      <button onClick={() => setCount(prev => prev - 1)}>sub</button>
      <button onClick={() => setCount(0)}>reset</button>

      <div>
        {children}
      </div>
    </div>
  )
}