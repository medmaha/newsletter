import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import Footer from "@/components/component/footer";

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
	const theme = cookies().get("theme")?.value || ("dark" as "dark" | "light");
	return (
		<html lang="en" className={`${theme} transition-all`}>
			<body className={inter.className}>
				<Navbar theme={theme} />
				<main className="p-2 min-h-[calc(100svh-120px)]">
					<Suspense fallback={<Loading />}>
						{children}
						{/* <Loading /> */}
					</Suspense>
				</main>

				<Footer />
			</body>
		</html>
	);
}

function Loading() {
	return (
		<div className="w-full h-full flex items-center justify-center text-primary">
			{/* <Loader2
				strokeWidth={5}
				className="animate-spin duration-1000"
				width={64}
				height={64}
			/> */}
			<div className="animate-ping rounded-full bg-primary w-12 h-12 flex items-center justify-center">
				<div className="animate-bounce rounded-full bg-secondary w-8 h-8" />
			</div>
		</div>
	);
}
