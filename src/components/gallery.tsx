import React, { useState, type ReactNode } from "react"


type GalleryProps = {
  children: ReactNode
}

export const Gallery = ({ children }: GalleryProps) => {
  const [count, setCount] = useState(0)

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

// Gallery.Image = GalleryImage