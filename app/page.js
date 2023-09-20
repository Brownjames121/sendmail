import { SendmailForm } from "@/components/sendmailform";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            {/* <Icons.paperClip className="mx-auto h-6 w-6" /> */}
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              LOrem ipsum sit amit dolor
            </p>
          </div>
          <SendmailForm />
        </div>
      </div>
    </div>
  );
}
