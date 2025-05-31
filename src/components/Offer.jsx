// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";
// Importing React to use JSX
import React from "react";
// Importing the CountDown component (assumed to be a custom component in the same folder)
// import CountDown from "./CountDown";

/**
 * Offer Component
 * ----------------
 * This functional component renders a promotional section that showcases a product offer.
 * It uses a full-screen black background for smaller screens and a background image for medium and larger screens.
 * The layout is responsive and adjusts between column and row orientation based on the screen size.
 *
 * Structure:
 *  - Left Side: Text content, countdown timer, and "Order Now" button.
 *  - Right Side: Product image.
 *
 * Tailwind CSS is used for styling and responsiveness.
 */
const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">

            {/* TEXT CONTAINER
        - Takes up half the width on medium screens and above.
        - Centers all text and elements vertically and horizontally.
        - Includes headline, paragraph, countdown, and button.
      */}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
                <h1 className="text-white text-5xl font-bold xl:text-6xl">
                    Delicious Burger & French Fry
                </h1>

                <p className="text-white xl:text-xl">
                    Progressively simplify effective e-toilers and process-centric methods
                    of empowerment. Quickly pontificate parallel.
                </p>

                {/* Countdown timer component (likely showing time left for the offer) */}
                {/*<CountDown />*/}

                {/* Call-to-action button */}
                <button className="bg-red-500 text-white rounded-md py-3 px-6">
                    Order Now
                </button>
            </div>

            {/* IMAGE CONTAINER
        - Takes up the other half of the layout.
        - Uses Next.js's Image component with "fill" to stretch the image to container size.
        - The "object-contain" class ensures the image maintains its aspect ratio.
      */}
            <div className="flex-1 w-full relative md:h-full">
                <Image src="/offerProduct.png" alt="" fill className="object-contain" />
            </div>
        </div>
    );
};

// Exporting the component as default to be used in other parts of the app
export default Offer;
