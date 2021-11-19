<script>
	import Image from "./image.svelte";
	import { catagories } from "./utils";

	var imglink = "https://i.waifu.pics/3Ug_RJ9.gif";
	const url = "https://api.waifu.pics/";
	let sfw = true;
	const handlepls = (cat) => {
		cat = cat['cat']
		if (sfw) {
			fetch(url + "sfw/" + cat)
				.then((res) => res.json())
				.then((res) => {
					imglink = res["url"];
				})
				.catch();
			console.log(imglink);
		} else {
			fetch(url + "nsfw/" + cat)
				.then((res) => res.json())
				.then((res) => {
					imglink = res["url"];
				})
				.catch();
			console.log(imglink);
		}
	};
</script>

<main>
	<Image {imglink} />
	<hr />
	Controls:
	<hr />
	{#each catagories as cat, i}
		<button on:click={() => handlepls({ cat })}>{cat}</button>
	{/each}
</main>
