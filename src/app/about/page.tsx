import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Page() {
	return (
		<div className="w-full py-6 space-y-6">
			<section className="w-full py-12">
				<div className="container flex flex-col items-center px-4 space-y-4 md:px-6 lg:space-y-8">
					<div className="text-center">
						<h1 className="text-4xl text-gradient font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
							About the Newsletter
						</h1>
						<p className="text-muted-foreground md:text-xl max-w-[55ch]">
							Learn more about our mission, our team, and the value we deliver
							with every edition of our newsletter.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full py-12">
				<div className="container grid gap-12 px-4 text-center md:grid-cols-2 md:px-6 lg:gap-24">
					<div className="flex flex-col justify-center space-y-4">
						<h2 className="text-3xl text-left font-bold tracking-tighter sm:text-4xl">
							Our Mission
						</h2>
						<p className="max-w-prose text-left md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
							Our mission is to curate valuable content for our subscribers,
							keeping them informed, inspired, and ahead of the curve. Each
							newsletter edition delivers high-quality articles, insightful
							insights, and practical tips to excel in their professional lives.
						</p>
					</div>
					<div className="grid gap-4">
						<h2 className="text-3xl text-left font-bold tracking-tighter sm:text-4xl">
							Meet the Team
						</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<div className="flex items-center space-x-4">
								<div className="w-9 h-9 overflow-hidden rounded-full">
									<Image
										alt="Alice Johnson"
										className="border rounded-full"
										height="36"
										src="/placeholder-user.jpg"
										style={{
											aspectRatio: "36/36",
											objectFit: "cover",
										}}
										width="48"
									/>
								</div>
								<div className="space-y-0.5">
									<h3 className="text-xl font-semibold">Bob Smith</h3>
									<p className="text-sm text-left text-muted-foreground">
										Lead Writer
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-9 h-9 overflow-hidden rounded-full">
									<Image
										alt="Alice Johnson"
										className="border rounded-full"
										height="36"
										src="/placeholder-user.jpg"
										style={{
											aspectRatio: "36/36",
											objectFit: "cover",
										}}
										width="48"
									/>
								</div>
								<div className="space-y-0.5">
									<h3 className="text-xl text-left font-semibold">
										Alice Johnson
									</h3>
									<p className="text-sm text-left text-muted-foreground">
										Editor-in-Chief
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-9 h-9 overflow-hidden rounded-full">
									<Image
										alt="Alice Johnson"
										className="border rounded-full"
										height="36"
										src="/placeholder-user.jpg"
										style={{
											aspectRatio: "36/36",
											objectFit: "cover",
										}}
										width="48"
									/>
								</div>
								<div className="space-y-0.5">
									<h3 className="text-xl font-semibold">Bob Smith</h3>
									<p className="text-sm text-left text-muted-foreground">
										Lead Writer
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-9 h-9 overflow-hidden rounded-full">
									<Image
										alt="Alice Johnson"
										className="border rounded-full"
										height="36"
										src="/placeholder-user.jpg"
										style={{
											aspectRatio: "36/36",
											objectFit: "cover",
										}}
										width="48"
									/>
								</div>
								<div className="space-y-0.5">
									<h3 className="text-xl text-left font-semibold">
										Alice Johnson
									</h3>
									<p className="text-sm text-left text-muted-foreground">
										Editor-in-Chief
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12">
				<div className="container grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-24">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							What Subscribers Say
						</h2>
						<div className="space-y-4">
							<blockquote className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
								I look forward to the newsletter every week. It always has
								interesting articles and the editor&apos;s picks are spot on.
							</blockquote>
							<blockquote className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
								The newsletter has become an invaluable resource for me. I often
								find gems that I wouldn&apos;t have come across otherwise.
							</blockquote>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Card className="w-max">
							<CardHeader>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
									Subscribe to Our Newsletter
								</h2>
							</CardHeader>
							<CardContent>
								<form className="grid gap-4 md:gap-8">
									<div className="grid gap-1">
										<Label
											className="w-full max-w-xs font-semibold"
											htmlFor="name"
										>
											Your Name
										</Label>
										<Input id="name" placeholder="Enter your name" required />
									</div>
									<div className="gap-1 grid">
										<Label
											className="w-full max-w-xs font-semibold"
											htmlFor="email"
										>
											Email
										</Label>
										<Input
											id="email"
											placeholder="Enter your email"
											required
											type="email"
										/>
									</div>
									<Button className="w-full md:w-auto" type="submit">
										Subscribe
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
								Newsletter Archives
							</h2>
							<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
								Browse our past editions to catch up on the latest news,
								insights, and stories.
							</p>
						</div>
						<div className="grid gap-4 md:grid-cols-2 xl:gap-8">
							<div className="flex items-center space-x-2">
								<CalendarIcon className="w-6 h-6" />
								<Link className="font-medium" href="#">
									Issue #25 - Best of the Web
								</Link>
							</div>
							<div className="flex items-center space-x-2">
								<CalendarIcon className="w-6 h-6" />
								<Link className="font-medium" href="#">
									Issue #24 - Innovation Special
								</Link>
							</div>
							<div className="flex items-center space-x-2">
								<CalendarIcon className="w-6 h-6" />
								<Link className="font-medium" href="#">
									Issue #23 - Future Trends
								</Link>
							</div>
							<div className="flex items-center space-x-2">
								<CalendarIcon className="w-6 h-6" />
								<Link className="font-medium" href="#">
									Issue #22 - Productivity Hacks
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
								Contact Us
							</h2>
							<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
								Have questions or feedback? Reach out to our team.
							</p>
						</div>
						<form className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 lg:gap-8">
							<Input
								className="max-w-sm"
								placeholder="Enter your email"
								type="email"
							/>
							<Button className="w-full md:w-auto" type="submit">
								Contact Us
							</Button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

function CalendarIcon(props: any) {
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
			<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
			<line x1="16" x2="16" y1="2" y2="6" />
			<line x1="8" x2="8" y1="2" y2="6" />
			<line x1="3" x2="21" y1="10" y2="10" />
		</svg>
	);
}
