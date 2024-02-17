"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	PopoverTrigger,
	PopoverContent,
	Popover,
} from "@/components/ui/popover";
import {
	CardDescription,
	CardTitle,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table";
import Image from "next/image";

export function Dashboard() {
	return (
		<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
			<div className="flex flex-col">
				<header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
					<Button className="lg:hidden" variant="ghost">
						<Package2Icon className="w-6 h-6" />
						<span className="sr-only">Home</span>
					</Button>
					<h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
					<form className="hidden md:flex md:ml-auto md:w-1/3 lg:w-1/4">
						<div className="relative">
							<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
							<Input className="pl-8" placeholder="Search" type="search" />
						</div>
					</form>
					<div className="ml-auto flex items-center gap-2">
						<Button size="icon" variant="outline">
							<ArrowLeftIcon className="h-4 w-4" />
							<span className="sr-only">Back</span>
						</Button>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
									id="notifications"
									size="icon"
									variant="ghost"
								>
									<BellIcon className="h-4 w-4" />
									<span className="sr-only">Toggle notifications</span>
								</Button>
							</PopoverTrigger>
							<PopoverContent align="end">
								<div>
									<div>You have 2 unread messages</div>
									<div>Settings</div>
									<div>Support</div>
									<div />
									<div>Logout</div>
								</div>
							</PopoverContent>
						</Popover>
						<Button className="rounded-full" size="icon" variant="ghost">
							<img
								alt="Avatar"
								className="rounded-full"
								height="32"
								src="/placeholder.svg"
								style={{
									aspectRatio: "32/32",
									objectFit: "cover",
								}}
								width="32"
							/>
							<span className="sr-only">Toggle user menu</span>
						</Button>
					</div>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
					<div className="grid gap-4">
						<Card className="flex flex-col">
							<CardHeader>
								<CardDescription>Total Subscribers</CardDescription>
								<CardTitle>3,245</CardTitle>
							</CardHeader>
							<CardContent>
								<CurvedlineChart className="aspect-[2/1]" />
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardDescription>New Subscribers</CardDescription>
								<CardTitle>1,234</CardTitle>
							</CardHeader>
							<CardContent>
								<BarChart className="aspect-[2/1]" />
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardDescription>Unsubscribes</CardDescription>
								<CardTitle>567</CardTitle>
							</CardHeader>
							<CardContent>
								<CurvedlineChart className="aspect-[2/1]" />
							</CardContent>
						</Card>
					</div>
					<Card>
						<CardHeader>
							<CardDescription>Latest Campaign Statistics</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Campaign</TableHead>
										<TableHead>Open Rate</TableHead>
										<TableHead>Click-Through Rate</TableHead>
										<TableHead>Conversions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="font-semibold">Summer Sale</TableCell>
										<TableCell>25%</TableCell>
										<TableCell>10%</TableCell>
										<TableCell>100</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-semibold">
											Back to School
										</TableCell>
										<TableCell>30%</TableCell>
										<TableCell>15%</TableCell>
										<TableCell>200</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-semibold">
											Fall Fashion
										</TableCell>
										<TableCell>20%</TableCell>
										<TableCell>8%</TableCell>
										<TableCell>150</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-semibold">
											Holiday Cheer
										</TableCell>
										<TableCell>40%</TableCell>
										<TableCell>20%</TableCell>
										<TableCell>300</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardDescription>Top Performing Campaigns</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="flex items-center gap-4">
									<Image
										alt="Campaign thumbnail"
										className="rounded-lg"
										height="100"
										src="/placeholder.svg"
										style={{
											aspectRatio: "100/100",
											objectFit: "cover",
										}}
										width="100"
									/>
									<div className="grid gap-1">
										<h3 className="font-semibold text-sm">
											Summer Sale: Up to 50% Off
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Opens: 2,345 Clicks: 1,234
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<Image
										alt="Campaign thumbnail"
										className="rounded-lg"
										height="100"
										src="/placeholder.svg"
										style={{
											aspectRatio: "100/100",
											objectFit: "cover",
										}}
										width="100"
									/>
									<div className="grid gap-1">
										<h3 className="font-semibold text-sm">
											Back to School: Shop Now!
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Opens: 1,987 Clicks: 1,234
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<Image
										alt="Campaign thumbnail"
										className="rounded-lg"
										height="100"
										src="/placeholder.svg"
										style={{
											aspectRatio: "100/100",
											objectFit: "cover",
										}}
										width="100"
									/>
									<div className="grid gap-1">
										<h3 className="font-semibold text-sm">
											Fall Fashion: New Arrivals
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Opens: 1,234 Clicks: 987
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<Image
										alt="Campaign thumbnail"
										className="rounded-lg"
										height="100"
										src="/placeholder.svg"
										style={{
											aspectRatio: "100/100",
											objectFit: "cover",
										}}
										width="100"
									/>
									<div className="grid gap-1">
										<h3 className="font-semibold text-sm">
											Holiday Cheer: Season&apos Greetings
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Opens: 3,456 Clicks: 2,345
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</main>
			</div>
		</div>
	);
}

function Package2Icon(props: any) {
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
			<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
			<path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
			<path d="M12 3v6" />
		</svg>
	);
}

function BellIcon(props: any) {
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
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
		</svg>
	);
}

function UserIcon(props: any) {
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
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

function UsersIcon(props: any) {
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
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}

function SendIcon(props: any) {
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
			<path d="m22 2-7 20-4-9-9-4Z" />
			<path d="M22 2 11 13" />
		</svg>
	);
}

function LineChartIcon(props: any) {
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
			<path d="M3 3v18h18" />
			<path d="m19 9-5 5-4-4-3 3" />
		</svg>
	);
}

function SettingsIcon(props: any) {
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
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

function SearchIcon(props: any) {
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
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}

function ArrowLeftIcon(props: any) {
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
			<path d="m12 19-7-7 7-7" />
			<path d="M19 12H5" />
		</svg>
	);
}

function CurvedlineChart(props: any) {
	return (
		<div {...props}>
			<ResponsiveLine
				data={[
					{
						id: "Desktop",
						data: [
							{ x: "Jan", y: 43 },
							{ x: "Feb", y: 137 },
							{ x: "Mar", y: 61 },
							{ x: "Apr", y: 145 },
							{ x: "May", y: 26 },
							{ x: "Jun", y: 154 },
						],
					},
					{
						id: "Mobile",
						data: [
							{ x: "Jan", y: 60 },
							{ x: "Feb", y: 48 },
							{ x: "Mar", y: 177 },
							{ x: "Apr", y: 78 },
							{ x: "May", y: 96 },
							{ x: "Jun", y: 204 },
						],
					},
				]}
				margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
				xScale={{
					type: "point",
				}}
				yScale={{
					type: "linear",
					min: 0,
					max: "auto",
				}}
				curve="monotoneX"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 0,
					tickPadding: 16,
				}}
				axisLeft={{
					tickSize: 0,
					tickValues: 5,
					tickPadding: 16,
				}}
				colors={["#2563eb", "#e11d48"]}
				pointSize={6}
				useMesh={true}
				gridYValues={6}
				theme={{
					tooltip: {
						chip: {
							borderRadius: "9999px",
						},
						container: {
							fontSize: "12px",
							textTransform: "capitalize",
							borderRadius: "6px",
						},
					},
					grid: {
						line: {
							stroke: "#f3f4f6",
						},
					},
				}}
				role="application"
			/>
		</div>
	);
}

function BarChart(props: any) {
	return (
		<div {...props}>
			<ResponsiveBar
				data={[
					{ name: "Jan", count: 111 },
					{ name: "Feb", count: 157 },
					{ name: "Mar", count: 129 },
					{ name: "Apr", count: 150 },
					{ name: "May", count: 119 },
					{ name: "Jun", count: 72 },
				]}
				keys={["count"]}
				indexBy="name"
				margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
				padding={0.3}
				colors={["#2563eb"]}
				axisBottom={{
					tickSize: 0,
					tickPadding: 16,
				}}
				axisLeft={{
					tickSize: 0,
					tickValues: 4,
					tickPadding: 16,
				}}
				gridYValues={4}
				theme={{
					tooltip: {
						chip: {
							borderRadius: "9999px",
						},
						container: {
							fontSize: "12px",
							textTransform: "capitalize",
							borderRadius: "6px",
						},
					},
					grid: {
						line: {
							stroke: "#f3f4f6",
						},
					},
				}}
				tooltipLabel={({ id }) => `${id}`}
				enableLabel={false}
				role="application"
				ariaLabel="A bar chart showing data"
			/>
		</div>
	);
}
