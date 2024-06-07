import React, { useState } from "react";
import Table from "./Table";
import DuesTable from "./DuesTable";
import AboutToExpire from "./AboutToExpire";
import TotalCollection from "./TotalCollection";
import {data} from "../data"

export default function AdminPage() {
  const [totalLeads, setTotalLeads] = useState(true);
  const [duesTable, setDuesTable] = useState(false);
  const [expireTable, setExpireTable] = useState(false);
  const [collection, setCollection] = useState(false);

  const handleTotalLeads = () => {
    setDuesTable(false);
    setCollection(false);
    setExpireTable(false);
    setTotalLeads(true);
  };

  const handleDuesTable = () => {
    setCollection(false);
    setExpireTable(false);
    setTotalLeads(false);
    setDuesTable(true);
  };

  const handleExpireTable = () => {
    setCollection(false);
    setTotalLeads(false);
    setDuesTable(false);
    setExpireTable(true);
  };

  const handleCollection = () => {
    setTotalLeads(false);
    setDuesTable(false);
    setExpireTable(false);
    setCollection(true);
  };

  return (
    <div>
      <div className="flex w-full md:max-w-xl mx-4 rounded shadow ml-96 mt-10">
        <button
          onClick={handleTotalLeads}
          className="w-full flex justify-center font-medium rounded-l px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          Total Leads
        </button>

        <button
          onClick={handleDuesTable}
          className="w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white  border-gray-900 hover:bg-gray-800 cursor-pointer"
        >
          Dues Table
        </button>

        <button
          onClick={handleExpireTable}
          className="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          About To Expire
        </button>

        <button
          onClick={handleCollection}
          className="w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white  border-gray-900 hover:bg-gray-800 cursor-pointer"
        >
          Total Collection
        </button>
      </div>

       {totalLeads && <Table data={data} Heading="Total Leads" />}
       {duesTable && <DuesTable data={data} Heading="Dues Table" />}
       {expireTable && <AboutToExpire data={data} Heading="About To Expire" />}
       {collection && <TotalCollection />}
    </div>
  );
}
