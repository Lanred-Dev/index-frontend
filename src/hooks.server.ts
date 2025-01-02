import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import Github from "@auth/sveltekit/providers/github";
import Discord from "@auth/sveltekit/providers/discord";

export const { handle } = SvelteKitAuth({
    providers: [Google, Github, Discord],
});
