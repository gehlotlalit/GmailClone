import { IoMdMore, IoMdArrowBack} from "react-icons/io";
import{
  // MdKeyboardArrowLeft,
  // MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

const Mail = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <IoMdArrowBack size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <BiArchiveIn size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <MdOutlineReport size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <MdDeleteOutline size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <MdOutlineMarkEmailUnread size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <MdOutlineWatchLater size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <MdOutlineAddTask size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <MdOutDriveFileMove size={"20px"}/>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
               <IoMdMore size={"20px"}/>
          </div>
           
        </div>

      </div>

    </div>
  )
}

export default Mail