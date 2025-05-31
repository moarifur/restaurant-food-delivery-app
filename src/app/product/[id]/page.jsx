/**
 * SingleProductPage.jsx
 *
 * This component displays a single product's details including:
 * - Product image
 * - Product title and description
 * - Product pricing options
 *
 * Used Components:
 * - Price: A custom component that likely shows pricing logic and UI
 * - Image: Next.js Image component for optimized image rendering
 */

import Price from "@/components/Price";
import Image from "next/image";
import React from "react";

// Mock product data (usually fetched from an API in real-world apps)
const singleProduct = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination...",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 4 },
        { title: "Large", additionalPrice: 6 },
    ],
};

/**
 * SingleProductPage Component
 *
 * Main functional component that renders the layout for a single product page.
 *
 * Layout Notes:
 * - Responsive design using Tailwind CSS classes
 * - Two main sections: image container and text container
 */
const SingleProductPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">

            {/* IMAGE CONTAINER */}
            {/* Conditionally render the image only if it exists in the product data */}
            {singleProduct.img && (
                <div className="relative w-full h-1/2 md:h-[70%]">
                    {/* Next.js optimized image component */}
                    <Image
                        src={singleProduct.img}
                        alt=""
                        className="object-contain"
                        fill
                    />
                </div>
            )}

            {/* TEXT CONTAINER */}
            {/* Displays product title, description, and pricing options */}
            <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
                {/* Product Title */}
                <h1 className="text-3xl font-bold uppercase xl:text-5xl">
                    {singleProduct.title}
                </h1>

                {/* Product Description */}
                <p>{singleProduct.desc}</p>

                {/* Price Component with pricing and option props */}
                <Price
                    price={singleProduct.price}
                    id={singleProduct.id}
                    options={singleProduct.options}
                />
            </div>
        </div>
    );
};

export default SingleProductPage;
