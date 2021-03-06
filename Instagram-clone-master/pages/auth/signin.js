import { getProviders, signIn as SignInProvider } from "next-auth/react"
import Header from "../../components/Header"
import INSTAGRAM_TEXT from '../../public/assests/instagram_text.png';

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
        <img className="w-80" src='../../assests/instagram_text.png' alt="" />
        <p className="font-xs italic">
            This is not a real app, it is only for educational purpose.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignInProvider(provider.id, {callbackUrl: "/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
