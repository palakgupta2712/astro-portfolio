/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderComponent } from '../astro_2Dcw_akG.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, b as $$Text, d as getCollection, e as $$Image, f as $$Link, h as $$SocialLinks, a as $$BaseLayout } from './_id__vqzsd4pJ.mjs';
import dayjs from 'dayjs';

const $$Astro$f = createAstro();
const $$CopyIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$CopyIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(cn(props.class), "class")}> <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/copy-icon.astro", void 0);

const $$Astro$e = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Mail;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(cn(props.class), "class")}> <rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/mail.astro", void 0);

const $$Astro$d = createAstro();
const $$CopiedTextIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CopiedTextIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="45" height="17" viewBox="0 0 45 17" fill="none"${addAttribute(cn(props.class), "class")}> <path d="M0.4 10.296C0.4 9.54933 0.634667 8.728 1.104 7.832C1.57333 6.936 2.18667 6.168 2.944 5.528C3.712 4.888 4.464 4.568 5.2 4.568C5.57333 4.568 5.95733 4.81333 6.352 5.304C6.74667 5.784 6.944 6.216 6.944 6.6C6.944 6.87733 6.816 7.016 6.56 7.016C6.432 7.016 6.256 6.95733 6.032 6.84C5.808 6.72267 5.57867 6.664 5.344 6.664C5.10933 6.664 4.77333 6.86667 4.336 7.272C3.90933 7.66667 3.52533 8.14667 3.184 8.712C2.85333 9.26667 2.688 9.704 2.688 10.024C2.688 10.344 2.74667 10.552 2.864 10.648C2.992 10.744 3.29067 10.792 3.76 10.792C4.24 10.792 4.672 10.7493 5.056 10.664C5.45067 10.5787 5.73867 10.4933 5.92 10.408C6.112 10.312 6.28267 10.264 6.432 10.264C6.73067 10.264 6.88 10.392 6.88 10.648C6.88 11.1173 6.46933 11.5973 5.648 12.088C4.82667 12.568 4.00533 12.808 3.184 12.808C2.66133 12.808 2.064 12.52 1.392 11.944C0.730667 11.3573 0.4 10.808 0.4 10.296ZM10.4841 11.176C11.0601 10.92 11.5615 10.4027 11.9881 9.624C12.4148 8.84533 12.6281 8.11467 12.6281 7.432C12.6281 6.74933 12.5321 6.28 12.3401 6.024C11.8815 6.29067 11.4228 6.85067 10.9641 7.704C10.5161 8.55733 10.2921 9.30933 10.2921 9.96C10.2921 10.6 10.3561 11.0053 10.4841 11.176ZM8.14813 10.12C8.14813 8.78667 8.55879 7.52267 9.38013 6.328C10.2121 5.13333 11.0335 4.536 11.8441 4.536C12.6548 4.536 13.3375 4.824 13.8921 5.4C14.4468 5.96533 14.7241 6.65333 14.7241 7.464C14.7241 8.264 14.5321 9.08 14.1481 9.912C13.7641 10.744 13.2255 11.4373 12.5321 11.992C11.8388 12.536 11.0975 12.808 10.3081 12.808C9.72146 12.808 9.21479 12.5467 8.78813 12.024C8.36146 11.5013 8.14813 10.8667 8.14813 10.12ZM21.333 4.568C21.7277 4.568 22.149 4.92 22.597 5.624C23.0557 6.328 23.285 7.032 23.285 7.736C23.285 8.16267 23.1037 8.66933 22.741 9.256C22.3783 9.84267 21.9197 10.3973 21.365 10.92C20.821 11.432 20.1863 11.8693 19.461 12.232C18.7463 12.5947 18.0637 12.776 17.413 12.776H17.221C16.549 15.5707 16.0743 16.968 15.797 16.968C15.573 16.968 15.3383 16.7813 15.093 16.408C14.837 16.0347 14.709 15.7253 14.709 15.48C14.709 15.2347 14.8637 14.4827 15.173 13.224C16.0903 9.49067 16.549 6.67467 16.549 4.776C16.549 4.456 16.7037 4.296 17.013 4.296C17.269 4.296 17.5943 4.44 17.989 4.728C18.3837 5.016 18.629 5.38933 18.725 5.848C19.6317 4.99467 20.501 4.568 21.333 4.568ZM17.717 10.872C18.549 10.712 19.333 10.2533 20.069 9.496C20.8157 8.73867 21.189 8.08267 21.189 7.528C21.189 6.97333 21.0343 6.696 20.725 6.696C20.277 6.696 19.8023 6.952 19.301 7.464C19.0983 7.67733 18.8743 7.992 18.629 8.408C18.3837 8.824 18.1703 9.30933 17.989 9.864L17.717 10.872ZM25.7024 2.552C25.7024 2.27467 25.825 1.992 26.0704 1.704C26.3264 1.40533 26.5717 1.256 26.8064 1.256C27.0517 1.256 27.3397 1.544 27.6704 2.12C28.001 2.696 28.1664 3.11733 28.1664 3.384C28.1664 3.64 28.081 3.83733 27.9104 3.976C27.7397 4.11467 27.5637 4.184 27.3824 4.184C27.073 4.184 26.7157 3.98133 26.3104 3.576C25.905 3.17067 25.7024 2.82933 25.7024 2.552ZM25.9424 4.552C26.3157 4.552 26.6464 4.76533 26.9344 5.192C27.233 5.61867 27.3824 6.02933 27.3824 6.424C27.3824 6.62667 27.1957 7.35733 26.8224 8.616C26.4597 9.864 26.097 11.048 25.7344 12.168C25.6064 12.584 25.345 12.792 24.9504 12.792C24.7157 12.792 24.5077 12.7067 24.3264 12.536C24.1557 12.3547 24.0704 12.1253 24.0704 11.848C24.0704 11.56 24.2037 10.856 24.4704 9.736C24.7477 8.60533 24.9557 7.64533 25.0944 6.856C25.2437 6.056 25.377 5.47467 25.4944 5.112C25.6224 4.73867 25.7717 4.552 25.9424 4.552ZM35.4586 7.544C35.4586 8.06667 35.1013 8.536 34.3866 8.952C33.6826 9.368 32.9573 9.576 32.2106 9.576C31.464 9.576 30.8506 9.52267 30.3706 9.416C30.2746 9.704 30.2266 9.992 30.2266 10.28C30.2266 10.568 30.2746 10.776 30.3706 10.904C30.4666 11.0213 30.7066 11.08 31.0906 11.08C31.8906 11.08 32.5733 11.0053 33.1386 10.856C33.7146 10.7067 34.0133 10.632 34.0346 10.632C34.472 10.632 34.6906 10.776 34.6906 11.064C34.6906 11.48 34.344 11.8747 33.6506 12.248C32.968 12.6213 32.1733 12.808 31.2666 12.808C30.3706 12.808 29.6506 12.5253 29.1066 11.96C28.5626 11.3947 28.2906 10.728 28.2906 9.96C28.2906 9.18133 28.5146 8.37067 28.9626 7.528C29.4213 6.68533 29.992 5.98133 30.6746 5.416C31.3573 4.84 32.0346 4.552 32.7066 4.552C33.3893 4.552 34.0186 4.888 34.5946 5.56C35.1706 6.22133 35.4586 6.88267 35.4586 7.544ZM33.6026 7.288C33.6026 7.18133 33.4906 7.02667 33.2666 6.824C33.0426 6.62133 32.8293 6.52 32.6266 6.52C32.4346 6.52 32.184 6.664 31.8746 6.952C31.5653 7.22933 31.272 7.592 30.9946 8.04C31.0906 8.05067 31.2293 8.056 31.4106 8.056C32.872 8.056 33.6026 7.8 33.6026 7.288ZM42.9351 0.0719995C43.1911 0.0719995 43.5271 0.306666 43.9431 0.775999C44.3591 1.23467 44.5671 1.66667 44.5671 2.072C44.5671 2.27467 44.3805 3.11733 44.0071 4.6C43.6338 6.08267 43.4098 6.97867 43.3351 7.288C42.4818 10.968 41.8578 12.808 41.4631 12.808C41.2391 12.808 40.9885 12.6747 40.7111 12.408C40.4338 12.1413 40.2951 11.88 40.2951 11.624C40.2951 11.5707 40.3005 11.528 40.3111 11.496C39.2445 12.3707 38.4765 12.808 38.0071 12.808C37.5485 12.808 37.1005 12.5627 36.6631 12.072C36.2365 11.5707 36.0231 11.1173 36.0231 10.712C36.0231 10.3067 36.0765 9.85867 36.1831 9.368C36.3005 8.86667 36.4765 8.33867 36.7111 7.784C36.9458 7.22933 37.2125 6.712 37.5111 6.232C37.8205 5.74133 38.1885 5.34133 38.6151 5.032C39.0525 4.712 39.5005 4.552 39.9591 4.552C40.6418 4.552 41.2018 4.89867 41.6391 5.592C42.2151 3.064 42.4925 1.384 42.4711 0.551999C42.4711 0.231999 42.6258 0.0719995 42.9351 0.0719995ZM38.2151 10.776C38.4818 10.776 38.9298 10.5467 39.5591 10.088C40.1991 9.62933 40.6738 9.048 40.9831 8.344C40.9725 8.25867 40.9671 8.072 40.9671 7.784C40.9671 7.496 40.8711 7.224 40.6791 6.968C40.4871 6.712 40.3111 6.584 40.1511 6.584C39.8311 6.584 39.5218 6.75467 39.2231 7.096C38.9351 7.43733 38.7058 7.84267 38.5351 8.312C38.1725 9.304 37.9911 10.056 37.9911 10.568C37.9911 10.6533 38.0018 10.712 38.0231 10.744C38.0551 10.7653 38.1191 10.776 38.2151 10.776Z" fill="#A8A29E"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/copied-text-icon.astro", void 0);

const $$Astro$c = createAstro();
const $$ContactMePill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ContactMePill;
  const contactEmail = "contact@amitprakash.me";
  return renderTemplate`${maybeRenderHead()}<div id="copy-button-container" data-linkcopied="false" class="text-stone-300 flex items-center bg-stone-900 pl-4 pr-2 rounded-full py-2 gap-3 max-w-80 mx-auto group"> ${renderComponent($$result, "MailIcon", $$Mail, { "class": "w-4 h-4" })} ${renderComponent($$result, "Text", $$Text, { "variant": "span", "class": "uppercase flex-1" }, { "default": ($$result2) => renderTemplate`${contactEmail}` })} <div class="relative"> <div${addAttribute(cn(
    "absolute bottom-10 -left-1/2 transition-all",
    "group-data-[linkcopied=false]:opacity-0",
    "group-data-[linkcopied=true]:opacity-100 group-data-[linkcopied=true]:bottom-12"
  ), "class")}> ${renderComponent($$result, "CopiedTextIcon", $$CopiedTextIcon, { "class": "w-16 h-4" })} </div> <button id="copy-button" class="p-2 roudned-full bg-stone-800 shadow rounded-full"> ${renderComponent($$result, "CopyIcon", $$CopyIcon, { "class": "w-4 h-4" })} </button> </div> </div> `;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/contact-me-pill.astro", void 0);

const $$Astro$b = createAstro();
const $$ArrowUpRightIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ArrowUpRightIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(cn(props.class), "class")}> <path d="M7 7h10v10"></path> <path d="M7 17 17 7"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/arrow-up-right-icon.astro", void 0);

const $$Astro$a = createAstro();
const $$LetsConnectIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LetsConnectIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="95" height="15" viewBox="0 0 95 15" fill="none"${addAttribute(cn("icon", props.class), "class")}> <path d="M2.656 2.072C2.912 2.072 3.24267 2.30667 3.648 2.776C4.05333 3.24533 4.256 3.69333 4.256 4.12C4.256 4.54667 4.192 5.30933 4.064 6.408C3.936 7.496 3.80267 8.36533 3.664 9.016C2.77867 12.8773 2.16 14.808 1.808 14.808C1.57333 14.808 1.28 14.6213 0.928 14.248C0.586667 13.864 0.416 13.5493 0.416 13.304C0.416 13.2827 0.56 12.728 0.848 11.64C1.136 10.552 1.424 9.15467 1.712 7.448C2.01067 5.73067 2.16 4.09333 2.16 2.536C2.16 2.22667 2.32533 2.072 2.656 2.072ZM11.818 9.544C11.818 10.0667 11.4607 10.536 10.746 10.952C10.042 11.368 9.31667 11.576 8.57 11.576C7.82333 11.576 7.21 11.5227 6.73 11.416C6.634 11.704 6.586 11.992 6.586 12.28C6.586 12.568 6.634 12.776 6.73 12.904C6.826 13.0213 7.066 13.08 7.45 13.08C8.25 13.08 8.93267 13.0053 9.498 12.856C10.074 12.7067 10.3727 12.632 10.394 12.632C10.8313 12.632 11.05 12.776 11.05 13.064C11.05 13.48 10.7033 13.8747 10.01 14.248C9.32733 14.6213 8.53267 14.808 7.626 14.808C6.73 14.808 6.01 14.5253 5.466 13.96C4.922 13.3947 4.65 12.728 4.65 11.96C4.65 11.1813 4.874 10.3707 5.322 9.528C5.78067 8.68533 6.35133 7.98133 7.034 7.416C7.71667 6.84 8.394 6.552 9.066 6.552C9.74867 6.552 10.378 6.888 10.954 7.56C11.53 8.22133 11.818 8.88267 11.818 9.544ZM9.962 9.288C9.962 9.18133 9.85 9.02667 9.626 8.824C9.402 8.62133 9.18867 8.52 8.986 8.52C8.794 8.52 8.54333 8.664 8.234 8.952C7.92467 9.22933 7.63133 9.592 7.354 10.04C7.45 10.0507 7.58867 10.056 7.77 10.056C9.23133 10.056 9.962 9.8 9.962 9.288ZM16.6065 8.456C16.5212 8.744 16.3932 9.14933 16.2225 9.672C16.0625 10.184 15.8598 10.8293 15.6145 11.608C15.3798 12.3867 15.2625 12.8027 15.2625 12.856C15.2625 12.8987 15.3478 12.92 15.5185 12.92C15.6998 12.92 16.1212 12.8027 16.7825 12.568C17.4438 12.3227 17.8332 12.2 17.9505 12.2C18.2172 12.2 18.3505 12.3813 18.3505 12.744C18.3505 13.1067 17.9932 13.544 17.2785 14.056C16.5638 14.5573 15.8172 14.808 15.0385 14.808C14.6972 14.808 14.2918 14.6213 13.8225 14.248C13.3532 13.8747 13.1185 13.496 13.1185 13.112C13.1185 12.792 13.2785 12.12 13.5985 11.096C13.9292 10.0613 14.1532 9.352 14.2705 8.968C13.8545 9.08533 13.5398 9.144 13.3265 9.144C13.1132 9.144 12.8892 9 12.6545 8.712C12.4198 8.41333 12.3025 8.13067 12.3025 7.864C12.3025 7.52267 13.1292 7.23467 14.7825 7C14.9852 6.008 15.0865 5.14933 15.0865 4.424C15.0865 4.104 15.2465 3.944 15.5665 3.944C15.8438 3.944 16.1958 4.11467 16.6225 4.456C17.0598 4.78667 17.2785 5.11733 17.2785 5.448C17.2785 5.768 17.2092 6.22133 17.0705 6.808C17.5825 6.78667 17.9718 6.776 18.2385 6.776C19.0385 6.776 19.4385 6.95733 19.4385 7.32C19.4385 7.55467 19.2038 7.75733 18.7345 7.928C18.2758 8.088 17.5665 8.264 16.6065 8.456ZM21.8093 0.888C22.3639 0.888 22.8173 1.08533 23.1693 1.48C23.5319 1.87467 23.7133 2.408 23.7133 3.08C23.7133 3.752 23.4093 4.49867 22.8013 5.32C22.2039 6.14133 21.6546 6.552 21.1533 6.552C20.6519 6.552 20.4013 6.33867 20.4013 5.912C20.4013 5.72 20.5986 5.352 20.9933 4.808C21.3879 4.25333 21.5853 3.79467 21.5853 3.432C21.5853 3.05867 21.4413 2.75467 21.1533 2.52C20.8653 2.28533 20.7213 2.06133 20.7213 1.848C20.7213 1.63467 20.8333 1.42133 21.0573 1.208C21.2813 0.994666 21.5319 0.888 21.8093 0.888ZM30.4103 6.568C30.8156 6.568 31.2156 6.808 31.6103 7.288C32.0049 7.768 32.2023 8.2 32.2023 8.584C32.2023 8.84 32.0903 8.968 31.8663 8.968C31.7383 8.968 31.5516 8.92 31.3063 8.824C31.0609 8.71733 30.8103 8.664 30.5543 8.664C30.3089 8.664 29.9409 8.74933 29.4503 8.92C28.9703 9.09067 28.7303 9.31467 28.7303 9.592C28.7303 9.69867 28.8743 9.85333 29.1623 10.056C29.4503 10.2587 29.7649 10.4667 30.1063 10.68C30.4476 10.8933 30.7623 11.192 31.0503 11.576C31.3383 11.9493 31.4823 12.36 31.4823 12.808C31.4823 13.2453 31.1569 13.688 30.5063 14.136C29.8663 14.584 29.1089 14.808 28.2343 14.808C27.3703 14.808 26.6289 14.6107 26.0103 14.216C25.3916 13.8213 25.0823 13.416 25.0823 13C25.0823 12.584 25.2529 12.376 25.5943 12.376C25.7329 12.376 25.8983 12.4293 26.0903 12.536C26.6236 12.8453 27.2849 13 28.0743 13C28.8743 13 29.2743 12.8933 29.2743 12.68C29.2743 12.4667 29.1196 12.232 28.8103 11.976C28.5116 11.7093 28.1809 11.464 27.8183 11.24C27.4663 11.016 27.1356 10.744 26.8263 10.424C26.5276 10.0933 26.3783 9.77333 26.3783 9.464C26.3783 8.888 26.9009 8.264 27.9463 7.592C28.9916 6.90933 29.8129 6.568 30.4103 6.568ZM38.9313 12.296C38.9313 11.5493 39.1659 10.728 39.6353 9.832C40.1046 8.936 40.7179 8.168 41.4753 7.528C42.2433 6.888 42.9953 6.568 43.7313 6.568C44.1046 6.568 44.4886 6.81333 44.8833 7.304C45.2779 7.784 45.4753 8.216 45.4753 8.6C45.4753 8.87733 45.3473 9.016 45.0913 9.016C44.9633 9.016 44.7873 8.95733 44.5633 8.84C44.3393 8.72267 44.1099 8.664 43.8753 8.664C43.6406 8.664 43.3046 8.86667 42.8673 9.272C42.4406 9.66667 42.0566 10.1467 41.7153 10.712C41.3846 11.2667 41.2193 11.704 41.2193 12.024C41.2193 12.344 41.2779 12.552 41.3953 12.648C41.5233 12.744 41.8219 12.792 42.2913 12.792C42.7713 12.792 43.2033 12.7493 43.5873 12.664C43.9819 12.5787 44.2699 12.4933 44.4513 12.408C44.6433 12.312 44.8139 12.264 44.9633 12.264C45.2619 12.264 45.4113 12.392 45.4113 12.648C45.4113 13.1173 45.0006 13.5973 44.1793 14.088C43.3579 14.568 42.5366 14.808 41.7153 14.808C41.1926 14.808 40.5953 14.52 39.9233 13.944C39.2619 13.3573 38.9313 12.808 38.9313 12.296ZM49.0154 13.176C49.5914 12.92 50.0927 12.4027 50.5194 11.624C50.946 10.8453 51.1594 10.1147 51.1594 9.432C51.1594 8.74933 51.0634 8.28 50.8714 8.024C50.4127 8.29067 49.954 8.85067 49.4954 9.704C49.0474 10.5573 48.8234 11.3093 48.8234 11.96C48.8234 12.6 48.8874 13.0053 49.0154 13.176ZM46.6794 12.12C46.6794 10.7867 47.09 9.52267 47.9114 8.328C48.7434 7.13333 49.5647 6.536 50.3754 6.536C51.186 6.536 51.8687 6.824 52.4234 7.4C52.978 7.96533 53.2554 8.65333 53.2554 9.464C53.2554 10.264 53.0634 11.08 52.6794 11.912C52.2954 12.744 51.7567 13.4373 51.0634 13.992C50.37 14.536 49.6287 14.808 48.8394 14.808C48.2527 14.808 47.746 14.5467 47.3194 14.024C46.8927 13.5013 46.6794 12.8667 46.6794 12.12ZM59.9443 6.552C60.4989 6.552 60.9843 6.80267 61.4003 7.304C61.8269 7.79467 62.0403 8.32267 62.0403 8.888C62.0403 9.79467 61.8909 10.744 61.5923 11.736C61.3043 12.7173 60.9843 13.4747 60.6323 14.008C60.2909 14.5413 59.9389 14.808 59.5763 14.808C59.2243 14.808 59.0483 14.5573 59.0483 14.056C59.0483 13.672 59.2243 12.8987 59.5763 11.736C59.8429 10.776 59.9763 10.088 59.9763 9.672C59.9763 9.256 59.9229 9.048 59.8163 9.048C59.6776 9.048 59.5389 9.11733 59.4003 9.256C59.2723 9.39467 59.1656 9.51733 59.0803 9.624C58.9949 9.73067 58.8936 9.86933 58.7763 10.04C58.6696 10.2 58.5736 10.3493 58.4883 10.488C58.4136 10.616 58.3123 10.7867 58.1843 11C58.0669 11.2027 57.9709 11.3733 57.8963 11.512C57.8216 11.64 57.7256 11.8107 57.6083 12.024C56.6163 13.88 55.8376 14.808 55.2723 14.808C55.0483 14.808 54.7656 14.616 54.4243 14.232C54.0829 13.8373 53.9123 13.5493 53.9123 13.368C53.9123 13.2507 53.9869 13 54.1363 12.616C54.2963 12.2213 54.4083 11.9227 54.4723 11.72C54.5469 11.5067 54.6056 11.2827 54.6483 11.048C54.7016 10.8133 54.7443 10.5627 54.7763 10.296C54.8083 10.0187 54.8296 9.80533 54.8403 9.656C54.8616 9.50667 54.8829 9.272 54.9043 8.952C55.0003 7.56533 55.0803 6.79733 55.1443 6.648C55.2189 6.49867 55.2989 6.424 55.3843 6.424C55.7896 6.424 56.1789 6.59467 56.5523 6.936C56.9256 7.26667 57.1123 7.57067 57.1123 7.848C57.1123 8.50933 56.9416 9.45867 56.6003 10.696C57.2936 9.48 57.9229 8.488 58.4883 7.72C59.0643 6.94133 59.5496 6.552 59.9443 6.552ZM68.8036 6.552C69.3583 6.552 69.8436 6.80267 70.2596 7.304C70.6863 7.79467 70.8996 8.32267 70.8996 8.888C70.8996 9.79467 70.7503 10.744 70.4516 11.736C70.1636 12.7173 69.8436 13.4747 69.4916 14.008C69.1503 14.5413 68.7983 14.808 68.4356 14.808C68.0836 14.808 67.9076 14.5573 67.9076 14.056C67.9076 13.672 68.0836 12.8987 68.4356 11.736C68.7023 10.776 68.8356 10.088 68.8356 9.672C68.8356 9.256 68.7823 9.048 68.6756 9.048C68.537 9.048 68.3983 9.11733 68.2596 9.256C68.1316 9.39467 68.025 9.51733 67.9396 9.624C67.8543 9.73067 67.753 9.86933 67.6356 10.04C67.529 10.2 67.433 10.3493 67.3476 10.488C67.273 10.616 67.1716 10.7867 67.0436 11C66.9263 11.2027 66.8303 11.3733 66.7556 11.512C66.681 11.64 66.585 11.8107 66.4676 12.024C65.4756 13.88 64.697 14.808 64.1316 14.808C63.9076 14.808 63.625 14.616 63.2836 14.232C62.9423 13.8373 62.7716 13.5493 62.7716 13.368C62.7716 13.2507 62.8463 13 62.9956 12.616C63.1556 12.2213 63.2676 11.9227 63.3316 11.72C63.4063 11.5067 63.465 11.2827 63.5076 11.048C63.561 10.8133 63.6036 10.5627 63.6356 10.296C63.6676 10.0187 63.689 9.80533 63.6996 9.656C63.721 9.50667 63.7423 9.272 63.7636 8.952C63.8596 7.56533 63.9396 6.79733 64.0036 6.648C64.0783 6.49867 64.1583 6.424 64.2436 6.424C64.649 6.424 65.0383 6.59467 65.4116 6.936C65.785 7.26667 65.9716 7.57067 65.9716 7.848C65.9716 8.50933 65.801 9.45867 65.4596 10.696C66.153 9.48 66.7823 8.488 67.3476 7.72C67.9236 6.94133 68.409 6.552 68.8036 6.552ZM78.943 9.544C78.943 10.0667 78.5857 10.536 77.871 10.952C77.167 11.368 76.4417 11.576 75.695 11.576C74.9483 11.576 74.335 11.5227 73.855 11.416C73.759 11.704 73.711 11.992 73.711 12.28C73.711 12.568 73.759 12.776 73.855 12.904C73.951 13.0213 74.191 13.08 74.575 13.08C75.375 13.08 76.0577 13.0053 76.623 12.856C77.199 12.7067 77.4977 12.632 77.519 12.632C77.9563 12.632 78.175 12.776 78.175 13.064C78.175 13.48 77.8283 13.8747 77.135 14.248C76.4523 14.6213 75.6577 14.808 74.751 14.808C73.855 14.808 73.135 14.5253 72.591 13.96C72.047 13.3947 71.775 12.728 71.775 11.96C71.775 11.1813 71.999 10.3707 72.447 9.528C72.9057 8.68533 73.4763 7.98133 74.159 7.416C74.8417 6.84 75.519 6.552 76.191 6.552C76.8737 6.552 77.503 6.888 78.079 7.56C78.655 8.22133 78.943 8.88267 78.943 9.544ZM77.087 9.288C77.087 9.18133 76.975 9.02667 76.751 8.824C76.527 8.62133 76.3137 8.52 76.111 8.52C75.919 8.52 75.6683 8.664 75.359 8.952C75.0497 9.22933 74.7563 9.592 74.479 10.04C74.575 10.0507 74.7137 10.056 74.895 10.056C76.3563 10.056 77.087 9.8 77.087 9.288ZM79.5875 12.296C79.5875 11.5493 79.8222 10.728 80.2915 9.832C80.7608 8.936 81.3742 8.168 82.1315 7.528C82.8995 6.888 83.6515 6.568 84.3875 6.568C84.7608 6.568 85.1448 6.81333 85.5395 7.304C85.9342 7.784 86.1315 8.216 86.1315 8.6C86.1315 8.87733 86.0035 9.016 85.7475 9.016C85.6195 9.016 85.4435 8.95733 85.2195 8.84C84.9955 8.72267 84.7662 8.664 84.5315 8.664C84.2968 8.664 83.9608 8.86667 83.5235 9.272C83.0968 9.66667 82.7128 10.1467 82.3715 10.712C82.0408 11.2667 81.8755 11.704 81.8755 12.024C81.8755 12.344 81.9342 12.552 82.0515 12.648C82.1795 12.744 82.4782 12.792 82.9475 12.792C83.4275 12.792 83.8595 12.7493 84.2435 12.664C84.6382 12.5787 84.9262 12.4933 85.1075 12.408C85.2995 12.312 85.4702 12.264 85.6195 12.264C85.9182 12.264 86.0675 12.392 86.0675 12.648C86.0675 13.1173 85.6568 13.5973 84.8355 14.088C84.0142 14.568 83.1928 14.808 82.3715 14.808C81.8488 14.808 81.2515 14.52 80.5795 13.944C79.9182 13.3573 79.5875 12.808 79.5875 12.296ZM91.5596 8.456C91.4743 8.744 91.3463 9.14933 91.1756 9.672C91.0156 10.184 90.813 10.8293 90.5676 11.608C90.333 12.3867 90.2156 12.8027 90.2156 12.856C90.2156 12.8987 90.301 12.92 90.4716 12.92C90.653 12.92 91.0743 12.8027 91.7356 12.568C92.397 12.3227 92.7863 12.2 92.9036 12.2C93.1703 12.2 93.3036 12.3813 93.3036 12.744C93.3036 13.1067 92.9463 13.544 92.2316 14.056C91.517 14.5573 90.7703 14.808 89.9916 14.808C89.6503 14.808 89.245 14.6213 88.7756 14.248C88.3063 13.8747 88.0716 13.496 88.0716 13.112C88.0716 12.792 88.2316 12.12 88.5516 11.096C88.8823 10.0613 89.1063 9.352 89.2236 8.968C88.8076 9.08533 88.493 9.144 88.2796 9.144C88.0663 9.144 87.8423 9 87.6076 8.712C87.373 8.41333 87.2556 8.13067 87.2556 7.864C87.2556 7.52267 88.0823 7.23467 89.7356 7C89.9383 6.008 90.0396 5.14933 90.0396 4.424C90.0396 4.104 90.1996 3.944 90.5196 3.944C90.797 3.944 91.149 4.11467 91.5756 4.456C92.013 4.78667 92.2316 5.11733 92.2316 5.448C92.2316 5.768 92.1623 6.22133 92.0236 6.808C92.5356 6.78667 92.925 6.776 93.1916 6.776C93.9916 6.776 94.3916 6.95733 94.3916 7.32C94.3916 7.55467 94.157 7.75733 93.6876 7.928C93.229 8.088 92.5196 8.264 91.5596 8.456Z" class="fill-current"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/lets-connect-icon.astro", void 0);

const ROUTES = {
  home: "/",
  blog: "/blog",
  galary: "/galary",
  projects: "/projects",
  gallery: "/gallery",
  resume: "/resume",
  RDS: "/open-source"
};

const $$Astro$9 = createAstro();
const $$WorkDetailsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$WorkDetailsCard;
  const { company, positions } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cursor-default bg-stone-900 hover:bg-stone-800 transition duration-200 md:-mx-6 py-4 shadow-sm px-6 rounded-xl"> ${renderComponent($$result, "Text", $$Text, { "variant": "h3", "class": "text-neutral-100 text-xl font-semibold flex-1 pb-2" }, { "default": ($$result2) => renderTemplate`${company}` })} <div class="flex flex-col justify-center gap-2 md:w-max pt-1"> ${positions.map((position) => renderTemplate`<div class="group"> <div class="relative"> ${renderComponent($$result, "Text", $$Text, { "variant": "p", "class": "text-stone-300 pb-1" }, { "default": ($$result2) => renderTemplate`${position.title}` })} ${renderComponent($$result, "Text", $$Text, { "variant": "span", "class": "uppercase text-stone-400 break-words" }, { "default": ($$result2) => renderTemplate`${dayjs(position.duration.from).format("MMM YYYY")} -${" "}${position.isOnGoing ? "Present" : dayjs(position.duration.to).format("MMM YYYY")}` })} <div class="absolute hidden w-0.5 h-8 bg-stone-700 top-7"></div> </div> <div class="ml-1 group-last:hidden py-2"> <div class="w-1.5 h-1.5 rounded-full bg-stone-600 -translate-x-0.5"></div> <div class="w-0.5 h-4 md:h-5 bg-stone-600 top-7"></div> <div class="w-1.5 h-1.5 rounded-full bg-stone-600 -translate-x-0.5"></div> </div> </div>`)} </div> </div>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/work-details-card.astro", void 0);

const $$Astro$8 = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Work;
  const { details } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-3"> ${details.map((detail) => renderTemplate`${renderComponent($$result, "WorkDetailsCard", $$WorkDetailsCard, { ...detail })}`)} </div>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/work.astro", void 0);

const $$Astro$7 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$4;
  const posts = await getCollection("posts");
  const currentCompany = "The Boeing Company";
  const currentCompanyLink = "https://www.boeing.com/";
  const workDetails = [
    {
      company: "The Boeing Company",
      positions: [
        {
          title: "Senior Software Developer 2",
          isOnGoing: true,
          description: "Responsible for developing stable and scalable micro service. The system has a set of unique challenges from a domain and technology perspective.",
          duration: {
            from: "2022-06-01",
            to: ""
          }
        }
      ]
    },
    {
      company: "EY",
      positions: [
        {
          title: "Senior Security Consultant II",
          description: "Responsible for developing stable and scalable micro service. The system has a set of unique challenges from a domain and technology perspective.",
          duration: {
            from: "2022-02-01",
            to: "2022-05-31"
          }
        },
        {
          title: "Senior Security Consultant I",
          description: "",
          duration: {
            from: "2021-03-01",
            to: "2022-01-01"
          }
        }
      ]
    },
    {
      company: "KPMG",
      positions: [
        {
          title: "Software Development Consultant",
          description: "Developed brand new Analytic Web based application along with Web application performance tuning and Stored Procedure performance improvement. Created Stored Procedure for remove direct dependency and background processing.",
          duration: {
            from: "2020-01-01",
            to: "2021-03-01"
          }
        }
      ]
    },
    {
      company: "Siemens",
      positions: [
        {
          title: "Senior Software Engineer Motion Control - R&D",
          description: "Enabled ET 200 Pro FC-2 integration with TIA Portal | Application & Framework Developer and IoT Expert. Integrated custom developed library in existing framework. Improved performance of the tool while loading into windows system.",
          duration: {
            from: "2018-08-01",
            to: "2020-01-01"
          }
        }
      ]
    },
    {
      company: "HCL Technologies",
      positions: [
        {
          title: "Software Engineer",
          description: "Developed brand new Payment gateway solution as per PCI guideline. Implemented TLS 1.2 for settlement sever and application security. Web application performance tuning and Stored Procedure performance improvement.",
          duration: {
            from: "2015-08-01",
            to: "2018-08-01"
          }
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="py-8 text-stone-300"> <div class="flex pb-4 md:pb-2"> <div> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "pb-2 text-2xl font-bold text-stone-100" }, { "default": ($$result3) => renderTemplate`
Amit Prakash
` })} ${renderComponent($$result2, "Text", $$Text, { "class": "text-yellow-500" }, { "default": ($$result3) => renderTemplate`(Decoding the Enigma💡)` })} </div> <div class="w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden ml-auto bg-stone-800"> ${renderComponent($$result2, "Image", $$Image, { "src": "/profile.jpg", "alt": "", "width": 300, "height": 300, "class": "w-full h-full object-cover" })} </div> </div> ${renderComponent($$result2, "Text", $$Text, { "class": "pb-4" }, { "default": ($$result3) => renderTemplate`
Engineering @ ${renderComponent($$result3, "Link", $$Link, { "to": currentCompanyLink, "target": "_blank" }, { "default": ($$result4) => renderTemplate`${currentCompany}` })}.
` })} ${renderComponent($$result2, "Text", $$Text, { "class": "pb-0 leading-relaxed" }, { "default": ($$result3) => renderTemplate`
As a Backend Development Expert with over 8+ years of experience, I thrive
      on crafting Robust and Scalable Solutions. My expertise spans
      client/server to Microservice Architecture, .NET, C#, REST API, GO, and
      WCF services. I'm well-versed in Angular, SQL, Azure and a myriad of
      technologies, excelling in System Design, Development and Maintenance.
` })} </div>  <div class="pt-4 pb-6"> ${renderComponent($$result2, "Text", $$Text, { "variant": "span", "class": "uppercase text-stone-100 tracking pb-6 block font-medium" }, { "default": ($$result3) => renderTemplate`
Introducing a game-changer for:
` })} ${renderComponent($$result2, "Work", $$Work, { "details": workDetails })} </div>  <div class="text-stone-300 pb-6"> ${renderComponent($$result2, "Text", $$Text, { "class": "leading-relaxed" }, { "default": ($$result3) => renderTemplate`
I share my experiences through blogs. I try to keep things simple. You'll
      find writing about technologies I'm interested in at the time, or how I'm
      learning and growing in my career, sharing knowledge along the way.
` })} ${posts.sort((b, a) => new Date(a.data.pubDate).getTime() - new Date(b.data.pubDate).getTime()).slice(0, 3).map((post) => renderTemplate`<div class="py-4 first:pt-0 last:pb-0 border-b border-gray-800 last:border-none hover:bg-stone-800"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h4", "class": "text-stone-50 text-lg font-semibold pb-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Link", $$Link, { "to": `${ROUTES.blog}/${post.slug}`, "class": "no-underline hover:underline w-max" }, { "default": ($$result4) => renderTemplate`${post.data.title}` })} ` })} <div class="flex items-center gap-2 text-stone-400"> ${renderComponent($$result2, "Text", $$Text, { "variant": "span" }, { "default": ($$result3) => renderTemplate`${dayjs(post.data.pubDate).format("MMM DD, YYYY")}` })} <div class="w-1 h-1 rounded-full bg-stone-600"></div> ${renderComponent($$result2, "Text", $$Text, { "variant": "span" }, { "default": ($$result3) => renderTemplate`${10}min` })} </div> </div>`)} <br> <a class="no-underline hover:underline w-max" href="/blog">Looks Instresting isn't It !! 😜 Click to Read more..😎</a> </div> <div class="pt-12 pb-8"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h4", "class": "text-sm uppercase text-stone-100 tracking pb-4 block font-medium" }, { "default": ($$result3) => renderTemplate`
Find me on
` })} ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})} </div>  <div class="pb-6 pt-10"> ${renderComponent($$result2, "ContactMePill", $$ContactMePill, {})} <div class="pt-4"> <div class="text-stone-400 relative w-max mx-auto"> ${renderComponent($$result2, "LetConnectIcon", $$LetsConnectIcon, { "class": "w-28 h-8" })} ${renderComponent($$result2, "ArrowUpRightIcon", $$ArrowUpRightIcon, { "class": "w-4 h-4 absolute top-0 -right-5" })} </div> </div> </div> ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/index.astro", void 0);

const $$file$4 = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$3;
  const PAGE_TITLE = "Open Source Contribution ";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": PAGE_TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="https://realdevsquad.com/" target="_blank"><img src="https://dashboard.realdevsquad.com/images/Real-Dev-Squad@1x.png" style="max-width: 10%;cursor: pointer;"> </a> <div class="max-w-screen-sm mx-auto py-8 sm:py-12 flex flex-col h-screen"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-100 pb-4" }, { "default": ($$result3) => renderTemplate`${PAGE_TITLE}<br> <div style="font-size: 10px; color:blue;"> <a href="https://members.realdevsquad.com/tejas" target="_blank">Click Here to Verify Below Details</a> </div> ` })} ${renderComponent($$result2, "Text", $$Text, {})} <iframe src="https://members.realdevsquad.com/tejas" class="w-full h-full flex-1"></iframe> </div> ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/open-source/index.astro", void 0);

const $$file$3 = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/open-source/index.astro";
const $$url$3 = "/open-source";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, subtitle, link, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="w-full"${addAttribute(link, "href")} target="_blank"> <div class="w-full group bg-opacity-0 bg-neutral-300 cursor-pointer flex gap-3 py-3 items-center hover:bg-opacity-10 rounded-lg transition-colors duration-300 px-5"> <span class="w-fit"> ${icon} </span> <div class="flex flex-col align-left"> <h6 class="w-fit text-zinc-400  px-2 text-left  bg-zinc-500 bg-opacity-10 group-hover:bg-opacity-30 group-hover:text-neutral-300 text-lg font-medium font-extrabold	transition-colors duration-300"> ${title || "Nuxt Playground"} </h6> <p class="w-fit px-2 text-zinc-500 group-hover:text-zinc-300 text-left bg-zinc-500 bg-opacity-10 group-hover:bg-opacity-20 group-hover:text-neutral-400 text-base font-medium font-extrabold transition-colors duration-300"> ${subtitle || "Nuxt Playground  Nuxt Playground"} </p> </div> </div> </a>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/project-card.astro", void 0);

const $$Astro$4 = createAstro();
const $$ReactIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ReactIcon;
  const { ...props } = Astro2.props;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg width="45px" height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${addAttribute(cn(props.class), "class")}> <title>react</title> <rect width="24" height="24" fill="none"></rect> <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="2" d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"></path> </svg>`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/icons/projects/react-icon.astro", void 0);

const PROJECTS = [
  {
    title: "URL Shorter",
    subtitle: "URL Shorter",
    link: "https://staging-tinysite.realdevsquad.com",
    icon: $$ReactIcon
  },
  {
    title: "Skill Tree",
    subtitle: "To map skill level for Tech and Non_tech People",
    link: "https://github.com/Real-Dev-Squad/skill-tree-backend",
    icon: $$ReactIcon
  },
  {
    title: "Super Calendar App",
    subtitle: "Manage all your Calender Needs",
    link: "https://github.com/Real-Dev-Squad/website-calendar",
    icon: $$ReactIcon
  },
  {
    title: "Discord Bot",
    subtitle: "Automating Discord Functions",
    link: "https://github.com/Real-Dev-Squad/discord-slash-commands",
    icon: $$ReactIcon
  }
];

const PAST_PROJECTS = [
  {
    title: "AlternateCase Nuget Package",
    subtitle: "Package to play with StRiNg cAsInG",
    link: "https://www.nuget.org/packages/AlternateCase",
    icon: $$ReactIcon
  },
  {
    title: "InvertBinaryTree Nuget Package",
    subtitle: "Package to Invert Binary Tree",
    link: "https://www.nuget.org/packages/InvertBinaryTree",
    icon: $$ReactIcon
  },
  {
    title: "[GO]Load Balancer",
    subtitle: "Tried to create an Intelligent Load Balancer",
    link: "https://github.com/iamitprakash/load-balancer-go",
    icon: $$ReactIcon
  },
  {
    title: "[GO]Auth Server",
    subtitle: "Tried to create an Authentication Server to plug & Play into any Microservice Architecture",
    link: "https://github.com/iamitprakash/Auth-server-go",
    icon: $$ReactIcon
  },
  {
    title: "Transmitting Int Data type in DB",
    subtitle: "Database Optimization",
    link: "https://github.com/iamitprakash/transmit-integers-efficiently-using-varint-encoding",
    icon: $$ReactIcon
  },
  {
    title: "Create Zip file in .Net",
    subtitle: "Create Zip file in .Net",
    link: "https://github.com/iamitprakash/create_zip_file_dot_Net",
    icon: $$ReactIcon
  },
  {
    title: "Coupon Code implementation via HashSet",
    subtitle: "check whether a one time coupon has already been used. If so, a sui...",
    link: "https://github.com/iamitprakash/Hash_Set_Coupons",
    icon: $$ReactIcon
  },
  {
    title: "Sample API Server in GO",
    subtitle: "Develop a Go server with two endpoints (/process-single and /process-concurrent)...",
    link: "https://github.com/iamitprakash/Go-Server-for-Sorting-Arrays",
    icon: $$ReactIcon
  },
  {
    title: "Bloom Filter in .Net",
    subtitle: "Created Bloom Filter in C#, .Net",
    link: "https://github.com/iamitprakash/bloom_filter_in_dot_net",
    icon: $$ReactIcon
  },
  {
    title: "[GO]Concurrent Thread safe Queue",
    subtitle: "An experiment to make Queue Thread safe",
    link: "https://github.com/iamitprakash/concurrent_thread_safe_queue",
    icon: $$ReactIcon
  }
];

const PARKING_LOT = [
  {
    title: "Identity Service Provider",
    subtitle: "To Provide Identity service to all Application Inside Org Like Google Login and .....",
    link: "",
    icon: $$ReactIcon
  },
  {
    title: "Email Service/Server",
    subtitle: "Email Service/Server using GO, .Net and SQL",
    link: "",
    icon: $$ReactIcon
  }
];

const $$Astro$3 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const PAGE_TITLE = "Projects ";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": PAGE_TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-sm mx-auto py-8 sm:py-12"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-100 pb-4" }, { "default": ($$result3) => renderTemplate`${PAGE_TITLE}` })} ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-10 pb-1" }, { "default": ($$result3) => renderTemplate` <p style="color:green">Current Focus</p> ` })}<br> <div class="w-full flex gap-2 flex-wrap	items-center"> ${PROJECTS.map((project) => {
    const icon = renderTemplate`${renderComponent($$result2, "project.icon", project.icon, { "class": "fill-zinc-600 group-hover:fill-zinc-500 transition-colors duration-300" })}`;
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "subtitle": project.subtitle, "link": project.link, "icon": icon })}`;
  })} </div> <br> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-10 pb-1" }, { "default": ($$result3) => renderTemplate` <p style="color:orange">Parking Lot</p> ` })}<br> <div class="w-full flex gap-2 flex-wrap	items-center "> ${PARKING_LOT.map((project) => {
    const icon = renderTemplate`${renderComponent($$result2, "project.icon", project.icon, { "class": "fill-zinc-600 group-hover:fill-zinc-500 transition-colors duration-300" })}`;
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "subtitle": project.subtitle, "link": project.link, "icon": icon })}`;
  })} </div> <br> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-10 pb-1" }, { "default": ($$result3) => renderTemplate` <p style="color:white">Past Work</p> ` })}<br> <div class="w-full flex gap-2 flex-wrap	items-center"> ${PAST_PROJECTS.map((project) => {
    const icon = renderTemplate`${renderComponent($$result2, "project.icon", project.icon, { "class": "fill-zinc-600 group-hover:fill-zinc-500 transition-colors duration-300" })}`;
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.title, "subtitle": project.subtitle, "link": project.link, "icon": icon })}`;
  })} </div> </div> ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/projects/index.astro", void 0);

const $$file$2 = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/projects/index.astro";
const $$url$2 = "/projects";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const PAGE_TITLE = "Resume  ";
  const pdfUrl = "/resume.pdf";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": PAGE_TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-sm mx-auto py-8 sm:py-12"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-100 pb-4" }, { "default": ($$result3) => renderTemplate`${PAGE_TITLE}` })} <div class="flex justify-end gap-2 pb-4"> <button class="no-underline flex items-center gap-2 text-stone-100 py-2 px-3 rounded-lg transition hover:bg-stone-800 border-2" id="resume-download-button">
Download
</button> </div> <embed${addAttribute(pdfUrl, "src")} type="application/pdf" title="Resume" class="w-full h-screen"> </div> ` })} `;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/resume/index.astro", void 0);

const $$file$1 = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/resume/index.astro";
const $$url$1 = "/resume";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$LinkedinSubscriptionButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkedinSubscriptionButton;
  return renderTemplate`${renderComponent($$result, "Link", $$Link, { "class": cn(
    "bg-blue-600 text-stone-50 no-underline px-4 py-3 text-sm rounded-xl block w-max transition font-medium",
    "shadow-[0_0_15px_-3px_#1d4ed8,0_0px_6px_-4px_#1d4ed8]",
    "hover:bg-blue-700"
  ), "to": "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7022684487754944512", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
Subscribe to Tech Diary on Linkedin
` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/components/linkedin-subscription-button.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const PAGE_TITLE = "hello visitor \u{1F44B}";
  const groupedPosts = allPosts.reduce((acc, curr) => {
    const publishedYear = new Date(curr.data.pubDate).getFullYear();
    if (!acc[publishedYear]) {
      return {
        ...acc,
        [publishedYear]: [curr]
      };
    }
    acc[publishedYear].push(curr);
    return acc;
  }, {});
  const postEntries = Object.entries(
    groupedPosts
  ).sort((a, b) => Number(b[0]) - Number(a[0])).map((entry) => [
    entry[0],
    entry[1].sort(
      (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    )
  ]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": PAGE_TITLE }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-sm mx-auto py-8 sm:py-12"> ${renderComponent($$result2, "Text", $$Text, { "variant": "h1", "class": "text-stone-100 pb-4" }, { "default": ($$result3) => renderTemplate`${PAGE_TITLE}` })} ${renderComponent($$result2, "Text", $$Text, { "variant": "p", "class": "text-stone-300 leading-relaxed" }, { "default": ($$result3) => renderTemplate`
welcome to my area of the internet, I document my weekly journey through
      the trenches of enterprise application development, system design, and
      performance optimization. I share my ups and downs (mostly wins!) in
      various formats, including blog posts here and LinkedIn newsletters. Dive
      into some of my favorite exploits below !
` })} <div class="py-2"> ${renderComponent($$result2, "LinkedInSubscriptionButton", $$LinkedinSubscriptionButton, {})} </div> <div class="py-20 sm:py-24"> ${postEntries.map((entries) => renderTemplate`<div class="relative pb-24 last:pb-0"> <div class="absolute -top-16 -left-10 -z-10"> ${renderComponent($$result2, "Text", $$Text, { "class": "text-transparent text-[100px] font-extrabold [-webkit-text-stroke-color:rgb(170_170_170_/_0.15)] [-webkit-text-stroke-width:2px]" }, { "default": ($$result3) => renderTemplate`${entries[0]}` })} </div> <ul> ${entries[1].map((entry) => renderTemplate`<li class="text-stone-100"> <div class="py-4 space-y-2"> ${renderComponent($$result2, "Link", $$Link, { "to": `blog/${entry.slug}`, "class": "no-underline hover:underline transition-all" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "variant": "h3" }, { "default": ($$result4) => renderTemplate`${entry.data.title}` })} ` })} <div class="text-stone-400 flex items-center gap-2"> ${renderComponent($$result2, "Text", $$Text, { "variant": "span" }, { "default": ($$result3) => renderTemplate`${dayjs(entry.data.pubDate).format("DD MMM")}` })} <div class="w-1 h-1 bg-stone-600 rounded-full"></div> ${renderComponent($$result2, "Text", $$Text, { "variant": "span" }, { "default": ($$result3) => renderTemplate`5 min read` })} </div> </div> </li>`)} </ul> </div>`)} </div> </div> ` })}`;
}, "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/Users/yashraj/Documents/pr/tejas-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
