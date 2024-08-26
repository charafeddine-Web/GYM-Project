import React from 'react';
import { ReactTyped } from "react-typed";

import { CheckIcon } from '@heroicons/react/20/solid'
export default function Header() {




    return (
        <>
            <div className="bg-gray-900 max-h-2xl">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="  relative isolate overflow-hidden bg-gray-900 px-6 pt-10  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        >
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                                <p className="text-indigo-500"> hi there!</p>
                                <br />
                                I Am a <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-pink-600 to-violet-500">
                                    <ReactTyped
                                        strings={['Personal trainer', "Nutrition coach", 'Physical trainer']}
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop
                                    />
                                </span>
                            </h2>
                            <p className="mt-6 text-l leading-8 text-gray-300">
                                sports coach specializing in physical preparation and nutrition, with more than five years of experience in various sports, including combat sports. I also support individuals in their physical transformation through private coaching.
                            </p>          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

                                <div class="relative group">
                                    <div
                                        class="relative w-40 h-12  text-center opacity-90 overflow-hidden rounded-xl bg-black z-10"
                                    >
                                        <div
                                            class="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                                        ></div>

                                        <div
                                            class="absolute flex items-center justify-center text-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black"
                                        >
                                            <button
                                                name="text"
                                                class="input  h-full opacity-90 w-full px-6  rounded-xl bg-black "
                                            >
                                                Get Started
                                            </button>
                                        </div>
                                        <div
                                            class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"
                                        ></div>
                                    </div>
                                </div>

                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center pt-10 lg:justify-start lg:w-1/2 lg:ml-8">
                            <img
                                src="/src/assets/coach2.png"
                                alt="coach gym"
                                className="saturate-150 w-100 h-full object-cover rounded-full border-4 border-indigo-500 shadow-xl  "
                            />
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
