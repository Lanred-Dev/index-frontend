<script lang="ts">
    import SimplePage from "$lib/components/SimplePage.svelte";
    import { ContactForm } from "$lib/components/Form";
    import { signIn } from "@auth/sveltekit/client";
</script>

{#snippet provider(text: string, icon: string, providerID: string)}
    <li>
        <button class="primary-dark w-full" onclick={() => signIn(providerID)}>
            <img class={providerID === "github" ? "dark:invert" : ""} src={icon} alt={text} />
            {text}
        </button>
    </li>
{/snippet}

<SimplePage
    title="Create your portfolio today."
    text="Sign in with your preferred provider and get started."
>
    <ul class="space-y-3">
        {@render provider("Sign in with Google", "/icons/Google.svg", "google")}
        {@render provider("Sign in with Github", "/icons/Github.svg", "github")}
        {@render provider("Sign in with Discord", "/icons/Discord.svg", "discord")}
    </ul>
</SimplePage>
