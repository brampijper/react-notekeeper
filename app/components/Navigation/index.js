'use client'

import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center bg-slate-50 rounded-lg p-6">
            <DesktopNavigation />
            <MobileNavigation />
        </nav>
    )
}