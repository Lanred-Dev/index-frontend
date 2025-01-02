<script lang="ts">
    import SimplePage from "$lib/components/public/SimplePage.svelte";
    import { ContactForm } from "$lib/components/public/Form";
</script>

<SimplePage
    title="Reach out to us."
    text="Reach out to us with your questions, comments, suggestions, or concerns. We'll get back to you as soon as we can."
>
    <ContactForm action="/api/contact" method="POST" classes="w-full md:w-1/2" />
</SimplePage>
