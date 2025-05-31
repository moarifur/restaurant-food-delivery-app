/**
 * @file OrdersPage.jsx
 * @description Renders a static table layout for displaying a list of orders.
 * This component is a purely presentational one.
 * Useful for displaying sample/mock order information.
 *
 * @component
 * @returns {JSX.Element} A table showing order IDs, dates, prices, product lists, and status.
 */

import React from "react";

const OrdersPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40">
            {/* Order table */}
            <table className="w-full border-separate border-spacing-3">
                <thead>
                <tr className="text-left">
                    <th className="hidden md:block">Order ID</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th className="hidden md:block">Products</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {/* Table Row 1 */}
                <tr className="text-sm md:text-base bg-red-50">
                    <td className="hidden md:block py-6 px-1">1237861238721</td>
                    <td className="py-6 px-1">19.07.2023</td>
                    <td className="py-6 px-1">89.90</td>
                    <td className="hidden md:block py-6 px-1">
                        Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
                    </td>
                    <td className="py-6 px-1">On the way (approx. 10min)...</td>
                </tr>

                {/* Table Row 2 */}
                <tr className="text-sm md:text-base odd:bg-gray-100">
                    <td className="hidden md:block py-6 px-1">1237861238721</td>
                    <td className="py-6 px-1">19.07.2023</td>
                    <td className="py-6 px-1">89.90</td>
                    <td className="hidden md:block py-6 px-1">
                        Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
                    </td>
                    <td className="py-6 px-1">On the way (approx. 10min)...</td>
                </tr>

                {/* Table Row 3 */}
                <tr className="text-sm md:text-base odd:bg-gray-100">
                    <td className="hidden md:block py-6 px-1">1237861238721</td>
                    <td className="py-6 px-1">19.07.2023</td>
                    <td className="py-6 px-1">89.90</td>
                    <td className="hidden md:block py-6 px-1">
                        Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
                    </td>
                    <td className="py-6 px-1">On the way (approx. 10min)...</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
