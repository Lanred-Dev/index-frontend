<script lang="ts">
    import SimplePage from "$lib/components/SimplePage.svelte";
    import Tier from "./Tier.svelte";
    import Questions from "./Questions.svelte";
</script>

<SimplePage
    title="Pricing built for everyone."
    text="Choose from our straightforward pricing plans, designed to fit every need. Whether you're showcasing your work as a hobby or building a professional portfolio, Index offers a powerful, fully customizable platform with stunning templates, shareable cards, and dynamic stats—all at a price that works for you."
>
    <div class="flex-center mt-10 w-full !items-start gap-16 px-4 lg:px-[15%]">
        <Tier
            name="Breeze"
            description="The perfect starting point for your portfolios."
            buttonText="Register now"
            color="#B8E2D8"
            price={0}
            perks={[
                "Up to 5 portfolios",
                "Export to Image",
                "1 customizable portfolio URLs",
                "Access to 10+ themes",
            ]}
        />

        <Tier
            name="Sunrise"
            description="The ideal choice for growing portfolios."
            buttonText="Start your free trial"
            link="/login?redirect=/login-redirects/free-trial"
            color="#F1D4A3"
            price={3}
            perks={[
                ["Everything in Breeze, plus..."],
                "Up to 10 portfolios",
                "Export to Image and GIF",
                "Basic analytics",
                "Access to 25+ themes",
            ]}
        />

        <Tier
            name="Starlight"
            description="The best option for professionals."
            buttonText="Buy now"
            link="/login?redirect=/login-redirects/upgrade"
            color="#A4C4F3"
            price={5}
            perks={[
                ["Everything in Sunrise, plus..."],
                "Unlimited portfolios",
                "Advanced analytics and stats",
                "5 customizable portfolio URLs",
                "Access to 30+ themes",
            ]}
        />
    </div>

    <Questions />
</SimplePage>
