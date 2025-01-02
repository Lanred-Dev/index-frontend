<script lang="ts">
    import { basicLinks } from "./navigationLinks";
</script>

<header class="x-center top-0 z-10 flex w-full items-center justify-between p-10 md:px-[15%]">
    <a class="text-3xl font-bold" href="/">Index</a>

    <!--Navigation items-->
    <ul class="flex-center gap-6">
        {#snippet navigationLink(text: string, url: string)}
            <li>
                <a class="text-light select-none" href={url}>{text}</a>
            </li>
        {/snippet}

        {#each basicLinks as link}
            {@render navigationLink(link.text, link.url)}
        {/each}
    </ul>

    <ul class="flex-center gap-6">
        <li>
            <a class="secondary" href="login">Log in</a>
        </li>
    </ul>
</header>
