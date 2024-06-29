import { DiscordIcon } from "@/components/icons/discord";
import { GithubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { TwitchIcon } from "@/components/icons/twitch";
import { XIcon } from "@/components/icons/x";
import { YouTubeIcon } from "@/components/icons/youtube";
import type React from "react";

export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export type Social = {
	platform: string;
	link: string;
	icon: React.ReactNode;
};

export type Category = {
	title: string;
	page: string | undefined;
	href: string;
};

export type Meta = {
	title: string;
	description: string;
	image: Image;
};

export type SiteConfig = {
	meta: Meta;
	name: string;
	headshot: string;
	title: string;
	description: string;
	socials: Array<Social>;
	categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
	meta: {
		title: "Christopher Man",
		description: "This is my website.",
		image: {
			src: "/headshot.jpg",
			alt: "Christopher Man",
		},
	},
	name: "Christopher Man",
	headshot: "/headshot.jpg",
	title: "Lead Software Developer",
	description: "ramblings of a lead software engineer",
	socials: [
		{
			platform: "GitHub",
			link: "https://github.com/christophergyman",
			icon: <GithubIcon />,
		},
		{
			platform: "LinkedIn",
			link: "https://www.linkedin.com/in/christophergayiuman/",
			icon: <LinkedInIcon />,
		},
		{
			platform: "Discord",
			link: "https://discord.com/",
			icon: <DiscordIcon />,
		},
		{
			platform: "X",
			link: "https://twitter.com/chrisgyman",
			icon: <XIcon />,
		},
		{
			platform: "YouTube",
			link: "https://www.youtube.com/channel/UCrqP4T_WQOSAhcxApD-IgOg",
			icon: <YouTubeIcon />,
		},
		{
			platform: "Twitch",
			link: "https://www.twitch.tv/",
			icon: <TwitchIcon />,
		},
	],
	categories: [
		{
			title: "All",
			page: undefined,
			href: "/posts",
		},
		{
			title: "Technical",
			page: "tech",
			href: "/posts/tech",
		},
		{
			title: "Hardware",
			page: "hardware",
			href: "/posts/hardware",
		},
	],
};
