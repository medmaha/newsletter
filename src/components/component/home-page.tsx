"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Categories from "./Categories";
import Collections, { CollectionCard } from "./Collections";
import { useEffect, useState } from "react";
import WaterDropGrid from "./hero-grid";

export function HomePage() {
	const [loaded, toggleLoaded] = useState(false);

	useEffect(() => {
		toggleLoaded(true);
	}, []);
	return (
		<>
			<header className="py-12 full mb-6">
				{/* <div className="grid gap-4 items-center justify-center">
					<h1 className="text-3xl text-gradient font-bold tracking-tighter sm:text-6xl/none text-center">
						The Informed Developer
					</h1>
					<p className="text-muted-foreground max-w-[60ch] mx-auto text-center">
						A weekly newsletter with handpicked articles, tools, and resources
						for the modern developer.
					</p>
					<div className="">
						<form className="flex md:justify-center items-center space-x-2 pt-4">
							<Input
								className="max-w-sm flex-1 text-lg"
								placeholder="Enter your email"
								type="email"
							/>
							<Button size="lg" className="bg-gradient">
								Subscribe
							</Button>
						</form>

						<p className="text-sm text-muted-foreground text-center pt-2">
							Join 2,100+ freelancers · Unsubscribe anytime
						</p>
					</div>
				</div> */}
				<div className="container overflow-clip mx-auto grid gap-6 px-4 md:px-6 relative min-h-[75svh]">
					<div className="flex flex-col mx-auto h-max items-center mt-16 space-y-4 text-center z-20 bg-card dark:border-accent lg:px-8 shadow rounded-xl p-6 md:w-max">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
								The Web Platform Informer
							</h1>
							<p className="text-muted-foreground md:text-xl md:mx-auto  max-w-[50ch] py-4">
								Your weekly source for the latest web platform news, delivered
								straight to your inbox. Stay informed, stay ahead.
							</p>
						</div>
						<div className="w-full max-w-sm space-y-2">
							<form className="flex space-x-2">
								<Input
									className="max-w-lg flex-1 bg-card"
									placeholder="Enter your email"
									type="email"
								/>
								<Button type="submit" className="">
									Subscribe
								</Button>
							</form>
							<p className="text-xs text-muted-foreground">
								Get the latest updates in your inbox every week. <br />
								<Link className="underline underline-offset-2" href="#">
									Terms & Conditions
								</Link>
							</p>
						</div>
					</div>
					<div className="absolute w-full h-full">
						<WaterDropGrid />
					</div>
				</div>
			</header>
			<section className="p-8 w-full pt-12">
				<Categories />
				<Collections />
			</section>
			<section className="border-t border-b py-12 lg:py-24 xl:py-32">
				<div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl pb-1 font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
							Why you should subscribe
						</h2>
						<ul className="grid gap-4 sm:grid-cols-2">
							<li className="flex space-x-4">
								<NewspaperIcon className="w-6 h-6 flex-shrink-0" />
								<div className="space-y-1.5">
									<h3 className="font-semibold">Curated content</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Save time with our carefully selected articles.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<NewspaperIcon className="w-6 h-6 flex-shrink-0" />
								<div className="space-y-1.5">
									<h3 className="font-semibold">Handpicked tools</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Discover useful resources for your projects.
									</p>
								</div>
							</li>
							<li className="flex space-x-4">
								<NewspaperIcon className="w-6 h-6 flex-shrink-0" />
								<div className="space-y-1.5">
									<h3 className="font-semibold">Developer news</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Stay informed with the latest tech updates.
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="flex justify-center">
						{loaded && (
							<CollectionCard
								className={"bg-transparent shadow-none border-0"}
								img="/placeholder.svg"
							>
								<Image
									alt="Hero"
									className="aspect-video overflow-hidden rounded-xl object-cover object-center"
									height="310"
									src="/placeholder.svg"
									width="550"
								/>
							</CollectionCard>
						)}
					</div>
				</div>
			</section>
			<section className="py-12 lg:py-24 xl:py-32">
				<div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl pb-1 font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
							Trusted by developers
						</h2>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="flex space-x-4">
								<Image
									alt="User"
									className="rounded-full"
									height="64"
									src="/placeholder.svg"
									style={{
										aspectRatio: "64/64",
										objectFit: "cover",
									}}
									width="64"
								/>
								<div className="flex justify-center"></div>
								<div className="space-y-1.5">
									<h3 className="font-semibold">Jane Cooper</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										The Informed Developer has become my go-to source for the
										latest industry news and insightful articles. Highly
										recommended!
									</p>
								</div>
							</div>
							<div className="flex space-x-4">
								<Image
									alt="User"
									className="rounded-full"
									height="64"
									src="/placeholder.svg"
									style={{
										aspectRatio: "64/64",
										objectFit: "cover",
									}}
									width="64"
								/>
								<div className="space-y-1.5">
									<h3 className="font-semibold">Alex Harris</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										As a busy developer, I appreciate the curation provided by
										The Informed Developer. It saves me time and ensures I
										don&apos;t miss important updates.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						{loaded && (
							<CollectionCard
								className={"bg-transparent shadow-none border-0"}
								img="/placeholder.svg"
							>
								<Image
									alt="Hero"
									className="aspect-video overflow-hidden rounded-xl object-cover object-center"
									height="310"
									src="/placeholder.svg"
									width="550"
								/>
							</CollectionCard>
						)}
					</div>
				</div>
			</section>
			<section className="py-12 lg:py-24 xl:py-32">
				<div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl pb-1 font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
							Categories
						</h2>
						<div className="grid gap-4 sm:grid-cols-2">
							<Link className="flex space-x-4" href="#">
								<NewspaperIcon className="w-6 h-6 flex-shrink-0" />
								<div className="space-y-1.5">
									<h3 className="font-semibold">Web Development</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Stay updated with the latest trends in web development.
									</p>
								</div>
							</Link>
							<Link className="flex space-x-4" href="#">
								<NewspaperIcon className="w-6 h-6 flex-shrink-0" />
								<div className="space-y-1.5">
									<h3 className="font-semibold">Programming Languages</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Explore different programming languages and their uses.
									</p>
								</div>
							</Link>
							<Link className="flex space-x-4" href="#">
								<NewspaperIcon className="w-6 h-6 flex-shrink-0" />
								<div className="space-y-1.5">
									<h3 className="font-semibold">Tech News</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Get the latest updates on technology and industry news.
									</p>
								</div>
							</Link>
						</div>
					</div>
					<div className="flex justify-center">
						{loaded && (
							<CollectionCard
								className={"bg-transparent shadow-none border-0"}
								img="/placeholder.svg"
							>
								<Image
									alt="Hero"
									className="aspect-video overflow-hidden rounded-xl object-cover object-center"
									height="310"
									src="/placeholder.svg"
									width="550"
								/>
							</CollectionCard>
						)}
					</div>
				</div>
			</section>
			<section className="border-t py-12 lg:py-24 xl:py-32">
				<div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold pb-1 tracking-tighter sm:text-4xl xl:text-5xl/none">
							Get the latest updates
						</h2>
						<p className="max-w-[600px] text-gray-500 dark:text-gray-400 ">
							Subscribe to our newsletter to stay informed about the latest
							tools, trends, and tutorials in the world of web development.
						</p>
						<form className="flex space-x-2">
							<Input
								className="max-w-sm flex-1"
								placeholder="Enter your email"
								type="email"
							/>
							<Button size="lg">Subscribe</Button>
						</form>
					</div>
					<div className="flex justify-center">
						<Image
							alt="Hero"
							className="aspect-video overflow-hidden rounded-xl object-cover object-center"
							height="225"
							src="/placeholder.svg"
							width="400"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

function NewspaperIcon(props: any) {
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
			<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
			<path d="M18 14h-8" />
			<path d="M15 18h-5" />
			<path d="M10 6h8v4h-8V6Z" />
		</svg>
	);
}
