import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Categories() {
	return (
		<div className="flex flex-wrap gap-2 w-full justify-center">
			<Link href={"/?c=all"}>
				<Button
					size={"sm"}
					variant={"secondary"}
					className="gap-1 rounded-3xl border text-primary"
				>
					<span>All</span>
					<small>64</small>
				</Button>
			</Link>
			{data.map((item) => (
				<Link href={`/?c=${item.label.toLowerCase()}`} key={item.label}>
					<Button
						key={item.label}
						size={"sm"}
						variant={"outline"}
						className="gap-1 rounded-3xl hover:text-primary"
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
