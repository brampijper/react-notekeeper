'use client'

import React, { createContext } from 'react';
import useToggle from '../../_hooks/useToggle';

const MenuContext = createContext()
export { MenuContext }

export default function Menu({children, onOpen, styles = ''}) {
    const [ open, toggleOpen ] = useToggle()

    return (
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div className={`relative shadow-2xl ${styles}`}>
                {children}
            </div>
        </MenuContext.Provider>
    )
}