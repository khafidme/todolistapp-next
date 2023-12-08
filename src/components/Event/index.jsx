import React from "react";

const Event = () => {
  return (
    <>
      <div id="events" className="flex justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
          </svg>
          <span className="font-semibold">Events</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
        <div className="flex gap-2 items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M197.67,186.37a8,8,0,0,1,0,11.29C196.58,198.73,170.82,224,128,224c-37.39,0-64.53-22.4-80-39.85V208a8,8,0,0,1-16,0V160a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H55.44C67.76,183.35,93,208,128,208c36,0,58.14-21.46,58.36-21.68A8,8,0,0,1,197.67,186.37ZM216,40a8,8,0,0,0-8,8V71.85C192.53,54.4,165.39,32,128,32,85.18,32,59.42,57.27,58.34,58.34a8,8,0,0,0,11.3,11.34C69.86,69.46,92,48,128,48c35,0,60.24,24.65,72.56,40H168a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Z"></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z"></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="text-sm">
        <span className="block my-1 uppercase">All Day</span>
        <div className="flex gap-2 ml-9 mb-1 p-1 bg-red-400 text-white">
          <span className="text-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M156,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L113.22,54A55.9,55.9,0,0,0,88,48c-.59,0-1.16,0-1.74,0L83.37,31.71a8,8,0,1,0-15.75,2.77L70.5,50.82A56.1,56.1,0,0,0,47.23,65.67L33.61,56.14a8,8,0,1,0-9.17,13.11L38,78.77A55.55,55.55,0,0,0,32,104c0,.57,0,1.15,0,1.72L15.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,76,224h80a76,76,0,0,0,0-152ZM84.92,120.76a52.14,52.14,0,0,0-31,4.17,40,40,0,0,1,66.62-44.17A76.26,76.26,0,0,0,84.92,120.76Z"></path>
            </svg>
          </span>
          <small>35/50</small>
        </div>
        <div>
          <div className="flex">
            <div className="w-11 my-3">1PM</div>
            <div className="w-full">
              <div className="px-2 bg-blue-300 text-white">12:00PM-1.15PM</div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">2PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">3PM</div>
            <div className="w-full pt-5">
              <div className="px-2 mb-1 bg-blue-300 text-white">
                <small>report due</small>
                <p>3:30PM - 4.00PM</p>
              </div>
              <div className="px-2 -mb-6 bg-blue-300 text-white">
                <small>report due</small>
                <p>3:00PM - 3.30PM</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">4PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">5PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">6PM</div>
            <div className="w-full">
              <div className="mt-5 px-2 bg-blue-500 text-white">
                <small>report due</small>
                <p>6:00PM - 6.45PM</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">7PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">8PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">9PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">10PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">11PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11 my-3">12PM</div>
            <div className="w-full">
              <div className="mt-6">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
