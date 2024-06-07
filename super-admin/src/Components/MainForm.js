import React, { useState , useEffect} from "react";
import axios from "axios";

export default function MainForm() {
  const [formData, setFormData] = useState({
    schoolname: "",
    address: "",
    schoolphone: "",
    schoolemail: "",
    classFrom: "",
    classTo: "",
    board: "",
    adminname: "",
    adminphone: "",
    planDuration: "",
    password:"user@123",
    username:"",
  });

  useEffect(() => {
    // Only post data when the username is updated
    if (formData.username) {
      postData();
    }
  }, [formData.username]);

  const generateUniqueString = (schoolname) => {
    // Extract the first letter and the first letter of the second word from the school name
    const [firstLetter, secondWordFirstLetter] = schoolname
      .split(/\s+/) // Split the school name by spaces
      .map((word) => word[0].toUpperCase()); // Take the first letter of each word

    // Get the current date in the format DD
    const currentDate = new Date().getDate().toString().padStart(2, '0');

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Combine the first letters, date, and year to create the unique string
    return `${firstLetter}${secondWordFirstLetter}${currentDate}${currentYear}`;
  };


  

  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:8800/createUser", formData);
      console.log(response.data);
      // You can handle the response as needed
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error as needed
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const originalSchoolname = formData.schoolname;
    const uniqueString = generateUniqueString(originalSchoolname);

    setFormData((prevData) => ({
      ...prevData,
      schoolname: originalSchoolname,
      username: uniqueString,
    }));
  };
  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                School Details
              </label>
              <label
                htmlFor="schoolname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                School Name
              </label>
              <input
                onChange={handleInputChange}
                value={formData.schoolname}
                type="text"
                name="schoolname"
                id="schoolname"
                placeholder="School Name"
                className="w-full  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="schoolname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                School Address
              </label>
              <input
                onChange={handleInputChange}
                value={formData.address}
                type="text"
                name="address"
                id="address"
                placeholder="School Address"
                className="w-full  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="schoolphone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                onChange={handleInputChange}
                value={formData.schoolphone}
                type="text"
                name="schoolphone"
                id="schoolphone"
                placeholder="Enter your phone number"
                className="w-full  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="schoolemail"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                onChange={handleInputChange}
                value={formData.schoolemail}
                type="email"
                name="schoolemail"
                id="email"
                placeholder="Enter your email"
                className="w-full  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-2/3 ">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Class
                  </label>
                  <div className="space-x-2">
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="classFrom"
                      value={formData.classFrom}
                      id="classForm"
                      placeholder="From"
                      className="w-36  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="classTo"
                      value={formData.classTo}
                      id="classTo"
                      placeholder="To"
                      className="w-36  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/3">
                <div className="relative inline-block text-left">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Board"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Board
                    </label>
                    <div className="mt-2">
                      <select
                        id="board"
                        name="board"
                        onChange={handleInputChange}
                        value={formData.board}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        required
                      >
                        <option >Choose Board...</option>
                        <option value="State Board">State Board</option>
                        <option value="CBSC Board">CBSC Board</option>
                        <option value="ICSC Board">ICSC Board</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Admin Details
              </label>
              <div className="mb-5">
                <label
                  htmlFor="adminname"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Admin Name
                </label>
                <input
                  onChange={handleInputChange}
                  value={formData.adminname}
                  type="text"
                  name="adminname"
                  id="adminname"
                  placeholder="Admin Name"
                  className="w-full  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="schoolphone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formData.adminphone}
                  name="adminphone"
                  id="adminphone"
                  placeholder="Enter your phone number"
                  className="w-full  border-b-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2 h-44">
                <div className="relative inline-block text-left">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="plan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Plan
                    </label>
                    <div className="mt-2">
                      <select
                        id="planDuration"
                        name="planDuration"
                        onChange={handleInputChange}
                        value={formData.planDuration}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        required
                      >
                        <option >Choose Plan...</option>
                        <option value="1 Year - 7999">1 Year - 7999</option>
                        <option value="6 Months - 4999">6 Months - 4999</option>
                        <option value="3 Months - 2999">3 Months - 2999</option>
                        <option value="1 Month - 1999">1 Month - 1999</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/3 h-44">
                <div className="relative inline-block text-left">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Payment Method
                    </label>
                    <div className="mt-2">
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        required
                      >
                        <option>Choose Payment...</option>
                        <option>Online</option>
                        <option>Cash</option>
                        <option>Net Banking</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
