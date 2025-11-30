import { formatDistanceToNowStrict } from "date-fns";
import { useMemo } from "react";
import { AiFillHeart, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BiSolidUser, BiUser } from "react-icons/bi";

interface NotificationItemProps {
  data: Record<string, any>;
}

const NotificationsItem: React.FC<NotificationItemProps> = ({ data = {} }) => {
  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return (
        <div className="
            flex flex-col 
            p-6 
            border-b-[1px] border-neutral-800
            hover:bg-sky-900
            hover:bg-opacity-25
            transition
            cursor-default"
        >
            <div /* DATE */
                className="flex justify-end items-center">
                <p className="text-neutral-600 font-semibold">
                    {createdAt}
                </p>
            </div>
            <div /* EMOJI AND BODY */ 
                className="flex flex-row gap-3 items-center">
                {data.body.includes("followed") && 
                    <BiSolidUser color="dodgerblue" size={32} />}
                {data.body.includes("liked") && 
                    <AiFillHeart color="deeppink" size={32} />}
                {data.body.includes("replied") && 
                    <AiOutlineMessage color="white" size={32} />}
                
                <p className="text-neutral-200 font-bold">
                    {data.body}
                </p>
            </div>
            {/* EMOTIKON DO KAŻDEGO POWIADOMIENIA */}
        </div>
  )
}

export default NotificationsItem;