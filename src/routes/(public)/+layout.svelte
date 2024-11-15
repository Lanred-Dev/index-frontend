<script lang="ts">
    import Header from "$lib/public/Header.svelte";
    import Footer from "$lib/public/Footer.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet<[]> } = $props();
</script>

<Header />

{@render children()}

<Footer />
