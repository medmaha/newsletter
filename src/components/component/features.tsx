/**
 * v0 by Vercel.
 * @see https://v0.dev/t/318TI1NWrOM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Features() {
	return (
		<section className="w-full py-12">
			<div className="container space-y-12">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
						The Newsletter Platform
					</h1>
					<p className="max-w-[60ch] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
						Delivering the latest news, insights, and stories. Let your audience
						stay informed with beautiful, customizable newsletters.
					</p>
				</div>
				<div className="mx-auto grid pt-12 items-start gap-8 sm:grid-cols-2 md:gap-12  lg:grid-cols-3">
					<div className="grid gap-1">
						<h3 className="text-lg font-bold">Beautiful Newsletters</h3>
						<p className="text-sm  text-muted-foreground">
							Create stunning newsletters with an easy-to-use editor and
							customizable templates.
						</p>
					</div>
					<div className="grid gap-1">
						<h3 className="text-lg font-bold">Engage Your Audience</h3>
						<p className="text-sm  text-muted-foreground">
							Reach your subscribers with targeted content, polls, and
							interactive elements.
						</p>
					</div>
					<div className="grid gap-1">
						<h3 className="text-lg font-bold">Monetize Your Newsletter</h3>
						<p className="text-sm  text-muted-foreground">
							Turn your newsletter into a revenue stream with built-in
							subscription and payment tools.
						</p>
					</div>
					<div className="grid gap-1">
						<h3 className="text-lg font-bold">Engage Your Audience</h3>
						<p className="text-sm  text-muted-foreground">
							Reach your subscribers with targeted content, polls, and
							interactive elements.
						</p>
					</div>
					<div className="grid gap-1">
						<h3 className="text-lg font-bold">Monetize Your Newsletter</h3>
						<p className="text-sm  text-muted-foreground">
							Turn your newsletter into a revenue stream with built-in
							subscription and payment tools.
						</p>
					</div>
					<div className="grid gap-1">
						<h3 className="text-lg font-bold">Beautiful Newsletters</h3>
						<p className="text-sm  text-muted-foreground">
							Create stunning newsletters with an easy-to-use editor and
							customizable templates.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
					<Link
						className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 "
						href="#"
					>
						Contact Sales
					</Link>
					<Link
						className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 "
						href="#"
					>
						Tour the Platform
					</Link>
				</div>
			</div>
		</section>
	);
}
