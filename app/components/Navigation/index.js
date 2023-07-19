'use client'

import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Header from '../Header'

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center bg-slate-50 rounded-lg p-6">
            <Header />
            <DesktopNavigation />
            <MobileNavigation />
        </nav>
    )
}