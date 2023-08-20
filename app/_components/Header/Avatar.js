import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"

export default function Avatar({user, session}) {
  const { name, email, image } = user

  let menuItems;

  if (session) {
    menuItems = (
      <>
        <Menu.Item>
        <Link 
            href="/" 
            className="text-sm w-full text-left hover:bg-gray-100 rounded-md px-2 py-1"
        >
            home
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link 
                href="/notes" 
                className="text-sm w-full text-left text-sky-600 hover:bg-gray-100 rounded-md px-2 py-1"
            >
                edit notes
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link 
                href="/api/auth/signout" 
                className="text-sm w-full text-left text-red-600 hover:bg-gray-100 rounded-md px-2 py-1"
            >
                logout
            </Link>
        </Menu.Item>
      </>
    )
  } else {
    menuItems = (
      <Menu.Item>
      <Link href="/api/auth/signin" className="text-sm w-full text-left text-sky-600 hover:bg-gray-100 rounded-md px-2 py-1"> 
        Login 
      </Link>
      </Menu.Item>
    )
  }

  return (
    <Menu styles={'ml-auto'}>
      <Menu.Button>
        <Image 
          className="w-8 h-8 rounded-full bg-gray-300" 
          src={image} 
          alt="Picture of an avatar" 
          width={32} 
          height={32}
        />
      </Menu.Button>
      <Menu.DropDown>
        <Menu.Item styles={'bg-gray-100'}>
          <section className="flex flex-col">
            <h3 className="font-bold">{name}</h3>
            <h3 className="text-gray-700 text-xs">{email}</h3>
          </section>
        </Menu.Item>
        {menuItems}
      </Menu.DropDown>
    </Menu>
  )
}

Avatar.defaultProps = {
  user: {
    name: `You're not logged in!`,
    email: `Anon`,
    image: '/next.svg'
  },
  session: false
}