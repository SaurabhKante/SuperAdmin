// import a from "next/a"
// import { button } from "@/components/ui/button"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

import { useState } from "react";
import DashContent from "./DashContent";
import Table from "./Table";
import DuesTable from "./DuesTable";
import AboutToExpire from "./AboutToExpire";
import TotalCollection from "./TotalCollection";
import {data} from "../data"

export default function DashBoard() {

  const [showDashContent, setShowDashContent]=useState(true);
  const [totalLeads, setTotalLeads] = useState(false);
  const [duesTable, setDuesTable] = useState(false);
  const [expireTable, setExpireTable] = useState(false);
  const [collection, setCollection] = useState(false);

  const handleTotalLeads = () => {
    setShowDashContent(false);
    setDuesTable(false);
    setCollection(false);
    setExpireTable(false);
    setTotalLeads(true);
  };

  const handleDuesTable = () => {
    setShowDashContent(false);
    setCollection(false);
    setExpireTable(false);
    setTotalLeads(false);
    setDuesTable(true);
  };

  const handleExpireTable = () => {
    setShowDashContent(false);
    setCollection(false);
    setTotalLeads(false);
    setDuesTable(false);
    setExpireTable(true);
  };

  const handleCollection = () => {
    setShowDashContent(false);
    setTotalLeads(false);
    setDuesTable(false);
    setExpireTable(false);
    setCollection(true);
  };

  const handleDashContent =()=>{
    setShowDashContent(true);
    setTotalLeads(false);
    setDuesTable(false);
    setExpireTable(false);
    setCollection(false);
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <div className="flex flex-col w-60 border-r border-gray-200 dark:border-gray-700">
          <div className="flex items-center p-4 h-14">
            <div className="flex items-center space-x-2">
              <ActivityIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Dashboard</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-1">
              <button
                className="flex items-center gap-2 p-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                onClick={handleDashContent}
              >
                <HomeIcon className="h-5 w-5 stroke-2.5" />
                Home
              </button>
              <a
                className="flex items-center gap-2 p-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                href="/schoolOnBoarding"
              >
                <CalendarIcon className="h-5 w-5 stroke-2.5" />
                School Onboarding
              </a>
              <a
                className="flex items-center gap-2 p-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                href="#"
              >
                <InboxIcon className="h-5 w-5 stroke-2.5" />
                User Access Settings
              </a>
              <a
                className="flex items-center gap-2 p-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                href="#"
              >
                <UsersIcon className="h-5 w-5 stroke-2.5" />
                SMS/E-mail Integration
              </a>
            </div>
          </nav>
          <div className="flex items-center justify-center h-14 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full" size="sm" variant="outline">
              Upgrade
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">

            <div className="flex-1 flex flex-col gap-4 p-4 md:gap-2/ ">
        <div className="flex flex-col gap-4 ">
              <h1 className="text-lg font-semibold ">
                Welcome to the admin page.
              </h1>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">Welcome to the admin page.</p> */}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <button className="text-2xl text-center px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black" onClick={handleTotalLeads}>
              
                Total Leads
              </button>

              <button className="text-2xl text-center px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black">
                Active Schools
              </button>
              <button className="text-2xl text-center px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black">
                Active Teachers
              </button>
              <button className="text-2xl text-center  px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black">
                Active Students
              </button>
              <button className="text-2xl text-center  px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black" onClick={handleCollection}>
                
                Total Collection
              </button>
              <button className="text-2xl text-center px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black" onClick={handleDuesTable}>
                Dues
              </button>
              <button className="text-2xl text-center px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-black" onClick={handleExpireTable}>
                About To Expire
              </button>
            </div>
            </div>




            {showDashContent && <DashContent handleTotalLeads={handleTotalLeads} handleCollection={handleCollection} handleDuesTable={handleDuesTable} handleExpireTable={handleExpireTable} />}
        {totalLeads && <Table data={data} Heading="Total Leads" />}
       {duesTable && <DuesTable data={data} Heading="Dues Table" />}
       {expireTable && <AboutToExpire data={data} Heading="About To Expire" />}
       {collection && <TotalCollection />}
            
        </div>


        
      </div>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   );
// }

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

// function ChevronLeftIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m15 18-6-6 6-6" />
//     </svg>
//   );
// }



function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}



// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
