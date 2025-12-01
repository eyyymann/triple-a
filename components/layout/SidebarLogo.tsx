import { useRouter } from "next/router";
import { BiAt } from "react-icons/bi";
import { BsSpeaker, BsSpeakerFill, BsTwitter, BsYelp } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div 
            onClick={() => router.push('/')}
            className="
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                hover:bg-blue-300
                hover:bg-opacity-10
                cursor-pointer
                transition
        ">
            <BiAt
                size={28}
                color="white"
            />
        </div>
    );
}

export default SidebarLogo;