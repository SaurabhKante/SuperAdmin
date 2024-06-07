import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TotalCollection() {
  const [collectionData, setCollectionData] = useState([]);

  const processPlanDuration = (duration) => {
    switch (duration) {
      case '1 Year - 7999':
        return { plan: '1 Year', price: 7999 };
      case '6 Months - 4999':
        return { plan: '6 Months', price: 4999 };
      case '3 Months - 2999':
        return { plan: '3 Months', price: 2999 };
      case '1 Month - 1999':
        return { plan: '1 Month', price: 1999 };
      default:
        return { plan: '', price: 0 };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/collection');
        setCollectionData(response.data);
      } catch (error) {
        console.error('Error fetching collection data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  const totalCollection = collectionData.reduce((acc, item) => {
    const { price } = processPlanDuration(item.plan.duration);
    return acc + price;
  }, 0);

  return (
    <div>
      <h1 className="text-center font-Bolder text-3xl m-5">Total Collection</h1>
      <table className="w-full table-fixed">
        <thead >
          <tr className="bg-gray-100">
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">School Name</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Plan</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {collectionData.map((item) => {
            const { plan, price } = processPlanDuration(item.plan.duration);

            return (
              <tr key={item.key}>
                <td className="py-4 px-6 border-b border-gray-200">{item.school.name}</td>
                <td className="py-4 px-6 border-b border-gray-200">{plan}</td>
                <td className="py-4 px-6 border-b border-gray-200">{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-center text-xl mt-5 font-bold">Total Collection: {totalCollection}</p>
    </div>
  );
}
