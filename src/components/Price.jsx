"use client"; // Enables React client-side behavior in Next.js App Router

import React, { useEffect, useState } from "react";

/**
 * Price Component
 *
 * @description Displays a dynamic price calculator based on selected product options and quantity.
 *
 * @param {Object} props - The props object.
 * @param {number} props.price - The base price of the product.
 * @param {number} props.id - Unique identifier for the product (currently unused in logic).
 * @param {Array} [props.options] - Optional array of product customization options.
 * Each option contains a `title` and an `additionalPrice` value.
 *
 * @example
 * <Price price={10} id={1} options={[{ title: "Large", additionalPrice: 2 }]} />
 */
const Price = ({ price, id, options }) => {
    // State: holds total price shown to user
    const [total, setTotal] = useState(price);

    // State: number of items user wants to buy
    const [quantity, setQuantity] = useState(1);

    // State: which option user has selected (index of options array)
    const [selected, setSelected] = useState(0);

    /**
     * useEffect - updates total price every time quantity or selected option changes.
     * If options are provided, it adds the additional price of the selected option.
     */
    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        );
    }, [quantity, selected, options, price]);

    return (
        <div className="flex flex-col gap-4">
            {/* Total Price Display */}
            <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

            {/* OPTIONS CONTAINER */}
            <div className="flex gap-4">
                {options?.map((option, index) => (
                    <button
                        key={option.title}
                        className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
                        style={{
                            background: selected === index ? "rgb(248 113 113)" : "white",
                            color: selected === index ? "white" : "red",
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>

            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="flex justify-between items-center">
                {/* QUANTITY */}
                <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                    <span>Quantity</span>
                    <div className="flex gap-4 items-center">
                        {/* Decrease Quantity Button: limits to minimum of 1 */}
                        <button
                            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                        >
                            {"<"}
                        </button>
                        <span>{quantity}</span>
                        {/* Increase Quantity Button: limits to maximum of 9 */}
                        <button
                            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
                        >
                            {">"}
                        </button>
                    </div>
                </div>

                {/* ADD TO CART BUTTON */}
                <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Price;
