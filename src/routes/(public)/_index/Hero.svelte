<script lang="ts">
    import { onMount, tick } from "svelte";
    import {
        animate,
        timeline,
        stagger,
        spring,
        type EasingGenerator,
        type AnimationOptions,
    } from "motion";
    import getBrowserName from "$lib/scripts/utils/getBrowserName";
    import easeInOutCubic from "$lib/scripts/easings/easeInOutCubic";

    let browserName: string = $state("Unknown");

    type cycleTerm = { text: string; color: string };
    const CYCLE_TERMS: cycleTerm[] = [
        { text: "Beauty", color: "#FFB6C1" },
        { text: "Fun", color: "#FFD700" },
        { text: "Customization", color: "#87CEFA" },
        { text: "Perfection", color: "#F5DEB3" },
        { text: "Style", color: "#BA55D3" },
        { text: "Innovation", color: "#40E0D0" },
        { text: "Simplicity", color: "#AFEEEE" },
    ];
    let currentTermIndex: number = 0;
    let currentTerm: cycleTerm = $state(CYCLE_TERMS[currentTermIndex]);

    const TEXT_ANIMATION_SPRING: EasingGenerator = spring({
        stiffness: 50,
        mass: 1,
        damping: 15,
        velocity: 0,
    });
    const ANIMATION_OPTIONS: AnimationOptions = {
        easing: easeInOutCubic,
        duration: 0.2,
        delay: stagger(0.1),
    };

    let termText: HTMLSpanElement;
    let textMeasureElement: HTMLSpanElement;

    /**
     * Cycles through the term list. Smoothly transitions between terms.
     *
     * @returns never
     */
    async function cycle() {
        currentTermIndex = currentTermIndex >= CYCLE_TERMS.length - 1 ? 0 : currentTermIndex + 1;

        // Fade the text out and wait until all text is faded out.
        await animate(
            termText.querySelectorAll("span"),
            {
                opacity: [1, 0],
            },
            ANIMATION_OPTIONS
        ).finished;

        const oldTextSize: number = textMeasureElement.clientWidth;

        currentTerm = CYCLE_TERMS[currentTermIndex];

        // Wait for the DOM to update.
        await tick();

        timeline([
            // Fade the text in.
            [
                termText.querySelectorAll("span"),
                {
                    opacity: [0, 1],
                },
                ANIMATION_OPTIONS,
            ],

            // Transitions the 'termText' element to the correct size.
            [
                termText,
                {
                    width: [`${oldTextSize}px`, `${textMeasureElement.clientWidth}px`],
                },
                {
                    at: "<",
                    easing: TEXT_ANIMATION_SPRING,
                    duration: 0.5 * (currentTerm.text.length - 1),
                },
            ],
        ]);
    }

    onMount(() => {
        browserName = getBrowserName();

        // Start cycling the terms.
        const cycleIntervalID: number = setInterval(cycle, 4500);

        return () => {
            // Stop cycling the terms.
            clearInterval(cycleIntervalID);
        };
    });
</script>

<div class="cover-screen text-center">
    <div class="x-center y-center flex-center w-full flex-col gap-10">
        <h1 class="flex flex-col text-4xl font-bold md:text-5xl lg:text-6xl">
            <span class="flex-center">
                <span
                    style="color: {currentTerm.color}; text-shadow: {currentTerm.color} 0 0 80px;"
                    bind:this={termText}
                >
                    {#each [...currentTerm.text.split(""), "&nbsp;"] as letter}
                        <span>{@html letter}</span>
                    {/each}
                </span>

                <!--This element is used to measure the size of the text. This is so that the 'termText' element can be transition to the correct size.-->
                <span class="invisible absolute" bind:this={textMeasureElement}
                    >{currentTerm.text}&nbsp;</span
                >

                <span>is what you get</span>
            </span>

            <span>with Upbeat.</span>
        </h1>

        <p class="text-xl lg:max-w-4xl">
            Take your Roblox experience to the next level with a powerful, fully customizable
            browser extension! Enjoy a sleek UI, personalized themes, and enhanced performance, all
            designed to make every session smoother and more fun.
        </p>

        <div class="flex-center gap-8">
            <a
                class="primary text-primary-light transition-colors duration-300"
                id="download-button"
                href="/get-started"
                style="background-color: {currentTerm.color};">Download for {browserName}</a
            >
            <a class="secondary" href="/get-started">Learn more</a>
        </div>
    </div>
</div>
