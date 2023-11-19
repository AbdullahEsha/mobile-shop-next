import React from 'react'

const UserInfo = () => {
  return (
    <>
      {/* create a form so that I can add user-name, email, phone number etc add some design also */}
      <div className="max-w-[1400px] px-[30px] flex flex-col justify-center items-center">
        <form action="./api/data" method="post">
          <div className="mb-5 flex flex-col">
            <label htmlFor="name" className="">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              className="border px-3 rounded-md border-gray-600 focus:outline-none w-fit"
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              className="border px-3 rounded-md border-gray-600 focus:outline-none w-fit"
            />
          </div>
          <button
            type="submit"
            className="py-1 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-md transition-all delay-150 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="h-20 bg-teal-400 mt-5"></div>
    </>
  )
}

export default UserInfo
