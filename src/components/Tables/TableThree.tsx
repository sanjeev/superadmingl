import { useEffect, useState } from 'react';
import { Package } from '../../types/package';
import moment from 'moment';
const packageData: Package[] = [
  {
    name: 'Free package',
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
  {
    name: 'Business Package',
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Unpaid',
  },
  {
    name: 'Standard Package',
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: 'Pending',
  },
];

const TableThree = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    Sdfsdfklj();
  }, []);

  function Sdfsdfklj() {
    fetch('https://admin.glamcode.in/api/super-booking-list', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === 'success') {
          setData(data.listbooking);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const useActionData = (data: any, address: '') => {
    const businessServices = JSON.parse(data.business_services || '[]');

    return (
      <>
        {businessServices.map((service: any, index: number) => (
          <>
            <h5 className="font-medium text-black dark:text-white">
              {index + 1} - {service.service_name}
            </h5>
          </>
        ))}
        <p className="dfs2erwwddsf"> {address}</p>
      </>
    );
  };

  const handleChange = (e: any, data: any) => {
    fetch('https://admin.glamcode.in/api/updatedata-booking-list', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        showing: e,
        booking_id: data,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        Sdfsdfklj();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          {/* <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Package
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Invoice date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead> */}
          <tbody>
            {data?.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.user_name} {` `}( {packageItem.booking_id} )
                  </h5>
                  <p className="text-sm font-bold">{packageItem.user_mobile}</p>
                </td>

                {}
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  {/* <h5 className="font-medium text-black dark:text-white">
                    {packageItem.booking_id}
                  </h5>
                  <p className="text-sm">wrewer</p> */}
                  {useActionData(packageItem, packageItem.user_address)}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    ₹ {packageItem.amount_to_pay}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {}
                    {moment(packageItem.date_time).format('llll')}
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`bg-opacity-1 inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                      packageItem.status === 'completed'
                        ? 'bg-success text-white'
                        : packageItem.status === 'canceled'
                        ? 'bg-danger text-white'
                        : 'bg-warning text-white'
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="w-full min-w-[200px] max-w-sm">
                    <div className="relative">
                      <select
                        value={packageItem.showing}
                        onChange={(e) =>
                          handleChange(e.target.value, packageItem.booking_id)
                        }
                        className="placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:border-slate-400 hover:border-slate-400 w-full cursor-pointer appearance-none rounded border bg-transparent py-2 pl-3 pr-8 text-sm shadow-sm transition duration-300 focus:shadow-md focus:outline-none"
                      >
                        <option value="0">Not Show</option>
                        <option value="1">Show</option>
                      </select>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.2"
                        stroke="currentColor"
                        className="text-slate-700 absolute top-2.5 right-2.5 ml-1 h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
