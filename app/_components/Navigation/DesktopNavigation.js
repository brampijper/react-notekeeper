import React from 'react'
import Link from 'next/link'
import { useSession, getSession } from 'next-auth/react'

export default function DesktopNavigation() {
    const { data: session, status} = useSession()

    let content

    if (status === 'loading') {
        content = <p> loading ... </p>
    }

    if (status === 'unauthenticated') {
        content = <p>Access denied</p>
    }

    if (session) {
        console.log(session)
    }

    return (
        <div className="hidden sm:flex">
            { 
                session 
                ?   <Link href="/api/auth/signout" className="p-2 md:p-4 rounded-md hover:bg-gray-200"> Logout </Link>
                :   <Link href="/api/auth/signin" className="p-2 md:p-4 rounded-md hover:bg-gray-200"> Login </Link>
            }
        </div>
    )
}