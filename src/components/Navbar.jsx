import React from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "@/components/Menu";
import CartIcon from "@/components/CartIcon";

// The Navbar component renders the top navigation bar of the website.
const Navbar = () => {
    // `user` is a placeholder for authentication logic. Currently set to false (not logged in).
    const user = false;

    return (
        <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
            {/* LEFT LINKS - These links appear only on medium and larger screens */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>
            </div>

            {/* LOGO - This is the center part of the navbar showing the brand name */}
            <div className="text-xl md:font-bold flex-1 md:text-center">
                <Link href="/">Massimo</Link>
            </div>

            {/* MOBILE MENU - Visible only on smaller screens */}
            <div className="md:hidden">
                <Menu />
            </div>

            {/* RIGHT LINKS - These links and icons appear only on medium and larger screens */}
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                {/* Phone section with icon and number */}
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    {/* Next.js optimized Image component */}
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>123 456 78</span>
                </div>

                {/* Login or Orders link depending on user login status */}
                {!user ? ( <Link href="/login">Login</Link> ) : ( <Link href="/order">Orders</Link> )}

                 {/*Shopping Cart Icon */}
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
