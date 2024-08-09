import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { NavbarProps } from "./Navbar.types"
import Link from "next/link";
export function Navbar(props: NavbarProps) {
    const { openMobileMenu } = props;
    return (
        <div className={`${openMobileMenu ? 'absolute z[1] left-0 top-20 bg-white r-0 w-full px-4 py-4' : 'hidden'} gap-5 md:flex`}>
           {dataHeader.map(({id, name, link}) => (
            <Link key={id} href={link} className="block hover:text-orange-500 hover:border-b-[1px]">{name}</Link>
           ))}
        </div>
    )
}
