import { BsArrowThroughHeart, BsHeart, BsHeartFill, BsHeartPulse, BsReply, BsTwitter } from "react-icons/bs";

import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { AiFillHeart, AiFillMessage, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import NotificationsItem from "./NotificationsItem";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    )
  }
  
  return ( 
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <NotificationsItem data={notification} />
        ))}
    </div>
   );
}
 
export default NotificationsFeed;