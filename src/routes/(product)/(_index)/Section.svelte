<script lang="ts">
    import PageSection, { type props } from "$lib/components/PageSection.svelte";

    let sectionProps: props = $props();
</script>

<PageSection {...sectionProps} style={(sectionProps.style ?? "") + "margin-top: 70vh;"} />
