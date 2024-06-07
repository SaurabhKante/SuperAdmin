import React from 'react';
import { data } from "../data";
import Table from './Table';

export default function DuesTable() {
  // Create an array to store items with completed one year subscription
  const oneYearCompletedData = [];

  // Iterate over each item in the data array
  data.forEach((item) => {
    // Parse the createdAt date string to a Date object
    const createdDate = new Date(item.createdAt);

    // Get today's date
    const today = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = today - createdDate;

    const millisecondsInDues = 372 * 24 * 60 * 60 * 1000;
    // Calculate the number of milliseconds in a year
    const millisecondsInOneYear = 365 * 24 * 60 * 60 * 1000;

    // Check if the difference is greater than or equal to one year
    const isOneYearCompleted = timeDifference <= millisecondsInDues && timeDifference >= millisecondsInOneYear;

    // If one year is completed, add the item to the new array
    if (isOneYearCompleted) {
      oneYearCompletedData.push(item);
    }
  });

  // At this point, `oneYearCompletedData` contains items with completed one year subscription

  return (
    <div>
      <Table data={oneYearCompletedData} Heading="Dues List" />
    </div>
  );
}
