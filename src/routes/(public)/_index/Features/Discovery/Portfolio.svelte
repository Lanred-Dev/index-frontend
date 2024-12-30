<script lang="ts">
    import type { portfolio } from "./portfolios";

    let { avatar, name, occupation, image }: portfolio = $props();
</script>

<div class="primary relative w-full overflow-hidden text-left">
    <div class="bt-cover relative aspect-2 w-full overflow-hidden">
        <img
            class="x-center y-center w-full object-cover"
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
        />
    </div>

    <div class="bg-primary-200 absolute bottom-0 left-0 flex w-full flex-col rounded-md p-8">
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
                <p class="text-sm">{occupation}</p>
            </div>
        </div>
    </div>
</div>
