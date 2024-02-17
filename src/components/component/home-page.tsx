"use client ";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HomePage() {
	return (
		<div className="bg-gray-50">
			<section className="py-12 lg:py-24 xl:py-32 min-h-[calc(100svh-60px)]">
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-12">
					<div className="space-y-4 mx-auto">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:text-left text-center">
							The Informed Developer
						</h1>
						<p className="text-gray-500 dark:text-gray-400 px-1 md:text-left text-center md:max-w-[65ch] mx-auto md:mx-0 pb-2 md:pb-0 max-w-[50ch]">
							A weekly newsletter with handpicked articles, tools, and resources
							for the modern developer.
						</p>
						<form className="flex md:justify-start justify-center space-x-2">
							<Input
								className="max-w-sm flex-1 text-lg"
								placeholder="Enter your email"
								type="email"
							/>
							<Button size="lg">Subscribe</Button>
						</form>
					</div>
					<div className="flex mx-auto justify-center md:justify-start lg:justify-center ">
						<Image
							alt="Hero"
							className="aspect-video overflow-hidden rounded-xl object-cover object-center"
							height="325"
							src="/nl-hero.jpg"
							width="600"
						/>
					</div>
				</div>
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
						<Image
							alt="Hero"
							className="aspect-video overflow-hidden rounded-xl object-cover object-center"
							height="310"
							src="/placeholder.svg"
							width="550"
						/>
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
						<Image
							alt="Hero"
							className="aspect-video overflow-hidden rounded-xl object-cover object-center"
							height="310"
							src="/placeholder.svg"
							width="550"
						/>
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
						<Image
							alt="Hero"
							className="aspect-video overflow-hidden rounded-xl object-cover object-center"
							height="310"
							src="/placeholder.svg"
							width="550"
						/>
					</div>
				</div>
			</section>
			<section className="border-t py-12 lg:py-24 xl:py-32">
				<div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold pb-1 tracking-tighter sm:text-4xl xl:text-5xl/none">
							Get the latest updates
						</h2>
						<p className="max-w-[600px] text-gray-500 dark:text-gray-400">
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

			<section className="border-t bg-card py-12 lg:py-24 xl:py-32">
				<div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-8">
					<div className="space-y-2">
						<Link className="text-2xl font-bold italic" href="#">
							Informer
						</Link>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							A weekly newsletter with handpicked articles, tools, and resources
							for the modern developer.
						</p>
					</div>
					<nav className="space-y-2 text-center flex flex-col gap-1 lg:text-left">
						<Link className="text-sm font-medium" href="#">
							About
						</Link>
						<Link className="text-sm font-medium" href="#">
							Contact
						</Link>
						<Link className="text-sm font-medium" href="#">
							Archive
						</Link>
					</nav>
					<div className="space-y-2 text-right lg:text-left">
						<p className="text-sm font-medium">Connect with us</p>
						<div className="flex justify-center space-x-2 lg:justify-start">
							<Link className="w-4 h-4 rounded-full overflow-hidden" href="#">
								<Image
									alt="Social"
									className="aspect-square object-cover"
									height="32"
									src="/placeholder.svg"
									width="32"
								/>
							</Link>
							<Link className="w-4 h-4 rounded-full overflow-hidden" href="#">
								<Image
									alt="Social"
									className="aspect-square object-cover"
									height="32"
									src="/placeholder.svg"
									width="32"
								/>
							</Link>
							<Link className="w-4 h-4 rounded-full overflow-hidden" href="#">
								<Image
									alt="Social"
									className="aspect-square object-cover"
									height="32"
									src="/placeholder.svg"
									width="32"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
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