<script>
	import Image from "./image.svelte";
	import { catagories } from "./utils";

	var imglink = "https://i.waifu.pics/3Ug_RJ9.gif";
	const url = "https://api.waifu.pics/";
	let sfw = true;
	const handlepls = (cat) => {
		cat = cat["cat"];
		if (sfw) {
			fetch(url + "sfw/" + cat)
				.then((res) => res.json())
				.then((res) => {
					imglink = res["url"];
				})
				.catch();
		} else {
			fetch(url + "nsfw/" + cat)
				.then((res) => res.json())
				.then((res) => {
					imglink = res["url"];
				})
				.catch();
		}
	};
</script>

<main>
	<p class="main-title">Waifuwu!!!</p>
	<Image {imglink} />
	<hr />
	Controls:
	<hr />
	{#each catagories as cat, i}
		<button on:click={() => handlepls({ cat })}>{cat}</button>
	{/each}
</main>

<style>
	.main-title {
		font-size: xx-large;
		text-align: center;
	}
</style>
