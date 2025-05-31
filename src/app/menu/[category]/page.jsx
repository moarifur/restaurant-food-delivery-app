import Image from "next/image"; // Next.js image component for optimized image loading
import Link from "next/link";   // Next.js component to handle client-side navigation
import React from "react";      // React library

// A hardcoded array of pizza products.
// Each object in the array represents a different pizza with its unique properties.
const pizzas = [
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination...",
        img: "/temporary/p1.png",  // Path to the image file
        price: 24.9,               // Base price of the pizza
        options: [                 // Size options with additional prices
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 2,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation...",
        img: "/temporary/p8.png",
        price: 32.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust...",
        img: "/temporary/p3.png",
        price: 26.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 4,
        title: "Pesto Primavera",
        desc: "A classic Italian delight featuring a thin, crispy crust...",
        img: "/temporary/p10.png",
        price: 28.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 5,
        title: "Veggie Supreme",
        desc: "A classic Italian delight featuring a thin, crispy crust...",
        img: "/temporary/p11.png",
        price: 24.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
    {
        id: 6,
        title: "Four Cheese Fantasy",
        desc: "Experience pure cheesy bliss with a melty blend of mozzarella...",
        img: "/temporary/p12.png",
        price: 22.9,
        options: [
            { title: "Small", additionalPrice: 0 },
            { title: "Medium", additionalPrice: 4 },
            { title: "Large", additionalPrice: 6 },
        ],
    },
];

// React functional component representing a category page (e.g., a list of pizzas).
const CategoryPage = () => {
    return (
        <div className="flex flex-wrap text-red-500">
            {/* Loop through the pizzas array and render each pizza as a clickable card */}
            {pizzas.map((item) => (
                <Link
                    className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
                    href={`/product/${item.id}`} // Link to individual product page using dynamic routing
                    key={item.id}               // Unique key for each list item
                >
                    {/* IMAGE CONTAINER: Render image only if it exists */}
                    {item.img && (
                        <div className="relative h-[80%]">
                            <Image
                                src={item.img}       // Path to pizza image
                                alt=""               // Empty alt tag (should be descriptive ideally)
                                fill                 // Makes the image fill the parent container
                                className="object-contain" // Maintains aspect ratio while fitting container
                            />
                        </div>
                    )}

                    {/* TEXT CONTAINER: Contains title, price, and Add to Cart button */}
                    <div className="flex items-center justify-between font-bold">
                        <h1 className="text-2xl uppercase p-2">{item.title}</h1> {/* Pizza title */}
                        <h2 className="group-hover:hidden text-xl">${item.price}</h2> {/* Price (hidden on hover) */}
                        <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryPage; // Export the component so it can be used in other files
