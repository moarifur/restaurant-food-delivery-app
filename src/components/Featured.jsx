// Importing necessary modules and components
import Image from "next/image"; // Next.js Image component for optimized images
import React from "react";

/**
 * Featured Component
 *
 * This component displays a horizontally scrollable list of featured products.
 * Each product includes an image, title, description, price, and an "Add to Cart" button.
 */

const featuredProducts = [
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 2,
        title: "Bacon Deluxe",
        desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
        img: "/temporary/p2.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 4,
        title: "Spicy Arrabbiata",
        desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
        img: "/temporary/p4.png",
        price: 26.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 5,
        title: "Jalapeño Fiesta",
        desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
        img: "/temporary/p5.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 6,
        title: "Margherita Magic",
        desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
        img: "/temporary/p6.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 7,
        title: "Garlic Parmesan Linguine",
        desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
        img: "/temporary/p7.png",
        price: 28.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 8,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
        img: "/temporary/p8.png",
        price: 32.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 9,
        title: "Hawaiian Teriyaki",
        desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
        img: "/temporary/p9.png",
        price: 29.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
]

const Featured = () => {
    return (
        // Outer container with horizontal scroll enabled and red text
        <div className="w-screen overflow-x-scroll text-red-500">

            {/* Inner wrapper that allows child items to be laid out horizontally */}
            <div className="w-max flex">

                {/* Looping through each product in the featuredProducts array */}
                {featuredProducts.map((item) => (

                    // Individual product container
                    <div
                        key={item.id} // Unique key for each product item (important for React rendering)
                        className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
                    >

                        {/* Conditional rendering of the image if it exists */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                {/*
                  Next.js Image component:
                  - src: image path
                  - alt: alternative text (left blank here)
                  - fill: fills the parent container
                  - className: makes image fit within container while preserving aspect ratio
                */}
                                <Image src={item.img} alt="" fill className="object-contain" />
                            </div>
                        )}

                        {/* Text section of the product */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                            {/* Product title styled with various text sizes */}
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                                {item.title}
                            </h1>

                            {/* Product description with padding that adapts on larger screens */}
                            <p className="p-4 2xl:p-8">{item.desc}</p>

                            {/* Product price in bold */}
                            <span className="text-xl font-bold">${item.price}</span>

                            {/* "Add to Cart" button with red background and white text */}
                            <button className="bg-red-500 text-white p-2 rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Exporting the Featured component to be used in other parts of the app
export default Featured;
