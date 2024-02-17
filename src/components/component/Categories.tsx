"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Categories() {
	const searchParams = useSearchParams();

	function getActiveClass(link: string | null) {
		if (link === searchParams.get("c")) {
			return "text-primary border";
		}
	}

	return (
		<div className="flex flex-wrap gap-2 w-full justify-center sticky z-50 mb-16 top-[60px] py-2 bg-card">
			<Link href={"/?c=all"} scroll={false}>
				<Button
					size={"sm"}
					variant={
						(searchParams.get("c") || "all") === "all" ? "secondary" : "outline"
					}
					className={cn(
						"gap-1 rounded-3xl",
						getActiveClass(searchParams.get("c") ? "all" : null)
					)}
				>
					<span>All</span>
					<small>64</small>
				</Button>
			</Link>
			{data.map((item) => (
				<Link
					href={`/?c=${item.label.toLowerCase()}`}
					key={item.label}
					scroll={false}
				>
					<Button
						key={item.label}
						size={"sm"}
						variant={
							searchParams.get("c") === item.label.toLowerCase()
								? "secondary"
								: "outline"
						}
						className={cn(
							"gap-1 rounded-3xl",
							getActiveClass(item.label.toLowerCase())
						)}
					>
						<span>{item.label}</span>
						<small>{item.value}</small>
					</Button>
				</Link>
			))}
		</div>
	);
}

const data = [
	{ label: "Articles", value: 12 },
	{ label: "Books", value: 7 },
	{ label: "Tools", value: 5 },
	{ label: "Tutorials", value: 3 },
	{ label: "Tweet", value: 27 },
	{ label: "Podcast", value: 13 },
	{ label: "Communities", value: 10 },
];
