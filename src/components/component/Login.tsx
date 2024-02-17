import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="link" className="text-lg">
					Login
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[450px]">
				<DialogHeader>
					<DialogTitle>Login</DialogTitle>
					<DialogDescription>
						Enter your email and password to login
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
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
					<div className="grid gap-2">
						<Label htmlFor="password" className="text-lg">
							Password
						</Label>
						<Input id="password" name="password" className="col-span-3" />
					</div>
				</div>
				<Button type="submit" className="w-full text-lg">
					Submit
				</Button>
			</DialogContent>
		</Dialog>
	);
}
