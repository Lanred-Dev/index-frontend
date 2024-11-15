<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        number,
        text,
        color,
        children,
    }: { number: number; text: string; color: string; children?: Snippet<[]> } = $props();
</script>

<div class="relative aspect-square w-full select-none">
    <div class="flex-center relative z-10 h-full w-full flex-col">
        <p
            class="text-6xl font-bold tracking-tight"
            style="color: {color}; text-shadow: {color}80 0 0 80px;"
        >
            {number}%
        </p>

        <p class="mt-1 text-xl font-semibold" style="color: {color};">
            {text}
        </p>
    </div>

    <div class="x-center y-center h-full w-full">
        {@render children?.()}
    </div>
</div>
