"use client"

import { CiMenuFries } from "react-icons/ci"
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
                <CiMenuFries className="block text-2xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                <Navbar />
            </div>
        </div>
    )
}
