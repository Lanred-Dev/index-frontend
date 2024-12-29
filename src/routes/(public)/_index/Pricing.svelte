<script lang="ts">
    import Section from "./Section.svelte";
</script>

{#snippet tier(
    name: string,
    description: string,
    price: number,
    color: string,
    perks: string[],
    buttonText: string
)}
    <div class="relative w-full select-none">
        <div
            class="relative z-10 flex h-full w-full flex-col gap-8 rounded-primary border-primary bg-primary-light p-7 dark:bg-primary-dark"
            style="box-shadow: 0px 0px 80px 1px {color}1c; border-color: {color}6b;"
        >
            <div>
                <p>{name}</p>

                <p class="mt-4 flex items-end gap-2 text-4xl font-bold">
                    {#if price === 0}
                        Free
                    {:else}
                        <span class="tracking-tighter">${price}</span>
                        <span class="text-dark text-base font-light">per month</span>
                    {/if}
                </p>

                <p class="text-light mt-2">{description}</p>
            </div>

            <div class="divider-x w-full"></div>

            <ul class="flex flex-col space-y-2">
                {#each perks as perk}
                    <li class="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke={color}
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>

                        <p>{perk}</p>
                    </li>
                {/each}
            </ul>

            <a
                class="primary w-full text-center"
                href="/get-started"
                style="background-color: {color};">{buttonText}</a
            >
        </div>
    </div>
{/snippet}

<Section
    title="Pricing built for everyone."
    text="Choose from our straightforward pricing plans, designed to fit every need. Whether you're showcasing your work as a hobby or building a professional portfolio, Index offers a powerful, fully customizable platform with stunning templates, shareable cards, and dynamic stats—all at a price that works for you."
>
    <div class="flex-center mt-10 w-full gap-16 px-[16%]">
        {@render tier(
            "Breeze",
            "The perfect starting point for your portfolios.",
            0,
            "#B8E2D8",
            [
                "Up to 5 portfolios",
                "Export to Image",
                "1 customizable portfolio URLs",
                "Access to 10+ themes",
            ],
            "Register now"
        )}

        {@render tier(
            "Sunrise",
            "The ideal choice for growing portfolios.",
            3,
            "#F1D4A3",
            [
                "Up to 10 portfolios",
                "Export to Image and GIF",
                "Basic analytics",
                "Access to 25+ themes",
            ],
            "Start your free trial"
        )}

        {@render tier(
            "Starlight",
            "The best option for professionals.",
            5,
            "#A4C4F3",
            [
                "Unlimited portfolios",
                "Advanced analytics and stats",
                "5 customizable portfolio URLs",
                "Access to 30+ themes",
            ],
            "Buy now"
        )}
    </div>
</Section>
