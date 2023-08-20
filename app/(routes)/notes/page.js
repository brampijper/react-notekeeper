import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import prisma from "../../_lib/prisma"

export default async function Notes() {
  const session = await getServerSession(options)

  if (session) {
    const { id } = session

    const getUser = await prisma.user.findUnique({
      where: {
        id // shorthand
      }
    })
    
    return (
      <div className="flex flex-col gap-12 text-center">
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </div>
    )
  }

  return <p>Access Denied</p>
}