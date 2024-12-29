<script lang="ts">
    import type { Snippet } from "svelte";

    export type props = {
        title: string;
        text: string;
        direction?: "vertical" | "horizontal";
        classes?: string;
        style?: string;
        children?: Snippet<[]>;
    };

    let { title, text, direction = "vertical", classes, style, children }: props = $props();
</script>

<div
    class="flex-center relative w-full {direction !== 'horizontal' ? 'flex-col' : ''} {classes}"
    {style}
>
    <div class="flex-center relative z-10 mb-10 flex-col gap-3 text-center">
        <p class="text-4xl font-bold lg:text-5xl">
            {@html title}
        </p>

        <p class="text-light text-xl lg:max-w-4xl">{@html text}</p>
    </div>

    {@render children?.()}
</div>
