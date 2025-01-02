<script lang="ts">
    import {
        aboutLinks,
        supportLinks,
        socialLinks,
        type link,
        type socialLink,
    } from "./navigationLinks";
</script>

<footer class="flex-center flex-center mt-20 flex-col gap-7 px-10 py-16 md:px-[10%]">
    <div class="flex w-full flex-col gap-16 md:flex-row md:gap-20 lg:gap-28">
        <div class="w-full flex-shrink-0 md:w-[35%]">
            <div>
                <p class="text-3xl font-bold">Index</p>
                <p class="text-light">Copyright © 2024 Index. All rights reserved.</p>
            </div>

            <p class="text-dark mt-5 text-sm">
                Index is an independent product, not affiliated with, endorsed by, or associated
                with any third-party platforms or organizations. All logos, trademarks, and
                intellectual property mentioned are the property of their respective owners. Index
                focuses on empowering creators by improving networking opportunities and providing
                tools to showcase their work effectively. It offers customizable templates and
                features to highlight achievements and creativity while remaining solely a tool for
                personal and professional expression. Index does not interfere with, modify, or
                interact with proprietary features or services of any platform.
            </p>
        </div>

        <div
            class="grid w-full grid-cols-1 grid-rows-1 gap-10 md:flex-grow md:grid-cols-3 md:grid-rows-1"
        >
            {#snippet navigationLink(text: string, url: string)}
                <li>
                    <a class="text-light select-none" href={url}>{text}</a>
                </li>
            {/snippet}

            {#snippet navigationSocialLink(text: string, icon: string, url: string)}
                <li>
                    <a class="text-light flex select-none items-center gap-1.5" href={url}>
                        <img class="aspect-1 h-5 dark:invert" src={icon} alt={url} />
                        {text}
                    </a>
                </li>
            {/snippet}

            {#snippet list(title: string, entries: link[] | socialLink[])}
                <ul class="space-y-1.5 md:pt-2.5">
                    <p class="text-dark mb-1 text-sm font-semibold">
                        {title}
                    </p>

                    {#each entries as entry}
                        {#if "icon" in entries[0]}
                            {@render navigationSocialLink(
                                entry.text,
                                (entry as socialLink).icon,
                                entry.url
                            )}
                        {:else}
                            {@render navigationLink(entry.text, entry.url)}
                        {/if}
                    {/each}
                </ul>
            {/snippet}

            {@render list("Product", aboutLinks)}
            {@render list("Support", supportLinks)}
            {@render list("Where to find us", socialLinks)}
        </div>
    </div>
</footer>
