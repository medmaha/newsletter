import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<section className="border-t bg-card py-12 lg:py-24 xl:py-32">
			<div className="container flex flex-wrap justify-between gap-6 px-4 items-center md:px-6 lg:grid-cols-3 lg:gap-8">
				<div className="space-y-2">
					<Link className="text-2xl font-bold italic" href="/">
						Informer
					</Link>
					<p className="text-sm text-muted-foreground max-w-[50ch]">
						A weekly newsletter with handpicked articles, tools, and resources
						for the modern developer.
					</p>
				</div>

				<div className="space-y-2 text-right lg:text-left">
					<p className="text-sm font-medium">Connect with us</p>
					<div className="flex justify-center gap-6 space-x-2 lg:justify-start">
						<Link
							className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
							href="#"
						>
							<TwitterIcon className="w-4 h-4" />
							Twitter
						</Link>
						<Link
							className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
							href="#"
						>
							<GithubIcon className="w-4 h-4" />
							GitHub
						</Link>
					</div>
				</div>
				<p className="text-muted-foreground text-sm">
					&copy; Copyright {new Date().getFullYear()} Informer Co
				</p>
			</div>
		</section>
	);
}

function GithubIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}

function TwitterIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
