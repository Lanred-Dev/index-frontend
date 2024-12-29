<script lang="ts">
    import FormSections from "./FormSections.svelte";

    let currentSection: number = $state(0);
</script>

<div class="cover-screen flex-center flex-col">
    <div class="flex-center relative z-10 mb-10 flex-col gap-3 text-center">
        <h1 class="text-4xl font-bold lg:text-5xl">Lets create your first portfolio.</h1>
        <p class="text-light text-xl lg:max-w-4xl">Get started by filling out the form below.</p>
    </div>

    <FormSections {currentSection} />
</div>
