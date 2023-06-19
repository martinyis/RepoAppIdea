const ErrorPopUp = (props) => {
  const { error } = props;
  const handleClick = () => {
    //reload apge
    window.location.reload();
  };
  return (
    <div className="absolute top-[200px] w-[50%] h-[50%] bg-[#ffffff] text-[#ff0000] rounded-[50px] flex flex-col items-center justify-center gap-[80px]">
      <div className="text-2xl px-8 text-center">{error}</div>
      <button
        onClick={handleClick}
        className="w-[20%] h-[10%] bg-slate-500 rounded-[26px] text-lg font-bold text-white transform hover:scale-125 transition duration-200"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPopUp;
