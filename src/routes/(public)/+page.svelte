<script lang="ts">
    import Hero from "./_index/Hero.svelte";
    import Testimonials from "./_index/Testimonials/Section.svelte";
    import Themes from "./_index/Features/Themes.svelte";
    import Export from "./_index/Features/Export.svelte";
    import Discovery from "./_index/Features/Discovery/Section.svelte";
    import CallToAction from "./_index/CallToAction.svelte";
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
