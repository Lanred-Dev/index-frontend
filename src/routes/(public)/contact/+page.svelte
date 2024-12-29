<script lang="ts">
    import { Form, FormRow, FormInput, FormSubmit } from "$lib/components/public/Form";
</script>

<div class="flex-center min-h-screen flex-col gap-10">
    <div class="flex-center flex-col gap-3 text-center">
        <p class="text-4xl font-bold lg:text-5xl">Reach out to us</p>
        <p class="text-light text-xl lg:max-w-4xl">
            Reach out to us with your questions, comments, suggestions, or concerns. We'll get back
            to you as soon as we can.
        </p>
    </div>

    <Form action="/api/contact" method="POST" classes="w-full md:w-1/2">
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
</div>
