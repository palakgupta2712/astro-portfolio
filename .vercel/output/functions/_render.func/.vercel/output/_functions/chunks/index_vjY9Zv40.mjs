export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_A3CTMgmk.mjs').then(n => n.c);

export { page };
