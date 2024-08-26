'use client'
import Link from "next/link";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color={"#ffffff"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div className="my-8 flex flex-col justify-center text-white h-[44vh] items-center gap-4">
            <div className="font-bold text-5xl flex gap-2 justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
              <span><img src="icons/coins.gif" width={50} alt="" /></span>
              Fund Spark 
            </div>
            <p className="text-center">A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
            <div>
              <Link href={'/login'}>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
              </Link>
              <Link href={'/read-more'}>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
              </Link>
              <div className="py-1 flex flex-col justify-center items-center">
                <Link href={'/profiles'}>
                  <button type="button" className="mx-auto w-auto text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Fund Raisers</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white h-1 opacity-10"></div>

          <div className="text-white container mx-auto pb-20 pt-14 px-10">
            <h2 className="text-3xl font-bold text-center mb-14">Your fans can help fund your spark!</h2>
            <div className="flex gap-5 justify-around ">
              <div className="w-1/3 item space-y-3 flex flex-col items-center justify-center">
                <img src="icons/man.gif" alt="" className="bg-slate-900 rounded-full p-1 text-black" width={88} />
                <p className="font-bold text-center">Fans want to help</p>
                <p className="text-center">Help creators by donating</p>
              </div>
              <div className="w-1/3 item space-y-3 flex flex-col items-center justify-center">
                <img src="icons/coin.gif" alt="" className="bg-slate-900 rounded-full p-1 text-black" width={88} />
                <p className="font-bold text-center">Fans want to help</p>
                <p className="text-center">Your Fans are available to help you</p>
              </div>
              <div className="w-1/3 item space-y-3 flex flex-col items-center justify-center">
                <img src="icons/group.gif" alt="" className="bg-slate-900 rounded-full p-1 text-black" width={88} />
                <p className="font-bold text-center">Fund new Ideas</p>
                <p className="text-center">Innovate and Create new Projects and Ideas</p>
              </div>
            </div>
          </div>

          <div className="bg-white h-1 opacity-10"></div>

          <div className="text-white container mx-auto pb-32 pt-14 flex flex-col justify-center items-center px-4">
            <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
            <div className="w-full max-w-4xl">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qaTB_u1THVs?si=mCpcEpb4arO6xG85"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
