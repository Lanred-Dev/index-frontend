<script lang="ts">
    import Section from "./Section.svelte";
    import SpeedLines from "$lib/components/canvas/SpeedLines.svelte";
</script>

<Section
    title="Stop waiting.<br />Create your portfolio today."
    text="Register now and explore 30 days of Premium features at no cost. Available exclusively for first-time users. Limited restrictions apply."
    style="height: 50vh;"
>
    <div class="flex-center gap-8">
        <a class="primary" id="download-button" href="/get-started">Create my portfolio</a>
        <a class="secondary" href="/get-started">Still not convinced?</a>
    </div>

    <div class="x-center y-center z-[-1] h-full w-full">
        <SpeedLines lineCount={15} color="#F5DEB3" />
    </div>
</Section>
