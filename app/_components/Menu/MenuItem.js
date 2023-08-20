import React from "react"

export default function MenuItem({ children, styles }) {
    return (
        <div className={`text-gray-900 p-2 min-w-[100px] text-sm flex select-none ${styles}`}>
            {children}
        </div>
    )
}