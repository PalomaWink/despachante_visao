'use client'
//Elementos HTML
import Link from "next/link"

//Redes Sociais
import Whatsapp from "./botoes/Whatsapp"
import Instagram from "./botoes/Instagram"

function Footer() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-center items-center bg-cinza-claro p-4 shadow-xl top-shadow"> 
      <Link href="/" className="text-2xl sm:text-xl mx-2">
        <Instagram />
      </Link>
      <Link href='https://wa.me/5551996739085' target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-xl mx-2">
        <Whatsapp />
      </Link>
    </nav>
  )
}

export default Footer