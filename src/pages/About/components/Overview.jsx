import Buttons from "./Buttons";

const Overview = () => {
  return (
    <div className="max-w-[680px] mx-auto flex-col items-center justify-center mt-[131px] pb-[145px]">
      <p className="text-white text-opacity-80 text-base pb-10 font-medium text-center">
        ABOUT US
      </p>
      <h1 className="sm:text-3xl text-xl font-bold text-custom-gray text-center pb-[18px]">
        Building a Community of Developers and Ideas
      </h1>
      <p className="text-center font-extralight text-custom-gray sm:text-2xl text-base max-w-[425px] mx-auto pb-[51px]">
        Promoting Open Source Collaboration - Connect, Contribute, and Innovate
        Together on RepoAppIdea
      </p>
      <Buttons />
    </div>
  );
};

export default Overview;
