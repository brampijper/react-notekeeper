import Link from "next/link";

export default function Header() {
	return (
		<header className="flex items-center">
			<Link href="/">
				<img className="h-12 w-12" src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" />
			</Link>
			<h2 className="text-[#5f6368] text-xl font-bold pt-1 pl-1">
				NoteKeeper
			</h2>
		</header>
	)
}