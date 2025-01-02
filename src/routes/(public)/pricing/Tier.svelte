<script lang="ts">
    import CircleCheck from "$lib/components/icons/CircleCheck.svelte";
    import CircleLeft from "$lib/components/icons/CircleLeft.svelte";

    let {
        name,
        description,
        price,
        color,
        perks,
        buttonText,
        link = "/login",
    }: {
        name: string;
        description: string;
        price: number;
        color: string;
        perks: (string | string[])[];
        buttonText: string;
        link?: string;
    } = $props();
</script>

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

        <a class="primary w-full text-center" href={link} style="background-color: {color};"
            >{buttonText}</a
        >

        <div class="divider-x w-full"></div>

        <ul class="flex flex-col space-y-2">
            {#each perks as perk}
                <li class="flex items-center gap-2">
                    <!--
                    If the perk is an array then the icon is supposed to a left facing arrow.

                    NOTE: There is no specific reason for this, it is just a design choice.
                    -->
                    {#if Array.isArray(perk)}
                        <CircleLeft stroke={color} classes="size-6" />
                    {:else}
                        <CircleCheck stroke={color} classes="size-6" />
                    {/if}

                    <p>{Array.isArray(perk) ? perk[0] : perk}</p>
                </li>
            {/each}
        </ul>
    </div>
</div>
