import { signIn, signOut } from "@/auth"
import { redirect } from "next/navigation"
import { Button } from "./button"

export function SignIn({ provider }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        const url = await signIn(provider, { redirect: false })
        // TODO: fix in next-auth
        // redirect(url.replace("signin", "api/auth/signin"))
        redirect("api/auth/signin");
      }}
    >
      <Button>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
