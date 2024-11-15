export type link = {
    text: string;
    url: string;
};

export const links: link[] = [
    {
        text: "About",
        url: "/",
    },
    {
        text: "Pricing",
        url: "/pricing",
    },
    {
        text: "Contact",
        url: "/contact",
    },
];

export const aboutLinks: link[] = [
    {
        text: "About",
        url: "/#about",
    },
    {
        text: "Features",
        url: "/#features",
    },
    {
        text: "Features",
        url: "/#features",
    },
];

export const supportLinks: link[] = [
    {
        text: "Contact",
        url: "/contact",
    },
    {
        text: "FAQs",
        url: "/#faq",
    },
    {
        text: "Pricing",
        url: "/pricing",
    },
];

export type socialLink = link & { icon: string };

export const socialLinks: socialLink[] = [
    {
        text: "Roblox",
        icon: "/icons/Roblox.svg",
        url: "https://www.roblox.com/groups/6080291/Upbeat-Roblox#!/about",
    },
    {
        text: "Github",
        icon: "/icons/Github.svg",
        url: "https://github.com/Upbeat-Roblox",
    },
];
