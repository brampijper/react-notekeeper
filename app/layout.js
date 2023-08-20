import './globals.css'
import { Inter } from 'next/font/google'
import Header from './_components/Header'
import AuthProvider from './_context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notes',
  description: 'A minimalistic note keeper app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <div className="min-h-screen grid">
              <AuthProvider>
                <Header />
                <main>
                    {children}
                </main>
              </AuthProvider>
            </div>
        </body>
      </html>
  )
}
