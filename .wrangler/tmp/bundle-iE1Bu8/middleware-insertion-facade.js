				import worker, * as OTHER_EXPORTS from "/home/joshua/portfolio/.wrangler/tmp/pages-FXhMC8/functionsWorker-0.002932581503123588.mjs";
				import * as __MIDDLEWARE_0__ from "/home/joshua/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/home/joshua/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap,__MIDDLEWARE_1__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/home/joshua/portfolio/.wrangler/tmp/pages-FXhMC8/functionsWorker-0.002932581503123588.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;