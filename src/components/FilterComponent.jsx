import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const FilterComponent = () => {
  const [action, setAction] = useState("");
  const [id, setId] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [monthYear, setMonthYear] = useState("");
  const [dateExcluded, setDateExcluded] = useState([]);
  const [numberOfDays, setNumberOfDays] = useState("");
  const [leadCount, setLeadCount] = useState("");
  const [expectedDRR, setExpectedDRR] = useState("");
  // const [lastUpdated, setLastUpdated] = useState("");
  const [obj,setObj] = useState();

  const handleCancel = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const newobj =  { 
      id:id,
      startDate:startDate,
      endDate:endDate,
      monthYear:monthYear,
      dateExcluded:dateExcluded,
      numberOfDays:numberOfDays,
      leadCount:leadCount,
      expectedDRR:parseInt(leadCount)/parseInt(numberOfDays),
    }

    setObj([
      ...obj,newobj])
    console.log(obj);
  };

  // const handleDateSelect = () => {
    
  // }

  const getMonth = (date) => {
    const month = date.getMonth() + 1; // Adding 1 to get the month in numeric format (1 to 12)
    return month;
  };


  return (
    <div className="flex justify-start items-center flex-col space-y-4">
      <h1 className=" text-xl">Filter</h1>

      <div className="">
        <form
          className="inline space-x-4 space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={id}
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
          />
          <DatePicker 
            selected={startDate} 
            // onSelect={handleDateSelect}
            dateFormat="yyyy/MM/dd"  
            onChange={(date) =>  {setStartDate(date)
              setMonthYear(getMonth(date))}} 
          />   
          <DatePicker 
            selected={endDate} 
            // onSelect={handleDateSelect}
            dateFormat="yyyy/MM/dd"  
            onChange={(date) => setEndDate(date)} />   
          <input
            type="text"
            value={monthYear}
            placeholder=""
            disabled={true}
            onChange={() => setMonthYear(getMonth)}
          />
          {/* <DatePicker 
            selected={dateExcluded} 
            dateFormat="yyyy/MM/dd"  
            onChange={(date) => setDateExcluded(date)} />    */}
          <input
            type="text"
            value={numberOfDays}
            placeholder="Number of Days"
            onChange={(e) => setNumberOfDays(e.target.value)}
          />
          <input
            type="text"
            value={leadCount}
            placeholder="Lead Count"
            onChange={(e) => setLeadCount(e.target.value)}
          />
          <input
            type="text"
            value={expectedDRR}
            placeholder="Expected DDR"
            onChange={(e) => setExpectedDRR(e.target.value)}
          />

          <div className="flex space-x-4">
            <button type="submit" className="p-3 rounded-md bg-zinc-200">
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="p-3 rounded-md bg-zinc-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterComponent;
