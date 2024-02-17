"use client";
import { useOptimistic, useEffect } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import toggleTheme from "./actions";
import { Switch } from "../ui/switch";

type Props = {
	theme: "dark" | "light";
};

export default function ThemeButton(props: Props) {
	const [theme, setTheme] = useOptimistic(props.theme);

	function toggle() {
		try {
			const newTheme = theme === "dark" ? "light" : "dark";
			setTheme(newTheme);
			toggleTheme(newTheme);
		} catch (error: any) {
			alert(error.message);
		}
	}

	useEffect(() => {
		document.querySelector("html")?.classList.toggle("dark", theme === "dark");
	}, [theme]);

	return (
		<form action={toggle} className="lg:mr-4">
			<p className="gap-1 p-1 lg:p-1.5 border rounded-md inline-flex items-center">
				<Sun />
				<Switch type="submit" defaultChecked={theme === "light"} />
			</p>
		</form>
	);
}
