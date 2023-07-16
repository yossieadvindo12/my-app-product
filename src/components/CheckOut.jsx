import React from 'react'
import { useSelector } from "react-redux";

const CheckOut = () => {
    const { entities } = useSelector((state) => state.checkout);
    const countTotalPrice = (productList) => {
        const result = productList.reduce((prevValue, currValue) => {
            return prevValue + parseInt(currValue.price, 10);
        }, 0);
        return result;
    };
    return (

        <div class="relative overflow-x-auto">
            <h1>Ringkasan pesanan</h1>

            <p>Terima kasih telah berbelanja di website kami </p>
            <p>Berikut adalah list product yang anda beli</p>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {entities.map((item) => {
                        return (

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.title}
                                </th>
                                <td class="px-6 py-4">
                                    {item.category}
                                </td>
                                <td class="px-6 py-4">
                                    ${item.price}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="px-6 py-3 text-base">Total</th>
                        <td class="px-6 py-3">${countTotalPrice(entities)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )
}

export default CheckOut