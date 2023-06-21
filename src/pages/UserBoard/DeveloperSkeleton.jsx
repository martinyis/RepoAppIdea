import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DeveloperSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, idx) => (
      <div className="bg-[#5D6C7D] rounded-[32px] ">
        <div className="pt-[16px] px-[20px] flex gap-4  pb-[30px] ">
          <div className="flex flex-col gap-y-[8px] items-center">
            <Skeleton circle width={40} height={40} />
          </div>
          <div className="flex flex-col gap-[15px] w-full ">
            {/* <div className="flex items-center justify-center bg-[#F5D9B4] rounded-[93px] w-[158px] h-[27px]"> */}
            {/* <p className="text-[12px] text-[#27374D] font-normal"> */}
            <Skeleton className="" width={158} height={27} />
            {/* </p> */}
            {/* </div> */}
            <div className="flex gap-x-[10px]">
              <Skeleton className="" width={77} height={22} />
              <Skeleton className="" width={77} height={22} />
            </div>
            <Skeleton height={100} />
          </div>
        </div>
      </div>
    ));
};

export default DeveloperSkeleton;
