<script lang="ts">
    import SimplePage from "$lib/components/public/SimplePage.svelte";
    import FormSections from "./FormSections.svelte";

    let currentSection: number = $state(0);
</script>

<SimplePage
    title="Lets create your first portfolio."
    text="Get started by filling out the form below."
>
    <FormSections {currentSection} />
</SimplePage>
