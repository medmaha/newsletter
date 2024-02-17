import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NewsLetter",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="p-2 bg-slate-50 text-accent-foreground">
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
			</body>
		</html>
	);
}

function Loading() {
	return (
		<div className="w-full h-[calc(100svh-78px)] flex items-center justify-center text-primary">
			<Loader2
				strokeWidth={5}
				className="animate-spin duration-1000 delay-75"
				width={64}
				height={64}
			/>
		</div>
	);
}
