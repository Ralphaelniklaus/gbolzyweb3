import React from 'react'
import {Link} from 'react-router-dom'
import About from '../About/About'

function Home() {
  return (
    <>
    <main className=" flex items-center w-[90vw] mx-auto h-[88vh] max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center">
                    <h1 className="text-2xl tracking-tight font-bold text-slate-800 dark:text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl">
                      <span className="inline">
                      <span className=" text-indigo-600 inline">The Ultimate,</span>{" "}
                         web3</span>{' '}
                      <span className=" text-indigo-600 inline">Third-party</span>{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                      Subscriptions Protocol.
                      </span>
                    </h1>
                    <p className="hidden sm:block mt-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200 sm:mt-5 sm:max-w-xl mx-auto md:mt-5">
                    Buy and sell digital items across the globe for free. Allows artistes, creators and artists all over the world create their collections for free and allows their fans patronize them by purchasing their collection items all for free.
                    </p>
                    <p className='sm:hidden text-xs text-gray-800 dark:text-gray-200 pt-4'>Buy and sell digital items across the globe for free.</p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                      <div className="rounded-md shadow">
                        <Link
                          to="/marketplace"
                          className="bttn bttn-primary md:px-16"
                        >
                          Explore
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-6">
                        <Link className="bttn bttn-secondary" to="/collection/create">
                          Create a collection
                        </Link>
                      </div>
                </div>
            </div>
          </main>
    <About />
    </>
  )
}

export default Home