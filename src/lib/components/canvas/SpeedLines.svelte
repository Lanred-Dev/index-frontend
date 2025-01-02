<script lang="ts">
    import { onMount } from "svelte";
    import easeInQuint from "$lib/scripts/easings/easeInQuint";

    let {
        lineCount = 35,
        lineWidth = 0.5,
        lineSize = 25,
        lineSpeed = 1,
        color,
        fps = 100,
    }: {
        lineCount?: number;
        lineWidth?: number;
        lineSize?: number;
        lineSpeed?: number;
        color: string;
        fps?: number;
    } = $props();

    let container: HTMLDivElement;
    let canvas: HTMLCanvasElement;
    let render: CanvasRenderingContext2D;

    type line = {
        x: number;
        y: number;
        startingY: number;

        opacity: number;
        scale: number;
        speed: number;

        progress: number;
        startTime: number;
    };
    let lines: line[] = [];

    function generateStartingY(): number {
        return canvas.height * (0.95 + Math.random() * 0.05);
    }

    function generateStartingX(): number {
        return canvas.width * (0.05 + Math.random() * (1 - 2 * 0.05));
    }

    function drawLine(x: number, y: number, scale: number, opacity: number) {
        render.lineWidth = lineWidth;
        render.strokeStyle = color;
        render.globalAlpha = opacity;
        render.shadowBlur = 10;
        render.shadowColor = color;

        render.beginPath();
        render.moveTo(x, y);
        render.lineTo(x, y + lineSize * scale);
        render.closePath();
        render.stroke();

        render.globalAlpha = 1;
    }

    function animate() {
        render.clearRect(0, 0, canvas.width, canvas.height);

        lines.forEach((line: line) => {
            const elapsedTime: number = (Date.now() - line.startTime) / 1000;
            line.progress = Math.min(elapsedTime / line.speed, 1);

            // If the line has reached the top then reset. If it hasnt update the values.
            if (line.progress >= 1) {
                line.progress = 0;
                line.startTime = Date.now();

                line.x = generateStartingX();
                line.startingY = generateStartingY();
                line.y = line.startingY;
                line.opacity = 0;
            } else {
                line.y = line.startingY - line.startingY * easeInQuint(line.progress);

                // Fade in first then fade out.
                if (line.progress < 0.7 && line.progress >= 0.4) {
                    line.opacity = easeInQuint((line.progress - 0.4) / 0.3);
                } else if (line.progress >= 0.7) {
                    line.opacity = 1 - easeInQuint((line.progress - 0.7) / 0.3);
                } else {
                    line.opacity = 0;
                }
            }

            drawLine(line.x, line.y, line.scale, line.opacity);
        });
    }

    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        lines = [];

        for (let index: number = 0; index < lineCount; index++) {
            const startingY: number = generateStartingY();

            lines.push({
                x: generateStartingX(),
                y: startingY,
                startingY,

                opacity: 0,
                scale: Math.random() * 1.5 + 1,
                speed: (Math.random() * 2 + 1) / lineSpeed,

                progress: 0,
                startTime: Date.now(),
            });
        }
    }

    onMount(() => {
        render = canvas.getContext("2d")!;

        // When the window size changes the canvas size needs to be recalculated.
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Start animating the canvas.
        const animateIntervalID: number = setInterval(() => {
            requestAnimationFrame(animate);
        }, 1000 / fps);

        return () => {
            // Stop updating the canvas.
            window.removeEventListener("resize", resizeCanvas);

            // Stop animating the canvas.
            clearInterval(animateIntervalID);
        };
    });
</script>

<div class="h-full w-full" bind:this={container}>
    <canvas bind:this={canvas}></canvas>
</div>
