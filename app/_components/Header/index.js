import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/(routes)/api/auth/[...nextauth]/options";

import Avatar from "./Avatar";

export default async function Header() {
	const session = await getServerSession(options)

	let avatar

	if (session) {
		const { user } = session;
		avatar = <Avatar user={user} session={true} />
	} else {
		avatar = <Avatar />
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