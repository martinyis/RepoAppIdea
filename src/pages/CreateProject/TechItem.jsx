import { IoIosClose } from "react-icons/io";

const TechItem = (props) => {
  const { name, id, deleteTech } = props;
  const handleClose = () => {
    deleteTech(id);
  };
  return (
    <div className="w-[120px] h-[30px] flex gap-x-[10px] items-center justify-between px-2 border border-gray-200 bg-blue-200 bg-opacity-50 bg-transparent rounded-[29px] text-[12px]">
      <p>{name}</p>
      <IoIosClose onClick={handleClose} size={30} color="#EEEEEE" />
    </div>
  );
};

export default TechItem;
