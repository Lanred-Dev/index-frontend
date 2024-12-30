<script lang="ts">
    import Section from "../../Section.svelte";
    import Portfolio from "./Portfolio.svelte";
    import { portfolios } from "./portfolios";
</script>

<Section
    title="Discover Talent, Find Opportunities"
    text="Built for employers and job seekers alike, our platform bridges the gap between ambition and opportunity. With powerful search tools, employers can uncover top talent, and job seekers can find their perfect role. Discover your next hire or career move with ease!"
>
    <div class="flex-center w-full !items-start gap-8 px-4 lg:px-[25%]">
        {#each portfolios as list, index}
            <div class="w-full space-y-8 {index === 0 ? 'pt-8' : ''}">
                {#each list as portfolio}
                    <Portfolio {...portfolio} />
                {/each}
            </div>
        {/each}
    </div>
</Section>
