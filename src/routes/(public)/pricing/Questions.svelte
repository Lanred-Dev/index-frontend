<script lang="ts">
    import PageSection from "$lib/components/public/PageSection.svelte";
    import { ContactForm } from "$lib/components/public/Form";
</script>

<PageSection
    title="Still have questions?"
    text="Are you still unsure about something? Reach out to us with your questions, comments, suggestions, or concerns. We'll get back to you as soon as we can."
    style="margin-top: 30vh;"
>
    <ContactForm action="/api/contact" method="POST" classes="w-full md:w-1/2" />
</PageSection>
