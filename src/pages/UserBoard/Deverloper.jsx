import { Link } from "react-router-dom";
import "./Developer.css";
import DefaultAvatar from "./../../assets/default-user.png";
const Deverloper = (props) => {
  const { data } = props;
  const colors = ["#D4ADFC", "#0C134F", "#1D267D", "#5C469C"];
  const avatar =
    data.avatarUrl === "https://www.example-nonexistent-link.com"
      ? DefaultAvatar
      : data.avatarUrl;
  return (
    <div className="bg-[#5D6C7D] rounded-[32px]">
      <div className="pt-[16px] px-[28px] flex gap-4 custom:flex-row flex-col">
        <div className="flex flex-col gap-y-[8px] items-center">
          <img
            className="max-w-[83px] max-h-[83px] rounded-[50%]"
            src={avatar}
            alt=""
          />
          <Link>
            <p className="text-[12px] text-[#FFFFFF] font-bold">
              {data.username}
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center justify-center bg-[#F5D9B4] rounded-[93px] w-[158px] h-[27px]">
            <p className="text-[12px] text-[#27374D] font-normal">
              {data.position}
            </p>
          </div>
          <div className="flex gap-x-[2px]">
            <div className="flex items-center justify-center w-[77px] h-[22px] rounded-[29px] bg-black cursor-pointer">
              <a
                href={data.githubLink}
                className="text-[#EEEEEE] text-[12px] font-regular"
              >
                Github
              </a>
            </div>
            <div className="flex items-center justify-center w-[77px] h-[22px] rounded-[29px] bg-[#0A66C2] cursor-pointer">
              <a
                href={data.linkedinLink}
                className="text-[#EEEEEE] text-[12px] font-regular"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="max-w-[250px] text-[12px] text-white text-opacity-60">
            {data.description}
          </p>
        </div>
      </div>
      <div className="h-[30px] w-[100%] bg-[#DDE6ED] rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[32px] rounded-br-[32px] mt-[15px]  flex items-center justify-center">
        <div className="scrollbar flex gap-x-4 max-w-[395px] overflow-x-auto">
          {data.techStack.map((el) => {
            return (
              <div
                className={`w-[71px] h-[13px] rounded-[30px] bg-[${
                  colors[Math.floor(Math.random() * 4)]
                }] flex items-center justify-center text-[8px] `}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Deverloper;
