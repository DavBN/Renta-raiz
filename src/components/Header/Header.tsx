"use client"

import { ImMenu } from "react-icons/im"
import { BsMenuUp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs"
import Link from "next/link"
import { Navbar } from "../Navbar"
import { useState } from "react"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/">
                    <h1>Bienes Raices OSC</h1>
                </Link>
                <BsMenuUp className="block text-2xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                <Navbar openMobileMenu={openMobileMenu} />

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel:3196168502" className="flex items-center gap-4 cursor-pointer">
                      <BsTelephone/>
                      <span className="hidden md:block">+57 319 616 8502</span>
                    </Link>
                    <Link href="/login" className="px-3 py-2 text-white rounded-lg bg-orange-500 hover:bg-black">Login</Link>
                </div>
            </div>
        </div>
    )
}
