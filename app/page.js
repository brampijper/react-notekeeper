import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="text-center text-4xl font-bold">
        Bram's Notekeeper.
      </h1>

      <Image
        src="/notes_bw.jpg"
        width={148}
        height={148}
        alt="Picture of a note"
      />

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Link href="/api/auth/signin" className="font-semibold p-2 rounded-full w-auto text-xs min-w-[100px] text-center text-gray-50 bg-gray-800 hover:bg-gray-700"> 
          Login 
        </Link>
        <Link href="/api/notes/bram" className="font-semibold p-2 rounded-full w-auto text-xs min-w-[128px] text-center text-gray-50 bg-gray-800 hover:bg-gray-700"> 
          View bram's notes 
        </Link>
      </div>

      <p className="text-2xl font-semibold max-w-[300px] text-center leading-9">
        The best place for all your thoughts, idea's, projects and more.
      </p>
    </div>
  )
}
