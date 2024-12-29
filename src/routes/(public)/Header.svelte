<script lang="ts">
    import { basicLinks, socialLinks } from "./navigationLinks";
</script>

<header class="x-center top-0 z-10 flex w-full items-center justify-between p-10 md:px-[10%]">
    <a class="text-3xl font-bold" href="/">Index</a>

    <!--Navigation items-->
    <div class="flex-center gap-6">
        {#snippet navigationLink(text: string, url: string)}
            <a class="text-light select-none" href={url}>{text}</a>
        {/snippet}

        {#each basicLinks as link}
            {@render navigationLink(link.text, link.url)}
        {/each}

        <div class="divider-y h-5"></div>

        {#snippet navigationSocialLink(icon: string, url: string)}
            <a class="aspect-square h-7 select-none" href={url}>
                <img class="dark:invert" src={icon} alt={url} />
            </a>
        {/snippet}

        {#each socialLinks as socialLink}
            {@render navigationSocialLink(socialLink.icon, socialLink.url)}
        {/each}
    </div>
</header>
