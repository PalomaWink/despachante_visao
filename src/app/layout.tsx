import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Despachante Visão',
  description: 'Criado por Paloma Wink',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} bg-cinza-claro flex flex-col min-h-screen`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
