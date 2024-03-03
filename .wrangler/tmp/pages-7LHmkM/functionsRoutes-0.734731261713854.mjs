import { onRequest as __helloworld_js_onRequest } from "/home/joshua/portfolio/functions/helloworld.js"

export const routes = [
    {
      routePath: "/helloworld",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__helloworld_js_onRequest],
    },
  ]