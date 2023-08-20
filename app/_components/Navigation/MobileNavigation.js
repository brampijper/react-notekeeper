import React from 'react'
import Menu from '../Menu'
import Link from 'next/link'

export default function MobileNavigation() {
    return (
        <Menu styles={'sm:hidden'}>
            <Menu.Button />
            <Menu.DropDown>
                <Menu.Item>
                    <Link 
                        href="/" 
                        className="p-2 md:p-4 rounded-md flex gap-3 hover:bg-gray-200"
                    >
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link 
                        href="/login" 
                        className="p-2 md:p-4 rounded-md flex gap-3 hover:bg-gray-200"
                    >
                        login
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link 
                        href="/logout" 
                        className="p-2 md:p-4 rounded-md flex gap-3 hover:bg-gray-200"
                    >
                        logout
                    </Link>
                </Menu.Item>
            
            </Menu.DropDown>
        </Menu>
    )
}