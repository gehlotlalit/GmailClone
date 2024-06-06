import { MdCropSquare } from "react-icons/md"
import { RiStarLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const Message = () => {
  const navigate = useNavigate();
  const openMail = () => {
        navigate("/Mail/54684848448")
  }
  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor hover:shadow-md py-3">
      <div className="flex items-center gap-3">
           <div className="flex-none text-gray-300">
               <MdCropSquare className="w-5 h-5"/>
           </div>
           <div className="flex-none text-gray-300">
               <RiStarLine className="w-5 h-5"/>
           </div>
      </div>
      <div className="flex-1 ml-4">
           <p className="text-gray-600 truncate inline-block max-w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia quibusdam aliquid soluta placeat minus.</p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
          Time ayega
      </div>
    </div>
  )
}

export default Message