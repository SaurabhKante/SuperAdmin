import React, { useState, useRef } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { CSVLink } from "react-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";

export default function Table({ data, Heading }) {
  const componentPdf = useRef();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [filteredData, setFilteredData] = useState([]);
  const filteredData = [];

  const handleSelect = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const isDateInRange = (date) => {
    return date >= startDate && date <= endDate;
  };

  const handleFilter = () => {
    setFilter((prevFilter) => !prevFilter);
  };

  const generatePdf = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "UserData",
    onAfterPrint: () => alert("Data Saved!"),
  });

  return (
    <div className="m-10">
      <h1 className="text-center font-Bolder text-3xl m-5">{Heading}</h1>

      <div className="-mx-3 flex flex-wrap m-5">
        <div className="w-full px-3 sm:w-1/2">
          <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input
              type="text"
              placeholder="Search anything"
              className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="topic"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white  border-transparent py-1.5 h-[38px] -mr-3 hover:bg-indigo-700">
              Search
            </button>
          </form>
        </div>

        <div>
          <button
            onClick={handleFilter}
            className="flex flex-row items-center mt-12 justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white  border-transparent  h-[38px]  hover:bg-indigo-700"
          >
            Filter
          </button>
          {filter ? (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10"
        ref={componentPdf}
      >
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                {" "}
                School Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Address
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                School Email
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                School Phone
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Admin name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Admin Phone
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Class From - To
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Board
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Plan
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Date
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data
              .filter((item) => {
                const lowerCaseSearch = search.toLowerCase();
                const createdDate = new Date(item.createdAt);
                return (
                  (lowerCaseSearch === "" ||
                    item.SchoolName.toLowerCase().includes(lowerCaseSearch) ||
                    item.SchoolEmail.toLowerCase().includes(lowerCaseSearch)) &&
                  (filter ? isDateInRange(createdDate) : true)
                );
              })
              .map((item) => {
                filteredData.push(item);
                let CreatedDate = new Date(item.createdAt);
                return (
                  <tr key={item.id}>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.SchoolName}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.schoolAddress}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                      {item.SchoolEmail}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.SchoolPhone}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.AdminName}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.AdminContact}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      1st-10th
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      State Board
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      1 Year
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {CreatedDate.toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs cursor-pointer">
                        Active
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-96 ml-28 my-10">
        <CSVLink
          data={filteredData}
          filename={"exportedClients.csv"}
          className=" w-40 text-center block justify-center font-medium rounded-l px-5 py-2 border bg-black text-gray-200 border-gray-800 hover:bg-gray-600 cursor-pointer"
        >
          Export as Excel
        </CSVLink>

        <button
          className=" w-40 text-center block justify-center font-medium rounded-l px-5 py-2 border bg-black text-gray-200 border-gray-800 hover:bg-gray-600 cursor-pointer"
          onClick={generatePdf}
        >
          Export as pdf
        </button>
      </div>
    </div>
  );
}
