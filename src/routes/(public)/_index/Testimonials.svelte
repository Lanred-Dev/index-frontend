<script lang="ts">
    import Section from "./Section.svelte";

    const TESTIMONIALS: {
        avatar: string;
        name: string;
        occupation: string;
        text: string;
    }[][] = [
        [
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Landon Redmond",
                occupation: "College Student",
                text: "Index made it so easy to get my portfolio online. I had no idea where to start, but the platform was intuitive and I was able to customize everything to fit my style.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Evelyn Walker",
                occupation: "HR Specialist",
                text: "Building my portfolio seemed impossible at first, but with Index, it became effortless. I love how simple it is to use and how professional the end result looks.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Matthew Hall",
                occupation: "Product Designer",
                text: "I’ve tried other platforms, but Index is by far the best. It lets me express my design work exactly how I want it. Highly recommended!",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Charlotte Allen",
                occupation: "UX Designer",
                text: "I’ve always struggled with putting together a portfolio, but Index made it incredibly simple. The templates were exactly what I needed, and it took me no time to build something I’m proud of.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Jack Harris",
                occupation: "Sales Director",
                text: "Index helped me build a portfolio that’s not only professional but also easy to maintain. I’m now able to update it quickly whenever I have new projects to show.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Maya Davis",
                occupation: "Product Manager",
                text: "I didn’t know where to start with my portfolio, but Index made everything so clear. It's a fantastic platform for anyone looking to put together something professional quickly.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Leo Thomas",
                occupation: "Software Developer",
                text: "I never imagined creating a portfolio would be this easy. The customization options were just right, and now I have a platform to showcase my skills and projects.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Grace Allen",
                occupation: "Brand Strategist",
                text: "Creating a portfolio seemed daunting before I found Index. The templates are so easy to work with, and it looks great no matter what I decide to showcase.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "James Perez",
                occupation: "Content Manager",
                text: "Index helped me organize my projects quickly and make a portfolio that reflects my personal style. I can update it anytime, and it’s still easy to navigate.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Amelia Evans",
                occupation: "Developer",
                text: "I thought building a portfolio would take weeks, but with Index, I had it done in a couple of days. The platform is flexible, and I was able to create something that fits my personality.",
            },
        ],
        [
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Owen Lewis",
                occupation: "Graphic Designer",
                text: "I’ve been able to create a sleek, professional portfolio thanks to Index. I’ve tried others, but this is by far the most user-friendly platform I’ve used.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Isabella Clark",
                occupation: "Product Manager",
                text: "It’s hard to find a platform that lets me be creative while also being straightforward to use. Index struck that perfect balance. My portfolio is exactly how I imagined it.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Eliot King",
                occupation: "Consultant",
                text: "I didn’t have a clue how to start, but Index took care of everything. The platform’s flexibility allowed me to tailor my portfolio exactly to my needs.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Ava Taylor",
                occupation: "Engineer",
                text: "If you’re a professional like me, you’ll appreciate how Index simplifies creating a portfolio. It’s easy to use, and the result looks great. I can finally share my work with pride.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Nina Allen",
                occupation: "Photographer",
                text: "I struggled to find a portfolio platform that matched my creative style, but Index made it so easy. The final product is professional and clean, perfect for showcasing my photos.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Liam Walker",
                occupation: "Business Consultant",
                text: "I needed a portfolio to show my work, and Index made that simple. I didn’t have to waste time learning a new platform. It was easy to use and saved me a lot of time.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Jackie Carter",
                occupation: "Public Relations",
                text: "I’d been putting off creating my portfolio for months, but Index made it easy to get started. The end result exceeded my expectations, and I now feel confident showing my work.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Zoe Mitchell",
                occupation: "App Developer",
                text: "I wasn’t sure where to begin, but Index gave me a starting point, and I was able to make the changes I wanted. The interface is simple and easy to use.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Lucas Harris",
                occupation: "Data Scientist",
                text: "I needed a portfolio that showcases my work and experience, and Index made it so easy. The customization options let me show off my skills in a way that feels personal.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Maya Johnson",
                occupation: "Engineer",
                text: "Index made the entire process quick and simple. I didn’t need to be a web designer to create something beautiful and professional. It’s perfect for anyone looking to build their portfolio fast.",
            },
        ],
        [
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Sophia Lee",
                occupation: "Marketing Specialist",
                text: "Creating a portfolio was always intimidating to me, but Index simplified everything. It’s easy to get started, and the results are truly impressive.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Michael Brown",
                occupation: "Content Creator",
                text: "I’ve been able to showcase my content in a fresh way thanks to Index. It’s quick, easy, and gave me a professional-looking portfolio in no time.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Lily Adams",
                occupation: "Social Media Manager",
                text: "I’m no designer, but Index made it so simple for me to create a portfolio that looks great. The platform has everything I need, and it’s so easy to update.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "James Thompson",
                occupation: "Entrepreneur",
                text: "I used to dread putting together a portfolio, but Index changed that. It was easy to use, and now I have a professional portfolio that I’m proud to share.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Olivia Garcia",
                occupation: "Copywriter",
                text: "Index helped me craft a portfolio that represents my writing style perfectly. It’s easy to use and gives me all the tools I need to make my portfolio stand out.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Emma Walker",
                occupation: "Video Editor",
                text: "I’m thrilled with how my portfolio turned out! Index made the process so much easier than I expected. The templates are really flexible and allowed me to showcase my video work seamlessly.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Daniel King",
                occupation: "Designer",
                text: "Index saved me so much time! I’m not a web designer, but I was able to create a clean, professional portfolio in no time. It’s the perfect platform for anyone with a creative job.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Aiden Harris",
                occupation: "Photographer",
                text: "Creating a portfolio was something I always put off. But Index made it easy, and now I have a sleek, professional-looking portfolio that I can share with clients.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Ella Martinez",
                occupation: "Web Developer",
                text: "I loved how easy it was to create my portfolio with Index. The platform gave me a professional-looking result without the headache of learning a new system.",
            },
            {
                avatar: "https://tailwindcss.com/_next/static/media/adam.f69b0b90.jpg",
                name: "Lucas Robinson",
                occupation: "Developer",
                text: "Index helped me put together a portfolio that looks sleek and professional. It was easy to navigate, and I was able to update my projects quickly and easily.",
            },
        ],
    ];
</script>

{#snippet testimonial(avatar: string, name: string, occupation: string, text: string)}
    <li class="w-full text-left text-sm">
        <div class="bg-primary-200 relative flex w-full flex-col rounded-md p-8">
            <div class="flex items-center space-x-4">
                <img
                    src={avatar}
                    alt={name}
                    class="aspect-square h-10 flex-none rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                />

                <div class="flex-auto leading-tight">
                    <p class="text-base font-semibold">{name}</p>
                    <p>{occupation}</p>
                </div>
            </div>

            <p class="mt-4">{text}</p>
        </div>
    </li>
{/snippet}

<Section
    title="Not everyone can learn HTML, CSS, and JS."
    text="Building a professional portfolio from scratch can feel overwhelming. But whether you’re a student, freelancer, or seasoned professional, Index makes it easy to showcase your work in the best possible way. Don’t just take our word for it—hear directly from our users:"
>
    <div class="relative w-full">
        <div
            class="testimonials-list max-h-[85vh] w-full overflow-hidden px-4 lg:max-h-[80vh] lg:px-[10%]"
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
                        {#each TESTIMONIALS[index] as data}
                            {@render testimonial(
                                data.avatar,
                                data.name,
                                data.occupation,
                                data.text
                            )}
                        {/each}
                    </ul>
                {/each}
            </div>
        </div>

        <div class="absolute bottom-0 z-[1] h-1/4 w-full">
            <button class="primary x-center y-center">Show more</button>
        </div>
    </div>
</Section>

<style lang="postcss">
    .testimonials-list {
        -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: 0% 15%;
    }
</style>
