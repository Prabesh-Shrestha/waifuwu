// let res = await fetch('https://api.waifu.pics/sfw/dance')
import fetch from "node-fetch";

const url = "https://api.waifu.pics/sfw/dance";
// const res = await fetch(url)
// const val = await res.json()
// console.log(val)

fetch(url)
	.then((res) =>res.json())
	.then((res) => console.log(res))
	.catch();
