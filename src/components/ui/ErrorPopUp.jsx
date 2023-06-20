const ErrorPopUp = (props) => {
  const { error, handleTryAgain } = props;
  const handleClick = () => {
    handleTryAgain();
  };
  return (
    <div className="absolute top-[200px] md:w-[50%] w-[80%] sm:h-[50%] h-[70%] bg-[#ffffff] text-[#ff0000] rounded-[50px] flex flex-col items-center justify-center gap-[80px] py-10">
      <div className="text-2xl px-8 text-center">{error}</div>
      <button
        onClick={handleClick}
        className="md:w-[20%] w-[40%] h-[10%] bg-slate-500 rounded-[26px] text-lg font-bold text-white transform hover:scale-125 transition duration-200"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPopUp;
