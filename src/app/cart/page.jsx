// Importing the 'Image' component from Next.js for optimized image handling
import Image from "next/image";
// Importing React to use JSX syntax
import React from "react";

/**
 * CartPage Component
 * -------------------
 * This component renders the Cart Page of an e-commerce application.
 * It consists of two main sections:
 * 1. Products container (where added cart items are listed)
 * 2. Payment summary (where pricing details are shown)
 */
const CartPage = () => {
    return (
        // Main container for the entire cart page
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">

            {/* PRODUCTS CONTAINER */}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">

                {/* SINGLE ITEM */}
                <div className="flex items-center justify-between mb-4">
                    {/* Product image */}
                    <Image src="/temporary/p1.png" alt="" width={100} height={100} />

                    {/* Product details */}
                    <div>
                        <h1 className="uppercase text-xl font-bold">sicilian</h1>
                        <span>Large</span>
                    </div>

                    {/* Product price */}
                    <h2 className="font-bold">$79.90</h2>

                    {/* Remove item (X icon) */}
                    <span className="cursor-pointer">X</span>
                </div>

                {/* SINGLE ITEM - Repeated (could be dynamically generated in real use case) */}
                <div className="flex items-center justify-between mb-4">
                    <Image src="/temporary/p1.png" alt="" width={100} height={100} />
                    <div>
                        <h1 className="uppercase text-xl font-bold">sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className="font-bold">$79.90</h2>
                    <span className="cursor-pointer">X</span>
                </div>

                {/* SINGLE ITEM - Another duplicate for example */}
                <div className="flex items-center justify-between mb-4">
                    <Image src="/temporary/p1.png" alt="" width={100} height={100} />
                    <div>
                        <h1 className="uppercase text-xl font-bold">sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className="font-bold">$79.90</h2>
                    <span className="cursor-pointer">X</span>
                </div>
            </div>

            {/* PAYMENT CONTAINER */}
            <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">

                {/* Subtotal Section */}
                <div className="flex justify-between">
                    <span>Subtotal (3 items)</span>
                    <span>$81.70</span>
                </div>

                {/* Service Cost */}
                <div className="flex justify-between">
                    <span>Service Cost</span>
                    <span>$0.00</span>
                </div>

                {/* Delivery Cost */}
                <div className="flex justify-between">
                    <span>Delivery Cost</span>
                    <span className="text-green-500">FREE!</span>
                </div>

                {/* Horizontal Line Divider */}
                <hr className="my-2" />

                {/* Total with VAT */}
                <div className="flex justify-between">
                    <span>TOTAL(INCL. VAT)</span>
                    <span className="font-bold">$81.70</span>
                </div>

                {/* Checkout Button */}
                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

// Exporting the component so it can be used in other parts of the app
export default CartPage;
