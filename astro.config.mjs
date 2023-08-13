import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	// TODO: Change site name
	site: "https://eyrewiut.github.io/",
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
	],
	experimental: {
		assets: true,
	},
});
