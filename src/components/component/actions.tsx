"use server";

import { cookies } from "next/headers";

export default async function toggleTheme(newTheme: "dark" | "light") {
	cookies().set("theme", newTheme, { httpOnly: true, sameSite: "strict" });
}
