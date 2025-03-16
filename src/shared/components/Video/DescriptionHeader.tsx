import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Description from "./Description";

interface IDescriptionProps {
    comments?: IComment[];
    description?: string,
    name?: string,
    numberOfComments?: number,
    numberOfLikes?: number,
    numberOfDislikes?: number,
    avatarLink?: string;
    user?: IUser;
}

interface IComment {
  id?: string,
  content?: string,
}

interface IUser {
  username: string;
}


export default function DescriptionHeader({name, numberOfLikes, numberOfDislikes, description, avatarLink, user}: IDescriptionProps) {
  return (
    <div className="flex flex-col w-full gap-4 mt-5">
        <h1 className="text-white text-2xl font-bold">{name}</h1>
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <div className="w-16 ml-0">
              <img src={avatarLink} className="rounded-full w-full h-full object-cover"/>
            </div>
            <h2 className="font-bold text-white text-2xs ml-2">{user?.username}</h2>
          </div>

          <div className="flex items-center gap-4 mr-0">
            <button className="flex items-center gap-3 bg-[#3F3F3F] pr-7 pt-1.5 pb-1.5 pl-7 rounded-2xl">
              <p className="text-white">{numberOfLikes ? numberOfLikes : 0} |</p>
              <AiOutlineLike width={50} height={50}/>
            </button>
            <button className="flex items-center gap-3 bg-[#3F3F3F] pr-7 pt-1.5 pb-1.5 pl-7 rounded-2xl">
              <p className="text-white">{numberOfDislikes ? numberOfDislikes : 0} |</p>
              <AiOutlineDislike width={50} height={50}/>
            </button>
          </div>
        </div>
        <div>
          <Description description={description}/>
        </div>
    </div>
  )
}
