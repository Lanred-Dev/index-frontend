<script lang="ts">
    import { onMount } from "svelte";

    let {
        starCount = 100,
    }: {
        starCount?: number;
    } = $props();

    // The radius of the stars at a scale of 1.
    const STAR_RADIUS: number = 1;

    let container: HTMLDivElement;
    let canvas: HTMLCanvasElement;
    let render: CanvasRenderingContext2D;

    function generateY(): number {
        return canvas.height * (0.05 + Math.random() * (1 - 2 * 0.05));
    }

    function generateX(): number {
        return canvas.width * (0.05 + Math.random() * (1 - 2 * 0.05));
    }

    function drawStar(x: number, y: number, radius: number, opacity: number) {
        render.fillStyle = "#acacac";
        render.globalAlpha = opacity;
        render.shadowBlur = 5;
        render.shadowColor = "#acacac";

        render.beginPath();
        render.arc(x, y, radius, 0, 2 * Math.PI);
        render.closePath();
        render.fill();

        render.globalAlpha = 1;
    }

    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        render.clearRect(0, 0, canvas.width, canvas.height);

        for (let index: number = 0; index < starCount; index++) {
            const radius: number = STAR_RADIUS * (Math.random() * 1.5 + 1);
            const opacity: number = Math.min(Math.random() + 0.5, 1);
            drawStar(generateX(), generateY(), radius, opacity);
        }
    }

    onMount(() => {
        render = canvas.getContext("2d")!;

        // When the window size changes the canvas size needs to be recalculated.
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            // Stop updating the canvas.
            window.removeEventListener("resize", resizeCanvas);
        };
    });
</script>

<div class="h-full w-full" bind:this={container}>
    <canvas bind:this={canvas}></canvas>
</div>
