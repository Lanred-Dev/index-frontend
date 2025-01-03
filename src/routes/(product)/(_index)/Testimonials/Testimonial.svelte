<script lang="ts">
    import type { testimonial } from "./testimonials";

    let { avatar, name, occupation, text }: testimonial = $props();
</script>

<li class="w-full text-left text-sm">
    <div class="primary relative flex w-full flex-col p-8">
        <div class="flex items-center space-x-4">
            <img
                src={avatar}
                alt={name}
                class="aspect-1 h-10 flex-none rounded-full object-cover"
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
