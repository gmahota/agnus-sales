import React from "react";
import { FiBox } from "react-icons/fi";
import SectionTitle from "../../components/section-title";
import Widget from "../../components/widget";
import { formatCurrencyMT } from "../../functions/numbers";

export default function OrderCreate() {
  const items = [
    {
      item: "A001",
      name: "Creative Design",
      project: "P001",
      quantity: 40,
      amount: 1000,
    },
    {
      item: "A002",
      name: "Front end development",
      project: "P001",
      quantity: 120,
      amount: 60,
    },
    {
      item: "A003",
      name: "API development",
      project: "P001",
      quantity: 80,
      amount: 40,
    },
  ];
  const account = {
    bank: "Barclays UK",
    account: "#13244657",
    date: "Jan 17, 2021",
  };
  return (
    <>
      <SectionTitle title="Products" subtitle="Create Customer Order" />

      <Widget>
        <div className="p-4">
          <div className="flex flex-row items-center justify-between mb-16">
            <div className="flex flex-col">
              <span className="text-blue-500 text-4xl uppercase font-bold">
                Order
              </span>
              <span className="text-gray-500">#16274619</span>
            </div>
            <div className="uppercase font-bold text-base tracking-wider flex flex-row items-center justify-start whitespace-nowrap">
              <div className="flex flex-row items-center justify-start space-x-2 text-blue-500">
                <FiBox size={28} className="stroke-current text-blue-500" />
                <span>Company logo</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mb-16">
            <div className="flex flex-col">
              <span className="font-bold">Order to:</span>
              <span className="text-gray-500">John Doe</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Date:</span>
              <span className="text-gray-500">Dec 17, 2020</span>
            </div>
          </div>
          <table className="w-full table-auto mb-16 text-left">
            <thead>
              <tr>
                <th className="pr-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                  Item
                </th>
                <th className="px-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                  Description
                </th>
                <th className="px-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                  Project
                </th>
                <th className="pl-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider text-right">
                  Quantity
                </th>
                <th className="pl-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider text-right">
                  Amout
                </th>
                <th className="pl-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider text-right">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="pr-3 py-2 whitespace-nowrap font-bold">
                    {item.item}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrapd">{item.name}</td>
                  <td className="px-3 py-2 whitespace-nowrapd">
                    {item.project}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-right">
                    {item.quantity}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-right">
                    {formatCurrencyMT(item.amount)}
                  </td>
                  <td className="pl-3 py-2 whitespace-nowrap text-right">
                    {formatCurrencyMT(item.quantity * item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-row w-full mb-16">
            <div className="flex flex-col w-1/2">
              <div className="font-bold mb-2">Vat Details</div>
              <table className="w-full table-auto text-left">
                <tbody>
                  <tr>
                    <td className="pr-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                      17%
                    </td>
                    <td className="pl-3 py-2 whitespace-nowrap">
                      {formatCurrencyMT(
                        items.reduce(
                          (sum, current) =>
                            sum + current.quantity * current.amount * 0.17,
                          0
                        )
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* <div className="font-bold mb-2">Payment details</div>
              <table className="w-full table-auto text-left">
                <tbody>
                  <tr>
                    <td className="pr-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                      Bank
                    </td>
                    <td className="pl-3 py-2 whitespace-nowrap">
                      {account.bank}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                      Account
                    </td>
                    <td className="pl-3 py-2 whitespace-nowrap">
                      {account.account}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-3 py-2 text-gray-500 text-xs leading-4 font-medium uppercase tracking-wider">
                      Due date
                    </td>
                    <td className="pl-3 py-2 whitespace-nowrap">
                      {account.date}
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
            <div className="flex flex-col w-1/2 self-center text-right">
              <span className="font-bold">Total amount</span>
              <span className="text-3xl font-bold text-blue-500">
                {formatCurrencyMT(
                  items.reduce(
                    (sum, current) => sum + current.quantity * current.amount,
                    0
                  )
                )}
              </span>
              <span className="text-gray-500">VAT free</span>
            </div>
          </div>
        </div>
      </Widget>
    </>
  );
}
