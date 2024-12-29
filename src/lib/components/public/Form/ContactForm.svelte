<script lang="ts">
    import Form, { type props } from "./Form.svelte";
    import FormInput from "./FormInput.svelte";
    import FormSubmit from "./FormSubmit.svelte";
    import FormRow from "./FormRow.svelte";

    let formProps: props = $props();
</script>

<Form {...formProps}>
    <FormRow>
        <FormInput id="name" label="Name" type="text" placeholder="John Doe" />
        <FormInput id="email" label="Email" type="email" placeholder="johndoe@gmail.com" />
    </FormRow>

    <FormInput
        id="message"
        label="What are you contacting us about?"
        type="textarea"
        placeholder="Something important..."
        classes="h-40"
    />

    <FormSubmit text="Send" />
</Form>
