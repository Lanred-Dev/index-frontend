<script lang="ts">
    import Section from "../Section.svelte";
    import Testimonial from "./Testimonial.svelte";
    import { testimonials } from "./testimonials";

    let showAll: boolean = $state(false);
    let scrollPositionBeforeShowAll: number = $state(0);

    $effect(() => {
        if (scrollPositionBeforeShowAll === 0) {
            return;
        }

        if (!showAll) {
            window.scrollTo({
                top: scrollPositionBeforeShowAll,
                behavior: "instant",
            });
        }
    });
</script>

<Section
    title="Not everyone can learn HTML, CSS, and JS."
    text="Building a professional portfolio from scratch can feel overwhelming. But whether you're a student, freelancer, or seasoned professional, Index makes it easy to showcase your work in the best possible way. Don't just take our word for it—hear directly from our users:"
>
    <div class="relative w-full">
        <div
            class="w-full overflow-hidden px-4 lg:px-[15%] {showAll
                ? ''
                : 'bt-cover max-h-[50vh] lg:max-h-[60vh]'}"
        >
            <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {#each Array(3) as _value, index}
                    <ul
                        class="space-y-6 {index === 1
                            ? 'hidden sm:block'
                            : index === 2
                              ? 'hidden lg:block'
                              : ''}"
                    >
                        {#each testimonials[index] as data}
                            <Testimonial {...data} />
                        {/each}
                    </ul>
                {/each}
            </div>
        </div>

        <div
            class="z-[1] w-full {showAll ? 'flex-center relative mt-6' : 'absolute bottom-0 h-1/4'}"
        >
            <button
                class="primary {!showAll ? 'x-center y-center' : ''}"
                onclick={() => {
                    if (!showAll) {
                        scrollPositionBeforeShowAll = window.scrollY;
                    }

                    showAll = !showAll;
                }}>{showAll ? "Show less" : "Show more"}</button
            >
        </div>
    </div>
</Section>
