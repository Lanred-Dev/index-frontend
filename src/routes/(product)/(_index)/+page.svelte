<script lang="ts">
    import Hero from "./Hero.svelte";
    import Testimonials from "./Testimonials/List.svelte";
    import Themes from "./Features/Themes.svelte";
    import Export from "./Features/Export.svelte";
    import Discovery from "./Features/Discovery/List.svelte";
    import CallToAction from "./CallToAction.svelte";
</script>

<svelte:head>
    <title>Index</title>
</svelte:head>

<Hero />
<Testimonials />

<span id="#features"></span>

<Themes />
<Export />
<Discovery />

<CallToAction />
