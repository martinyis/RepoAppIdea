import { IoIosClose } from "react-icons/io";

const TechItem = (props) => {
  const { name, id, deleteTech } = props;
  const handleClose = () => {
    deleteTech(id);
  };
  return (
    <div className="h-[30px] flex gap-x-[10px] items-center justify-between px-2 border border-gray-200 bg-blue-200 bg-opacity-50 bg-transparent rounded-[29px] text-[12px]">
      <p className="px-5">{name}</p>
      <IoIosClose
        onClick={handleClose}
        size={30}
        color="#EEEEEE"
        className="cursor-pointer hover:scale-125 ease-in-out duration-300"
      />
    </div>
  );
};

export default TechItem;
