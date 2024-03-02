export function onRequest(context) {
    console.log("Hello world!");
    return new Response("Hello, world!")
  }