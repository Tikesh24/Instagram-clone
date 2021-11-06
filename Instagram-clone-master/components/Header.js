import Image from 'next/image';
import INSTAGRAM_TEXT from '../public/assests/instagram_text.png';
import INSTAGRAM_LOGO from '../public/assests/insta-logo.png';
import PROFILE_PICTURE from '../public/assests/pp.jpg';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter }  from  'next/router';
import { useRecoilState } from 'recoil';


import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from '@heroicons/react/outline'
import { modalState } from '../atoms/ModalAtom';

function Header() {

    const { data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                {/* left header */}
                <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid w-24">
                    <Image src={INSTAGRAM_TEXT} layout='fill' objectFit="contain" />
                </div>
                <div onClick={()=> router.push("/")}  className="relative w-10 h-10 mt-3 lg:hidden flex-shrink-0">
                    <Image src={INSTAGRAM_LOGO} layout='fill' objectFit="contain" />
                </div>

                {/* Middle - Search input field */}
                <div className="max-w-xs">
                    <div className="relative p-3 rounded-md ">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500 pl-2" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-5 text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <MenuIcon className="h-6 md:hidden cursor-pointer " />
                    <HomeIcon onClick={() => router.push("/")} className="navBtn" />
                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45" />
                                <div className="absolute -top-1 -right-2 text-xs w-4 h-4 bg-red-600 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                            </div>
                            <PlusCircleIcon onClick={()=> setOpen(true)} className="navBtn" />
                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img 
                                onClick={signOut}
                                priority='true' 
                                src={session.user.image} 
                                alt="profile picture" 
                                className="h-10 rounded-full" 
                            />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header