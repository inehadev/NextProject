'use client'
import { FaUser, FaComments } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';


export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date().toLocaleDateString('eng-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  
  return (
    <div className="flex ">
      <div className='w-[100px] h-[900px]  bg-rose-50 '>helo</div>

      <div className="h-14 w-full">
        <div className="flex justify-between items-center px-4 h-full">
          <div className='flex '>
            <FaComments className="text-xl text-blue-600" />
            <span className='text-black mx-3'>Chatbot</span>
          </div>
          <div>
            <FaUser className="text-xl text-gray-800" />
          </div>
        </div>

        <div className='w-full h-[0.5px] bg-black'></div>

        <div className='flex justify-between  '>
          <div className=' flex flex-col mt-5 mx-7 text-xl w-[500px] text-b font-poppins text-gray-800'>{today}
            <span className='mt-1  text-lg text-gray-400'>Track key metrices and agent performence</span>

          </div>


          <div className='flex '>

            <div className="flex items-center  mt-5 mx-2">
              <div className="relative">
                <select
                  className="appearance-none text-sm  bg-white border border-gray-300 text-black rounded-full px-4  py-1 pr-8 focus:outline-none"
                  defaultValue="" >

                  <option  disabled value="">Select Preset Time</option>
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 6 months</option>
                  <option>1 year</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <ChevronDown className="h-4 w-4 text-black" />
                </div>
              </div>
            </div>





            <div className="flex items-center mt-5 mx-2">
      <div className="relative">
        {/* Custom-styled input to show selected date */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          customInput={
            <button
              className="appearance-none text-sm bg-white border border-gray-300 text-black rounded-full px-4 py-1 pr-8 focus:outline-none flex items-center gap-1"
            >
              {format(selectedDate, "dd MMM yyyy")}
              <ChevronDown className="h-4 w-4 text-black ml-2" />
            </button>
          }
          popperPlacement="bottom-start"
          calendarClassName="rounded-lg shadow-lg"
        />
      </div>
    </div>



            <div className="flex items-center  mt-5 mx-2">
              <div className="relative">
                <select
                  className="appearance-none text-sm  bg-white border border-gray-300 text-black rounded-full px-4  py-1 pr-8 focus:outline-none"
                  defaultValue="" >

                  <option  disabled value="">Select Preset Time</option>
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 6 months</option>
                  <option>1 year</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <ChevronDown className="h-4 w-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
