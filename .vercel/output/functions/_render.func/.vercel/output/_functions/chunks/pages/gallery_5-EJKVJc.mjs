/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent } from '../astro_2Dcw_akG.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, $ as $$Picture, a as $$BaseLayout } from './_id__vqzsd4pJ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { create } from 'zustand';

const images = /* #__PURE__ */ Object.assign({"/src/assets/gallery/Screenshot 2024-01-25 at 23.59.48.png": () => import('../Screenshot 2024-01-25 at 23.59.48_hJgJfniH.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.00.43.png": () => import('../Screenshot 2024-01-26 at 00.00.43_UotG0gKQ.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.00.56.png": () => import('../Screenshot 2024-01-26 at 00.00.56_yacJu_Mb.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.01.29.png": () => import('../Screenshot 2024-01-26 at 00.01.29_V6sJRFXk.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.01.47.png": () => import('../Screenshot 2024-01-26 at 00.01.47_PAyNZ4VX.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.02.05.png": () => import('../Screenshot 2024-01-26 at 00.02.05_DL41eLw8.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.02.30.png": () => import('../Screenshot 2024-01-26 at 00.02.30_Od92n0JB.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.02.57.png": () => import('../Screenshot 2024-01-26 at 00.02.57_dxFtgSrX.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.03.21.png": () => import('../Screenshot 2024-01-26 at 00.03.21_Du6xpa24.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.04.14.png": () => import('../Screenshot 2024-01-26 at 00.04.14_dG5d8IYL.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.09.14.png": () => import('../Screenshot 2024-01-26 at 00.09.14_0x5AnW9H.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.09.38.png": () => import('../Screenshot 2024-01-26 at 00.09.38_a5MfarMA.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.10.15.png": () => import('../Screenshot 2024-01-26 at 00.10.15_XQ9X1PLA.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.10.51.png": () => import('../Screenshot 2024-01-26 at 00.10.51_LE3Wj8pY.mjs')

});
const useGalleryStore = create()((set) => ({
  showCarousel: false,
  activeImageIndex: 0,
  setActiveImageIndex: (index) => set({ activeImageIndex: index }),
  toggleCarousel: (show, index) => set((state) => ({ showCarousel: show ?? !state.showCarousel, activeImageIndex: index ?? state.activeImageIndex }))
}));
const GalleryItem = ({ index, children }) => {
  const { toggleCarousel } = useGalleryStore();
  return /* @__PURE__ */ jsx("div", { onClick: () => toggleCarousel(true, index), children });
};
const getResolvedImages = async () => {
  const resolvedImages = await Promise.all(
    Object.entries(images).map(async ([path, image]) => {
      const { default: metadata } = await image();
      return { path, metadata };
    })
  );
  return resolvedImages;
};
const Carousel = () => {
  const { showCarousel, toggleCarousel, activeImageIdx, setActiveImageIdx } = useGalleryStore((store) => ({ showCarousel: store.showCarousel, toggleCarousel: store.toggleCarousel, activeImageIdx: store.activeImageIndex, setActiveImageIdx: store.setActiveImageIndex }));
  const [images2, setImages] = useState([]);
  const setResolvedImagesImages = useCallback(async () => {
    const resolvedImages = await getResolvedImages();
    setImages(resolvedImages);
  }, []);
  const handleEsc = useCallback((e) => {
    if (e.key === "Escape") {
      toggleCarousel(false);
    }
  }, []);
  useEffect(() => {
    setResolvedImagesImages();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);
  if (!showCarousel)
    return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 w-full h-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full z-[100] relative flex flex-col p-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full bg-black/80 backdrop-blur-sm z-50", onClick: () => toggleCarousel(false) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto flex-1 relative z-[100]", children: /* @__PURE__ */ jsx("img", { src: images2[activeImageIdx]?.metadata.src, className: "w-max max-w-full h-auto aspect-video object-contain" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-[100] w-max mx-auto flex items-center text-white justify-center gap-4", children: [
      /* @__PURE__ */ jsx("button", { className: "p-3", onClick: () => setActiveImageIdx(activeImageIdx <= 0 ? 0 : activeImageIdx - 1), children: "prev" }),
      /* @__PURE__ */ jsx("button", { className: "p-3", onClick: () => setActiveImageIdx(activeImageIdx >= images2.length - 1 ? activeImageIdx : activeImageIdx + 1), children: "next" })
    ] })
  ] }) });
};
const Gallery = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 py-8", children }),
    /* @__PURE__ */ jsx(Carousel, {})
  ] });
};

const $$Astro$1 = createAstro();
const $$GalleryImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GalleryImage;
  const { image, altText, ...props } = Astro2.props;
  if (!image)
    throw new Error(
      `"${image}" does not exist in glob: "src/assets/gallery/*.{jpeg,jpg,png,gif}"`
    );
  return renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": image, "alt": altText, "class": cn("w-full h-auto", props.class) })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/gallery-image.astro", void 0);

const $$Astro = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/gallery/Screenshot 2024-01-25 at 23.59.48.png": () => import('../Screenshot 2024-01-25 at 23.59.48_hJgJfniH.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.00.43.png": () => import('../Screenshot 2024-01-26 at 00.00.43_UotG0gKQ.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.00.56.png": () => import('../Screenshot 2024-01-26 at 00.00.56_yacJu_Mb.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.01.29.png": () => import('../Screenshot 2024-01-26 at 00.01.29_V6sJRFXk.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.01.47.png": () => import('../Screenshot 2024-01-26 at 00.01.47_PAyNZ4VX.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.02.05.png": () => import('../Screenshot 2024-01-26 at 00.02.05_DL41eLw8.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.02.30.png": () => import('../Screenshot 2024-01-26 at 00.02.30_Od92n0JB.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.02.57.png": () => import('../Screenshot 2024-01-26 at 00.02.57_dxFtgSrX.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.03.21.png": () => import('../Screenshot 2024-01-26 at 00.03.21_Du6xpa24.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.04.14.png": () => import('../Screenshot 2024-01-26 at 00.04.14_dG5d8IYL.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.09.14.png": () => import('../Screenshot 2024-01-26 at 00.09.14_0x5AnW9H.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.09.38.png": () => import('../Screenshot 2024-01-26 at 00.09.38_a5MfarMA.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.10.15.png": () => import('../Screenshot 2024-01-26 at 00.10.15_XQ9X1PLA.mjs'),"/src/assets/gallery/Screenshot 2024-01-26 at 00.10.51.png": () => import('../Screenshot 2024-01-26 at 00.10.51_LE3Wj8pY.mjs')

});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "max-w-full" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryWrapper", Gallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/gallery", "client:component-export": "Gallery" }, { "default": ($$result3) => renderTemplate`${Object.entries(images).map((image, index) => renderTemplate`${renderComponent($$result3, "GalleryItem", GalleryItem, { "client:load": true, "index": index, "client:component-hydration": "load", "client:component-path": "@/components/gallery", "client:component-export": "GalleryItem" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GalleryImage", $$GalleryImage, { "image": image[1](), "altText": `${index}.alt` })} ` })}`)}` })} ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/gallery.astro", void 0);

const $$file = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
