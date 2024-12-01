import React from 'react'
import { tables } from '../../constants'

const DiscussionForums = () => {
  return (
    <div className="py-8 md:py-14 px-6 xl:px-20">
      <div className="text-center">
        <h2 className="text-[28px] md:text-[36px] font-[600] text-black pb-2">
          Discussion Forums
        </h2>

        <p className="text-[14px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto border-[1px] border-[#DBDBDB] rounded-2xl">
        <table className="text-left border-collapse table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-3 border-b text-[12px] sm:text-[14px] lg:text-[16px] w-[65%]">
                Forum
              </th>
              <th className="py-4 px-2 md:p-4 border-b text-[12px] sm:text-[14px] lg:text-[16px]">
                Topics
              </th>
              <th className="py-4 px-2 md:p-4 border-b text-[12px] sm:text-[14px] lg:text-[16px]">
                Posts
              </th>
              <th className="py-4 px-2 md:p-4 border-b text-[12px] sm:text-[14px] lg:text-[16px]">
                Last Post
              </th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (
              <tr
                key={table._id}
                className={table._id === "2" || table._id === "4" ? 'bg-grey1' : ''}
              >
                <td className="flex flex-col gap-2 py-4 px-2 md:p-4 border-b">
                  <div className="text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-black line-clamp-2 md:line-clamp-0">{table.title}</div>
                  <div className="text-[10px] sm:text-[12px] lg:text-[14px] line-clamp-3 md:line-clamp-0">{table.text}</div>
                </td>
                <td className="py-4 px-2 md:p-4 border-b text-[12px] sm:text-[14px] lg:text-[16px]">{table.topics}</td>
                <td className="py-4 px-2 md:p-4 border-b text-[12px] sm:text-[14px] lg:text-[16px]">{table.post}</td>
                <td className="py-4 px-2 md:p-4 border-b text-[12px] sm:text-[14px] lg:text-[16px]">{table.lastPost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default DiscussionForums
