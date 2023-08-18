import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import AuthProvider from './context/AuthProvider' // only nesessary for client components.
import { Providers } from './GlobalRedux/provider'

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
                <Providers>
                  {children}
                </Providers>
              </main>
            </AuthProvider>
          </div>
      </body>
    </html>
  )
}
