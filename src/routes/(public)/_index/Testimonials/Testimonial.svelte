<script lang="ts">
    import type { testimonial } from "./testimonials";

    let { avatar, name, occupation, text }: testimonial = $props();
</script>

<li class="w-full text-left text-sm">
    <div class="bg-primary-200 relative flex w-full flex-col rounded-md p-8">
        <div class="flex items-center space-x-4">
            <img
                src={avatar}
                alt={name}
                class="aspect-square h-10 flex-none rounded-full object-cover"
                loading="lazy"
                decoding="async"
            />

            <div class="flex-auto leading-tight">
                <p class="text-base font-semibold">{name}</p>
                <p>{occupation}</p>
            </div>
        </div>

        <p class="mt-4">{text}</p>
    </div>
</li>
