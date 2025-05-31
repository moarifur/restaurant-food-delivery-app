"use client"; // This line tells Next.js that this component will run on the client side.

import React, { useState } from "react"; // Import React and useState hook to manage component state.
import Image from "next/image"; // Image component from Next.js for optimized images.
import Link from "next/link";
import CartIcon from "@/components/CartIcon"; // Link component for client-side routing in Next.js.

// ✅ A list of navigation links to render in the menu.
const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

// ✅ Main Menu component
const Menu = () => {
    const [open, setOpen] = useState(false); // State to track if the menu is open or closed.

    const user = false; // TEMPORARY: A placeholder for user authentication status.

    return (
        <div>
            {/* 🔁 Toggle Button for opening/closing the menu
          - This replaces the longer if/else version.
          - When clicked, it toggles the `open` state.
          - Shows either "open.png" or "close.png" depending on current state. */}
            <Image
                src={open ? "/close.png" : "/open.png"}
                alt=""
                width={20}
                height={20}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            />

            {/* 🔽 This block only renders when `open` is true (menu is opened). */}
            {open && (
                <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                    {/* ✅ Render each link dynamically from the `links` array */}
                    {links.map((item) => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                    ))}

                    {/* 🔄 Conditional Login/Orders Link
              - Shows "Login" if `user` is false.
              - Shows "Orders" if `user` is true.
              - Click also closes the menu by setting `open` to false. */}
                    <Link
                        href={user ? "/orders" : "login"}
                        onClick={() => setOpen(false)}
                    >
                        {user ? "Orders" : "Login"}
                    </Link>

                    {/* 🛒 Link to Cart page with a CartIcon component inside. */}
                    <Link href="/cart" onClick={() => setOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
