// Importing necessary modules and data
import Link from "next/link";  // Next.js's Link component used for client-side navigation
import React from "react";     // React library for building the component

const menu = [
    {
        id: 1,
        slug: "pastas",
        title: "Italian Pastas",
        desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
        img: "/temporary/m1.png",
        color: "white",
    },
    {
        id: 2,
        slug: "burgers",
        title: "Juicy Burgers",
        desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
        img: "/temporary/m2.png",
        color: "black",
    },
    {
        id: 3,
        slug: "pizzas",
        title: "Cheesy Pizzas",
        desc: "Pizza Paradise: A celebration of cheesy, gooey, and flavorful masterpieces.",
        img: "/temporary/m3.png",
        color: "red",
    },
]

/**
 * MenuPage Component
 *
 * This component displays a set of menu categories in a responsive layout.
 * Each category is a clickable box that navigates to its respective page.
 *
 * Layout Behavior:
 * - Vertical stacking on mobile
 * - Horizontal layout on medium and larger screens
 *
 * Each menu item displays:
 * - A background image
 * - Title
 * - Description
 * - "Explore" button (visible only on extra-large screens)
 *
 * Data Source:
 * - The `menu` array imported from "@/data"
 *
 * Route Structure:
 * - Clicking a menu item navigates to `/menu/{slug}`
 *
 * @returns JSX.Element representing the menu page
 */
const MenuPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
            {menu.map((category) => (
                <Link
                    href={`/menu/${category.slug}`}     // Navigates to the detailed page of the category
                    key={category.id}                   // Unique key for React rendering
                    className="w-full h-1/3 bg-cover p-8 md:h-1/2"
                    style={{ backgroundImage: `url(${category.img})` }} // Sets the background image dynamically
                >
                    {/* Text box with dynamic color and width */}
                    <div className={`text-${category.color} w-1/2`}>
                        {/* Category title */}
                        <h1 className="uppercase font-bold text-3xl">{category.title}</h1>

                        {/* Category description */}
                        <p className="text-sm my-8">{category.desc}</p>

                        {/* Explore button (only visible on 2XL screens) */}
                        <button
                            className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}
                        >
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPage;
