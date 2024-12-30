<script lang="ts">
    import Hero from "./_index/Hero.svelte";
    import Testimonials from "./_index/Testimonials/List.svelte";
    import Themes from "./_index/Themes.svelte";
    import CallToAction from "./_index/CallToAction.svelte";
</script>

<svelte:head>
    <title>Index</title>
</svelte:head>

<Hero />
<Testimonials />

<span id="#features"></span>

<Themes />

<CallToAction />
