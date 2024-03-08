// export const  onRequest = async (context) => {
//   const req = await fetch('https://api.chucknorris.io/jokes/random');
// 	const {value} = await req.json()
// 	// const value = "Server time is " + new Date().toString();
//  	return new Response(value);
//

///

// export async function onRequest(context) {
//   const {
//     request, // same as existing Worker API
//     env, // same as existing Worker API
//     params, // if filename includes [id] or [[path]]
//     waitUntil, // same as ctx.waitUntil in existing Worker API
//     next, // used for middleware or to fetch assets
//     data, // arbitrary space for passing data between middlewares
//   } = context;

//   try {
//     const value = await env.KV.get("KV-STORE-NAME");

//     if (value === null) {
//       return new Response("Value not found", {
//         status: 404,
//       });
//     }
//     return new Response(value);
//   } catch (e) {
//     return new Response(e.message, { status: 500 });
//   }
// }

export async function onRequest(context) {
  const task = await context.env.jdlmsDotDev.get(
    "totalWaves"
  );
  return new Response(task);
}
