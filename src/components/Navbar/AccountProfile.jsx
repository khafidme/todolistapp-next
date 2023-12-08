import React from 'react'
import Button from './Button'

const AccountProfile = () => {
  return (
    <div className="pb-4">
      <div className="flex justify-between gap-2 mb-4">
        <div className="flex items-center">
          <div>
            <img
              className="rounded-full"
              src="https://raw.githubusercontent.com/khafidme/fe-todolistapp/main/src/assets/hazar.jpg"
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div className="ml-2">
            <a href="#">
              <h5 className="font-bold">Hazar</h5>
            </a>
            <small className="text-gray-500">Free Plan</small>
          </div>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Button value={"Go Premium"} styleButton={"border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"} />
      </div>
    </div>
  )
}

export default AccountProfile