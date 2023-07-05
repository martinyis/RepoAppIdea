import bgImg from "C:/Users/kusha/Desktop/Open Source Prjects/RepoAppIdea/src/assets/how-it-works-simplifying-data-transfer@2x.png"

const ErrorPopUp = (props) => {
  const { error, handleTryAgain } = props;
  const handleClick = () => {
    handleTryAgain();
  };


  return (
    <div className="absolute top-[200px] md:w-[50%] w-[80%] sm:h-[50%] h-[70%] bg-[#ffffff] text-[#ff0000] rounded-[50px] flex md:flex-row flex-col items-center justify-center gap-[80px] py-20 z-10"
      style={{ padding: "20px", gap: "10px" }}
    >
      <img className="md:h-[95%] h-[70%]" src={bgImg} style={{ objectFit: "cover" }} alt="" srcset="" />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", color: "#334c6f", fontWeight: "bold" }}>Oops!</h1>
        <div className="text-2xl text-center">{error}</div>
        <button
          onClick={handleClick}
          style={{
            marginTop: "10px"
          }}
          className="md:w-[40%] w-[40%] h-[15%] bg-slate-500 rounded-[26px] text-lg font-bold text-white transform hover:scale-125 transition duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPopUp;
