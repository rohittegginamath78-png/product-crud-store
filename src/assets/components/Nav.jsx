import React from 'react'

const Nav = () => {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a href="/" className="px-5 py-3 rounded-xl border-blue-300 border">
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl">Category</h1>

        <ul className=" w-[80%] ">
          <li className="mb-3 flex items-center">
            <span className="h-[15px] w-[15px] bg-red-300 rounded-full inline-block mr-2 "></span>
            cat1
          </li>
          <li className="mb-3 flex items-center">
            <span className="h-[15px] w-[15px] bg-blue-300 rounded-full inline-block mr-2 "></span>
            cat1
          </li>
          <li className="mb-3 flex items-center">
            <span className="h-[15px] w-[15px] bg-green-300 rounded-full inline-block mr-2 "></span>
            cat1
          </li>
        </ul>
      </nav>
  )
}

export default Nav
