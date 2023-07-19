import React from 'react'
import Link from 'next/link'

export default function DesktopNavigation() {
    return (
        <div className="hidden sm:flex">
            <Link 
                href="/login" 
                className="p-2 md:p-4 rounded-md hover:bg-gray-200"
            >
                Login
            </Link>
        </div>
    )
}