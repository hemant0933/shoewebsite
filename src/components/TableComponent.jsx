import React from "react";


let Data = [

];

const TableComponent = () => {
  return <div>

    <div className="w-[100%] rounded-lg mx-auto">
    
      <table className="table-auto shadow-lg">
       <thead>
       <tr className="">
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Action</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">ID</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Start Date</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">End Date</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Month,Year</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Date Exculded</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Number of Days</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Lead Count</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Expected DRR</td>
          <td className="border-b-2 text-gray-900 font-semibold text-base text-left px-4 py-2">Last Updated</td>
        </tr>
       </thead>
       <tbody>
        <tr className="hover:bg-gray-200">
          <td className="border-b-2 px-4 py-2">
            -
          </td>
          <td className="border-b-2 px-4 py-2">
            11
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-03
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-25
          </td>
          <td className="border-b-2 px-4 py-2">
            10
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-08,
            2023-10-15,
            2023-10-22
          </td>
          <td className="border-b-2 px-4 py-2">
            20
          </td>
          <td className="border-b-2 px-4 py-2">
            8000
          </td>
          <td className="border-b-2 px-4 py-2">
            400
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-05 13:30:41
          </td>
        </tr>
        <tr className="hover:bg-gray-200">
          <td className="border-b-2 px-4 py-2">
            -
          </td>
          <td className="border-b-2 px-4 py-2">
            11
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-03
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-25
          </td>
          <td className="border-b-2 px-4 py-2">
            10
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-08,
            2023-10-15,
            2023-10-22
          </td>
          <td className="border-b-2 px-4 py-2">
            20
          </td>
          <td className="border-b-2 px-4 py-2">
            8000
          </td>
          <td className="border-b-2 px-4 py-2">
            400
          </td>
          <td className="border-b-2 px-4 py-2">
            2023-10-05 13:30:41
          </td>
        </tr>
       
       </tbody>
      </table>
    </div>

  </div>;
};

export default TableComponent;
