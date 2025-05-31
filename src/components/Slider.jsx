// Enable Client-side Rendering in Next.js
"use client";

// Import required modules from Next.js and React
import Image from "next/image";
import React, { useEffect, useState } from "react";

/**
 * Sample data for the image slider.
 * Each object contains:
 * - id: A unique identifier for the slide
 * - title: Text to display on the slide
 * - image: Path to the slide image
 */
const data = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: "/slide1.png",
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg",
    },
];

/**
 * Slider Component
 * This component displays a full-screen slider with rotating images and text.
 * The text and image change automatically every 4 seconds.
 *
 * State:
 * - currentSlide: Keeps track of which slide is currently visible.
 *
 * useEffect:
 * - Runs once on component mount.
 * - Sets an interval to update the currentSlide every 4000ms (4 seconds).
 */
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Initialize current slide index to 0

    useEffect(() => {
        // Set an interval to change slides every 4 seconds
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
            4000
        );

        // Clean up the interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            {/* === TEXT CONTAINER === */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
                {/* Display slide title */}
                <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                    {data[currentSlide].title}
                </h1>
                {/* Call-to-action button */}
                <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
            </div>

            {/* === IMAGE CONTAINER === */}
            <div className="w-full flex-1 relative">
                <Image
                    src={data[currentSlide].image} // Current image source
                    alt=""                          // Alt text left empty
                    fill                            // Image fills the container
                    className="object-cover"       // Ensures the image covers the whole container without distortion
                />
            </div>
        </div>
    );
};

export default Slider;
