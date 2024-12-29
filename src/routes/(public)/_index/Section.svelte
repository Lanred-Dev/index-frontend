<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        title,
        text,
        direction = "vertical",
        height,
        children,
    }: {
        title: string;
        text: string;
        direction?: "vertical" | "horizontal";
        height?: string;
        children?: Snippet<[]>;
    } = $props();
</script>

<div
    class="flex-center mt-[50vh] {direction !== 'horizontal' ? 'flex-col' : ''} relative"
    style={typeof height === "string" ? `height: ${height};` : ""}
>
    <div class="flex-center relative z-10 mb-10 flex-col gap-3 text-center">
        <p class="text-4xl font-bold lg:text-5xl">
            {@html title}
        </p>

        <p class="text-light text-xl lg:max-w-4xl">{@html text}</p>
    </div>

    {@render children?.()}
</div>
