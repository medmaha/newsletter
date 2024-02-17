"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

export default function NavLink({ href, children }: any) {
	const segment = useSelectedLayoutSegment();

	console.log(segment, href);

	let route = "/" + (segment || "");
	return (
		<Link href={href} scroll={false}>
			<Button
				className={`${
					route === href ? "text-primary border  hover:text-primary/90" : ""
				}`}
				variant={route === href ? "secondary" : "ghost"}
			>
				{children}
			</Button>
		</Link>
	);
}
