"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

// import styles from "./styles.module.css";

export default function Collections() {
	const [loaded, toggleLoaded] = useState(false);
	useEffect(() => {
		toggleLoaded(true);
		const preventDefault = (e: Event) => e.preventDefault();
		document.addEventListener("gesturestart", preventDefault);
		document.addEventListener("gesturechange", preventDefault);

		return () => {
			document.removeEventListener("gesturestart", preventDefault);
			document.removeEventListener("gesturechange", preventDefault);
		};
	}, []);

	return (
		<div
			className={
				"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 f-full items-center container mx-auto pb-16"
			}
		>
			{loaded &&
				data.map((item) => <CollectionCard key={item.title} {...item} />)}
			{loaded &&
				data.map((item) => <CollectionCard key={item.title} {...item} />)}
			{!loaded &&
				data.map((item) => (
					<div
						className="bg-accent border-2 shadow w-full min-h-[250px]"
						key={item.title}
						{...item}
					/>
				))}
		</div>
	);
}

export function CollectionCard(props: any) {
	const [loaded, toggleLoaded] = useState(false);
	useEffect(() => {
		toggleLoaded(true);
	}, []);

	if (!loaded) {
		return <div className="w-full bg-accent border shadow" {...props} />;
	}
	return <_Card {...props} />;
}
function _Card(props: any) {
	const domTarget = useRef(null);
	const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
		() => ({
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			zoom: 0,
			x: 0,
			y: 0,
			config: { mass: 5, tension: 350, friction: 30 },
		})
	);

	const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

	const calcX = (y: number, ly: number) =>
		-(y - ly - window.innerHeight / 2) / 20;
	const calcY = (x: number, lx: number) =>
		(x - lx - window.innerWidth / 2) / 20;

	const wheel = (y: number) => {
		const imgHeight = window.innerWidth * 0.3 - 20;
		return `translateY(${
			-imgHeight * (y < 0 ? 4 : 1) - (y % (imgHeight * 4))
		}px`;
	};

	useGesture(
		{
			// onDrag: ({ active, offset: [x, y] }: any) =>
			// 	api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
			onPinch: ({ offset: [d, a] }: any) => api({ zoom: d / 300, rotateZ: a }),
			onMove: ({ xy: [px, py], dragging }: any) =>
				!dragging &&
				api({
					rotateX: calcX(py, y.get()),
					rotateY: calcY(px, x.get()),
					scale: 1.05,
				}),
			onHover: ({ hovering }: any) =>
				!hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
			onWheel: ({ event, offset: [, y] }: any) => {
				event.preventDefault();
				wheelApi.set({ wheelY: y });
			},
		},
		{ domTarget, eventOptions: { passive: false } }
	);
	return (
		<Card className={`${props.className} shadow-none border-none`}>
			<animated.div
				ref={domTarget}
				className={"collection-card group"}
				style={{
					transform: "perspective(600px)",
					x,
					y,
					scale: to([scale, zoom], (s, z) => s + z),
					rotateX,
					rotateY,
					rotateZ,
				}}
			>
				<animated.div
					className={"peer"}
					style={{ transform: wheelY.to(wheel) }}
				/>
				{props.title ? (
					<>
						<Link href={"/"} className="float-right m-2 mb-0">
							<Button
								size={"icon"}
								variant={"secondary"}
								className="opacity-0  group-hover:border group-hover:opacity-100 transition"
							>
								<ArrowUpRightFromSquare className="w-4 h-4" />
							</Button>
						</Link>
						<CardContent className="min-w-full min-h-[250px] z-30 p-4 flex flex-col rounded-lg relative">
							<div className="flex items-center min-h-[250px] flex-1">
								<Image
									width={250}
									height={250}
									src={props.img}
									alt={props.title}
									className="mx-auto rounded-md shadow-lg border-4 border-accent/50"
								/>
							</div>

							<>
								<h3 className="font-semibold pt-2">{props.title}</h3>
								<p
									title={props.description}
									className="text-sm text-muted-foreground line-clamp-1"
								>
									{props.description}
								</p>
								<div className="flex flex-wrap gap-2 pt-4">
									{props.categories.map((cat: any) => {
										return (
											<p
												key={cat}
												className="px-1 rounded-3xl border transition hover:bg-accent"
											>
												<small>{cat}</small>
											</p>
										);
									})}
								</div>
							</>
						</CardContent>
					</>
				) : (
					<>{props.children}</>
				)}
			</animated.div>
		</Card>
	);
}

const data = [
	{
		img: "/placeholder.svg",
		title: "Trust The Process",
		description:
			"Get the latest industry news and insights from the Trusted Developer.",
		categories: ["Process", "Branding"],
	},
	{
		img: "/nl-hero2.jpg",
		title: "The Rich Webstar Show",
		description:
			"Get the latest industry news and insights from the Trusted Developer.",
		categories: ["News", "Productivity", "Entrepreneurship"],
	},
	{
		img: "/placeholder.svg",
		title: "Freelancer Rate Report",
		description:
			"Get the latest industry news and insights from the Trusted Developer.",
		categories: ["Report", "Pricing", "Freelance"],
	},
];
