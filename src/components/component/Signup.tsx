import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UserPlusIcon } from "lucide-react";

export function Signup() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className="gap-1">
					<UserPlusIcon className="h-4 w-4" />
					<span>Join</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle className="text-xl font-bold">Subscribe</DrawerTitle>
						<DrawerDescription>Subscribe to our newsletter</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 pb-0">
						<div className="mt-3">
							<div className="grid gap-1">
								<Label htmlFor="email" className="text-lg">
									Email
								</Label>
								<Input
									title="email"
									name="email"
									id="email"
									className="col-span-3"
								/>
							</div>
							<div className="grid gap-1 border-b pb-4">
								<Label htmlFor="name" className="text-lg">
									Full Name
								</Label>
								<Input name="name" id="name" className="col-span-3" />
							</div>
							<p className="text-muted-foreground text-sm pt-2">
								To create an account while subscribing please enter a password
							</p>

							<div className="grid gap-2 mt-4">
								<Label htmlFor="password" className="text-lg">
									Password
								</Label>
								<Input id="password" name="password" className="col-span-3" />
							</div>
							<p className="text-muted-foreground">
								<small>
									By signing up you agree to our{" "}
									<a className="underline" href="#">
										Terms and Conditions
									</a>
								</small>
							</p>
						</div>
					</div>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
