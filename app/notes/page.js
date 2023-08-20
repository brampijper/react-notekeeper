import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Notes() {
  const session = await getServerSession(options)

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    )
  }
  return <p>Access Denied</p>
}