import { Link } from "react-router-dom";
import "./Developer.css";
const Deverloper = () => {
  return (
    <div className="bg-[#5D6C7D] rounded-[32px]">
      <div className="pt-[16px] px-[28px] flex gap-4 custom:flex-row flex-col">
        <div className="flex flex-col gap-y-[8px] items-center">
          <img
            className="max-w-[83px] max-h-[83px] rounded-[50%]"
            src="https://avatars.githubusercontent.com/u/97173732?v=4"
            alt=""
          />
          <Link>
            <p className="text-[12px] text-[#FFFFFF] font-bold">martinyis</p>
          </Link>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center justify-center bg-[#F5D9B4] rounded-[93px] w-[158px] h-[27px]">
            <p className="text-[12px] text-[#27374D] font-normal">
              Full-Stack Developer
            </p>
          </div>
          <div className="flex gap-x-[2px]">
            <div className="flex items-center justify-center w-[77px] h-[22px] rounded-[29px] bg-black cursor-pointer">
              <a className="text-[#EEEEEE] text-[12px] font-regular">Github</a>
            </div>
            <div className="flex items-center justify-center w-[77px] h-[22px] rounded-[29px] bg-[#0A66C2] cursor-pointer">
              <a className="text-[#EEEEEE] text-[12px] font-regular">
                LinkedIn
              </a>
            </div>
          </div>
          <p className="max-w-[250px] text-[12px] text-white text-opacity-60">
            React front-end developer studying at University of New Hampshire
            Expanding knowledge in back-end technologies, aiming for proficiency
            in MERN stack
          </p>
        </div>
      </div>
      <div className="h-[30px] w-[100%] bg-[#DDE6ED] rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[32px] rounded-br-[32px] mt-[15px]  flex items-center justify-center">
        <div className="scrollbar flex gap-x-4 max-w-[395px] overflow-x-auto">
          <div className="w-[71px] h-[13px] rounded-[30px] bg-[#D4ADFC] flex items-center justify-center text-[8px] ">
            JavaScript
          </div>
          <div className="w-[71px] h-[13px] rounded-[30px] bg-[#D4ADFC] flex items-center justify-center text-[8px] ">
            JavaScript
          </div>
          <div className="w-[71px] h-[13px] rounded-[30px] bg-[#D4ADFC] flex items-center justify-center text-[8px] ">
            JavaScript
          </div>
          <div className="w-[71px] h-[13px] rounded-[30px] bg-[#D4ADFC] flex items-center justify-center text-[8px] ">
            JavaScript
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deverloper;
