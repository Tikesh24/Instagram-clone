import { useSession } from 'next-auth/react';

function MiniProfile() {
    const { data: session } = useSession();
    console.log(session)
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
           <img 
            className="w-16 h-16 rounded-full border p-[2px]"
            src={session?.user?.image}
            alt=""
           />   
           <div>
               <h2>{session?.user?.username}</h2>
               <h3>Welcome to Instagram</h3>
           </div>
           <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
