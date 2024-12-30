// This file contains a list of all the links that are used for the header and footer navigation.

export type link = {
    text: string;
    url: string;
};

export const basicLinks: link[] = [
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
        url: "/",
    },
    {
        text: "Features",
        url: "/#features",
    },
    {
        text: "Portfolios",
        url: "/discover",
    },
    {
        text: "Marketplace",
        url: "/marketplace",
    },
];

export const supportLinks: link[] = [
    {
        text: "Contact",
        url: "/contact",
    },
    {
        text: "Pricing",
        url: "/pricing",
    },
    {
        text: "Frequently Asked Questions",
        url: "/#faq",
    },
];

export type socialLink = link & { icon: string };

export const socialLinks: socialLink[] = [
    {
        text: "Github",
        icon: "/icons/Github.svg",
        url: "https://github.com/Upbeat-Roblox",
    },
];
