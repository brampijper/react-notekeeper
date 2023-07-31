'use client'

import Link from "next/link";
import Image from "next/image";
import { useSession, getSession } from 'next-auth/react'
import Avatar from "./Avatar";

// if user is logged in show avatar bubble with menu options.

export default function Header() {
	const { data: session, status} = useSession()

	let avatar

	if (session) {
		const { user } = session;
		avatar = <Avatar user={user} />
	}

	return (
		<header className="flex items-center h-11 px-2 bg-gray-50">
			<Link href="/" className="flex gap-2 items-center">
				<Image
					src="/notes_bw.jpg"
					width={28}
					height={28}
					alt="Picture of a note"
				/>
				<p className="bold text-xs">Notes</p>
			</Link>
			{/* <h2 className="text-[#5f6368] text-xl font-bold pt-1 pl-1">
				NoteKeeper
			</h2> */}
			{avatar}
		</header>
	)
}