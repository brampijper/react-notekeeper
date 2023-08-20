'use client'

import React, { useContext } from 'react'
import { MenuContext } from './Menu'

export default function MenuButton({children}) {
    const { toggleOpen } = useContext(MenuContext)

    return (
        <button onClick={toggleOpen} 
            className="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
        >
            {children}
        </button>
    )
}