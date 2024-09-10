import { IconCirclePlus } from "@tabler/icons-react";

const AddButton = ({ navigate }) => {
  return (
    <button
      className="w-[100%] sm:[50%] lg:min-w-[400px] h-20 border-2 border-gray-700 flex justify-center items-center gap-4 bg-[#222] bg-opacity-5 cursor-pointer hover:bg-opacity-15 rounded-md"
      onClick={navigate}
    >
      <div>
        <IconCirclePlus stroke={2} />
      </div>
      <div className="text-xl font-semibold italic mb-[2px]">New Article </div>
    </button>
  );
};

export default AddButton;
