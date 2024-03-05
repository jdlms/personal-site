export const  onRequest = async (context) => {
  const req = await fetch('https://api.chucknorris.io/jokes/random');
	const {value} = await req.json()
	// const value = "Server time is " + new Date().toString();
 	return new Response(value);
  }