/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sgaQJz3eWjZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<section className="flex flex-col h-screen py-16 container mx-auto">
			<div className="text-center pb-6">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
					Our Sponsors
				</h1>
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
				{new Array(6).fill(0).map((_, i) => (
					<Card key={i}>
						<CardHeader>
							<CardTitle>Sponsor {i + 1}</CardTitle>
							<CardDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
								earum esse explicabo?
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-2 items-center">
								<Link href="#" className="w-full h-full inline-block">
									<Image
										alt="Logo"
										className="border overflow-hidden rounded-lg object-contain object-center"
										height="60"
										src="/placeholder.svg"
										width="120"
									/>
								</Link>
								<Button size={"sm"} className="gap-1.5 w-max" variant={"ghost"}>
									<span>Website</span>
									<ArrowUpRightFromSquare className="w-4 h-4" />
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
