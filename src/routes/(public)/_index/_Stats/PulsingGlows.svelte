<script lang="ts">
    import { onMount } from "svelte";
    import easeOutQuint from "$lib/scripts/easings/easeOutQuint";

    // The amount of pulses to render and animate.
    const PULSE_COUNT: number = 3;

    // The width of the pulse stroke.
    const LINE_WIDTH: number = 1;

    // The radius of the pulses.
    const PULSE_RADIUS: number = 15;

    // The speed, in seconds, that the pulses will last.
    const PULSE_SPEED: number = 3;

    // The amount of circles a pulse will have.
    const CIRCLE_COUNT: number = 3;

    // Based off of of 'PULSE_SPEED' and 'CIRCLE_COUNT'
    const CIRCLE_SPEED: number = PULSE_SPEED / CIRCLE_COUNT;

    // The stagger key frames for each circle and when they will start relative to the pulse progress.
    const STAGGER_KEY_FRAMES: number[] = [0, 0.2, 0.4];

    // The FPS that the canvas will run at.
    const FPS: number = 144;

    let container: HTMLDivElement;
    let canvas: HTMLCanvasElement;
    let render: CanvasRenderingContext2D;

    type circle = {
        radius: number;
        opacity: number;

        progress: number;
        startTime: number;
    };
    type pulse = {
        x: number;
        y: number;

        circles: circle[];

        progress: number;
        startTime: number;
    };
    let pulses: pulse[] = [];

    function generateStartingY(): number {
        return canvas.height * (0.05 + Math.random() * (1 - 2 * 0.05));
    }

    function generateStartingX(): number {
        return canvas.width * (0.05 + Math.random() * (1 - 2 * 0.05));
    }

    function drawCircle(x: number, y: number, radius: number, opacity: number) {
        render.lineWidth = LINE_WIDTH;
        render.strokeStyle = "#ecf0f1";
        render.globalAlpha = opacity;

        render.beginPath();
        render.arc(x, y, radius, 0, 2 * Math.PI);
        render.closePath();
        render.stroke();

        render.globalAlpha = 1;
    }

    function animate() {
        render.clearRect(0, 0, canvas.width, canvas.height);

        pulses.forEach((pulse: pulse) => {
            const elapsedTime: number = (Date.now() - pulse.startTime) / 1000;
            pulse.progress = Math.min(elapsedTime / PULSE_SPEED, 1);

            // If the pulse has reached the end then reset. If it hasnt update the circle values.
            if (pulse.progress >= 1) {
                pulse.progress = 0;
                pulse.startTime = Date.now();

                pulse.x = generateStartingX();
                pulse.y = generateStartingY();

                pulse.circles.forEach((circle: circle) => {
                    circle.progress = 0;
                    circle.startTime = 0;

                    circle.radius = 0;
                    circle.opacity = 0;
                });
            } else {
                pulse.circles.forEach((circle: circle, index: number) => {
                    if (pulse.progress < STAGGER_KEY_FRAMES[index]) return;

                    // If the circle start time is 0 then set it. 0 is used as a placeholder to know that it hasnt been set.
                    if (circle.startTime === 0) {
                        circle.startTime = Date.now();
                    }

                    const circleElapsedTime: number = (Date.now() - circle.startTime) / 1000;
                    circle.progress = Math.min(circleElapsedTime / CIRCLE_SPEED, 1);
                    circle.radius = PULSE_RADIUS * easeOutQuint(circle.progress);

                    // Fade in first then fade out.
                    if (circle.progress < 0.6) {
                        circle.opacity = easeOutQuint(circle.progress / 0.6);
                    } else {
                        circle.opacity = 1 - easeOutQuint((circle.progress - 0.6) / 0.4);
                    }

                    drawCircle(pulse.x, pulse.y, circle.radius, circle.opacity);
                });
            }
        });
    }

    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        pulses = [];

        for (let index: number = 0; index < PULSE_COUNT; index++) {
            pulses.push({
                x: generateStartingX(),
                y: generateStartingY(),

                circles: Array.from({ length: CIRCLE_COUNT }, () => ({
                    radius: 0,
                    opacity: 0,

                    progress: 0,
                    startTime: 0,
                })),

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
        }, 1000 / FPS);

        return () => {
            // Stop updating the canvas size.
            window.removeEventListener("resize", resizeCanvas);

            // Stop animating the canvas.
            clearInterval(animateIntervalID);
        };
    });
</script>

<div class="h-full w-full" bind:this={container}>
    <canvas bind:this={canvas}></canvas>
</div>
