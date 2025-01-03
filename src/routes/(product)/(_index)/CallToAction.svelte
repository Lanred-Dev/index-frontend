<script lang="ts">
    import Section from "./Section.svelte";
    import SpeedLines from "$lib/components/canvas/SpeedLines.svelte";
</script>

<Section
    title="Stop waiting.<br />Create your portfolio today."
    text="The best time to start is now. Showcase your work, share your story, and connect with your audience. Get started today."
    style="height: 50vh;"
>
    <a class="primary" href="/login?redirect=/get-started">Create my portfolio</a>

    <div class="x-center y-center z-[-1] h-full w-full">
        <SpeedLines lineCount={15} lineSpeed={1.5} color="#F5DEB3" />
    </div>
</Section>
