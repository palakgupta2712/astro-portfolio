/* empty css                         */
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, n as renderComponent, u as unescapeHTML, o as renderSlot, p as renderHead, F as Fragment } from '../astro_2Dcw_akG.mjs';
import 'kleur/colors';
import 'clsx';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS, p as prependForwardSlash } from '../astro/assets-service_v7Mwhp1y.mjs';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_v7Mwhp1y.mjs'
    ).then(n => n.g).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$e = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/node_modules/.pnpm/astro@4.1.2_typescript@5.3.3/node_modules/astro/components/Image.astro", void 0);

const $$Astro$d = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/node_modules/.pnpm/astro@4.1.2_typescript@5.3.3/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/yashraj/Documents/pr/tejas-portfolio/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/Mediator _in_CSharp.md": () => import('../Mediator _in_CSharp_2d1lWdPg.mjs'),"/src/content/posts/No more lonely data.md": () => import('../No more lonely data_PQ0sAE1X.mjs'),"/src/content/posts/Storing-Prices-the-Right-Way -in-Your-SQL-Database.md": () => import('../Storing-Prices-the-Right-Way -in-Your-SQL-Database_xafKPXvp.mjs'),"/src/content/posts/TPC_C_Benchmark.md": () => import('../TPC_C_Benchmark_nLuHbs1w.mjs'),"/src/content/posts/Trade_Offs_whilemaking_Database_choice.md": () => import('../Trade_Offs_whilemaking_Database_choice_4f-Ib1n1.mjs'),"/src/content/posts/cors.md": () => import('../cors_Cwm6HMka.mjs'),"/src/content/posts/datadurabilityinmemory.md": () => import('../datadurabilityinmemory_kb7UsOLr.mjs'),"/src/content/posts/lsmvsbplustree.md": () => import('../lsmvsbplustree_KZj4F1Fn.mjs'),"/src/content/posts/mix-and-match-two-DotNet-Versions.md": () => import('../mix-and-match-two-DotNet-Versions_WZFRx1Hk.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"mediator-_in_csharp":"/src/content/posts/Mediator _in_CSharp.md","storing-prices-the-right-way--in-your-sql-database":"/src/content/posts/Storing-Prices-the-Right-Way -in-Your-SQL-Database.md","trade_offs_whilemaking_database_choice":"/src/content/posts/Trade_Offs_whilemaking_Database_choice.md","tpc_c_benchmark":"/src/content/posts/TPC_C_Benchmark.md","cors":"/src/content/posts/cors.md","no-more-lonely-data":"/src/content/posts/No more lonely data.md","datadurabilityinmemory":"/src/content/posts/datadurabilityinmemory.md","lsmvsbplustree":"/src/content/posts/lsmvsbplustree.md","mix-and-match-two-dotnet-versions":"/src/content/posts/mix-and-match-two-DotNet-Versions.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/Mediator _in_CSharp.md": () => import('../Mediator _in_CSharp_R7qdJGax.mjs'),"/src/content/posts/No more lonely data.md": () => import('../No more lonely data_lt_zJpLR.mjs'),"/src/content/posts/Storing-Prices-the-Right-Way -in-Your-SQL-Database.md": () => import('../Storing-Prices-the-Right-Way -in-Your-SQL-Database_EVc6YUL4.mjs'),"/src/content/posts/TPC_C_Benchmark.md": () => import('../TPC_C_Benchmark_UPokqnoM.mjs'),"/src/content/posts/Trade_Offs_whilemaking_Database_choice.md": () => import('../Trade_Offs_whilemaking_Database_choice_X6RWwIru.mjs'),"/src/content/posts/cors.md": () => import('../cors_hh5rb98P.mjs'),"/src/content/posts/datadurabilityinmemory.md": () => import('../datadurabilityinmemory_7BeL_C4r.mjs'),"/src/content/posts/lsmvsbplustree.md": () => import('../lsmvsbplustree_kwTBixKx.mjs'),"/src/content/posts/mix-and-match-two-DotNet-Versions.md": () => import('../mix-and-match-two-DotNet-Versions_HAOgaMb2.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$c = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/node_modules/.pnpm/astro@4.1.2_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$b = createAstro();
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")} class="px-2 py-2 block"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/nav-link.astro", void 0);

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav class="-ml-2"> <ul class="flex text-stone-300 pt-8 pb-2"> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "to": "/" }, { "default": ($$result2) => renderTemplate`home` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "to": "/blog" }, { "default": ($$result2) => renderTemplate`blog` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "to": "/projects" }, { "default": ($$result2) => renderTemplate`projects` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "to": "/gallery" }, { "default": ($$result2) => renderTemplate`gallery` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "to": "/resume" }, { "default": ($$result2) => renderTemplate`resume` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "to": "/open-source" }, { "default": ($$result2) => renderTemplate`open source` })} </li> </ul> </nav> </header>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/header.astro", void 0);

const cn = (...args) => {
  return twMerge(args.filter(Boolean).join(" "));
};

const $$Astro$9 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const USER = "Amit Prakash";
  const { title, post, ...props } = Astro2.props;
  const pageTitle = title ? `${title} - ${USER}` : USER;
  const metaImage = post?.data.image.url || "/favicon.jpg";
  const metaURL = post?.slug || "/";
  const metaDescription = post?.body?.slice(0, 100) || "Unveiled Engineering with Amit Prakash";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.jpg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(metaDescription, "content")}><meta property="og:image:width" content="300"><meta property="og:image:height" content="300"><meta property="og:image"${addAttribute(metaImage, "content")}><meta property="og:url"${addAttribute(metaURL, "content")}><meta property="og:type" content="website"><title>${pageTitle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-[#0C0A09]"> <main${addAttribute(cn("max-w-screen-sm px-6 mx-auto", props.class), "class")}> ${renderComponent($$result, "Navbar", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/layouts/base-layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Text = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Text;
  const textStyles = cva([], {
    variants: {
      variant: {
        h1: ["text-3xl font-bold"],
        h2: ["text-2xl font-bold"],
        h3: ["text-xl font-bold"],
        h4: ["text-base font-bold"],
        p: ["text-base pb-3"],
        span: ["text-sm"]
      }
    }
  });
  const { variant = "p", ...props } = Astro2.props;
  const getHtmlElementFromVariant = (variant2) => {
    switch (variant2) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "p":
        return "p";
      case "span":
        return "span";
      default:
        return "p";
    }
  };
  const Element = getHtmlElementFromVariant(variant);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Element", Element, { "class": cn(textStyles({ variant }), props.class) }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })}` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/text.astro", void 0);

const $$Astro$7 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Link;
  const { to, target, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")}${addAttribute(target, "target")}${addAttribute(cn("underline underline-offset-4 text-stone-100", props.class), "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/link.astro", void 0);

const $$Astro$6 = createAstro();
const $$GithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${addAttribute(cn(props.class), "class")}> <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/github-icon.astro", void 0);

const $$Astro$5 = createAstro();
const $$LinkedIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkedIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${addAttribute(cn(props.class), "class")}> <title>LinkedIn</title> <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/linked-icon.astro", void 0);

const $$Astro$4 = createAstro();
const $$XIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$XIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${addAttribute(cn(props.class), "class")}> <title>X</title> <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/x-icon.astro", void 0);

const $$Astro$3 = createAstro();
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const links = [
    {
      title: "GitHub",
      icon: $$GithubIcon,
      alt: "Amit Prakash's GitHub profile link",
      href: "https://github.com/iamitprakash"
    },
    {
      title: "LinkedIn",
      icon: $$LinkedIcon,
      alt: "Amit Prakash's LinkedIn profile link",
      href: "https://www.linkedin.com/in/dev-amit-prakash/"
    },
    {
      title: "Twitter",
      icon: $$XIcon,
      alt: "Amit Prakash's Twitter profile link",
      href: "https://twitter.com/twts_tejas"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-1 flex-wrap -mx-3"> ${links.map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": link.href, "target": "_blank", "class": "no-underline flex items-center gap-2 text-stone-100 py-2 px-3 rounded-lg transition hover:bg-stone-800" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "link.icon", link.icon, { "class": "w-5 h-5" })} ${renderComponent($$result2, "Text", $$Text, { "variant": "span", "class": "text-base" }, { "default": ($$result3) => renderTemplate`${link.title}` })} ` })}`)} </div>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/social-links.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArrowBackwardIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowBackwardIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M19 12H6M12 5l-7 7 7 7"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/arrow-backward-icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "post": post, "class": "max-w-screen-md" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-6"> <a class="text-white bg-transparent text-gray-800 font-bold p-1 rounded inline-flex items-center  rounded-lg mb-3" href="/blog"> ${renderComponent($$result2, "ArrowBackwardIcon", $$ArrowBackwardIcon, {})} <span class="text-white bg-transparent ms-1"> Back</span> </a> <div class="pb-6"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "pb-2 text-stone-100 sm:text-4xl" }, { "default": ($$result3) => renderTemplate`${post.data.title}` })} <div class="flex items-center gap-2"> ${renderComponent($$result2, "Text", $$Text, { "variant": "span", "class": "text-stone-400" }, { "default": ($$result3) => renderTemplate`${dayjs(post.data.pubDate).format("MMM DD YYYY")}` })} <div class="w-1 h-1 rounded-full bg-stone-500"></div> ${renderComponent($$result2, "Text", $$Text, { "variant": "span", "class": "text-stone-400" }, { "default": ($$result3) => renderTemplate`${10}min
` })} </div> </div> <div class="bg-gray-100 w-full aspect-video overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image.url, "alt": post.data.image.alt, "width": 1024, "height": 384, "class": "w-full h-full object-cover" })} </div> </div> <div class="pt-6 pb-16 md:pt-8 md:pb-20"> ${renderSlot($$result2, $$slots["default"])} <div class="py-12 md:py-16"> <div class="w-28 mx-auto h-0.5 bg-stone-800"></div> </div> <div> ${renderComponent($$result2, "Text", $$Text, { "variant": "h4", "class": "text-sm uppercase text-stone-100 tracking pb-4 block font-medium" }, { "default": ($$result3) => renderTemplate`
Find me on
` })} ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})} </div> </div> ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/layouts/blog-layout.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const blogPosts = await getCollection("posts");
  return blogPosts.map((post) => ({
    params: { id: post.slug },
    props: { post }
  }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "post": post }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-stone prose-invert prose-img:rounded-xl prose-a:text-blue-600"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Picture as $, _id_ as _, $$BaseLayout as a, $$Text as b, cn as c, getCollection as d, $$Image as e, $$Link as f, getConfiguredImageService as g, $$SocialLinks as h, imageConfig as i };
