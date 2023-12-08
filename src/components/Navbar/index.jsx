import React from "react";
import MenuList from "../MenuList";
import Button from "./Button";
import AccountProfile from "./AccountProfile";

const Navbar = () => {
  const mainMenus = [
    { name: 'My day', href: '/tasks/my-day', icon: '../assets/icon/target.svg', important: true },
    { name: 'Next 7 days', href: '/tasks/next-7days', icon: '../assets/icon/calendar.svg' },
    { name: 'All tasks', href: '/tasks', icon: '../assets/icon/note.svg' },
  ];

  const projectMenus = [
    { name: 'Grocery List', href: '/tasks/grocery-list' },
    { name: 'Work', href: '/tasks/work' },
    { name: 'Shopping', href: '/tasks/shopping' },
    { name: 'Personal', href: '/tasks/personal', important: true },
  ];

  const tagMenus = [
    { name: '#Priority', href: '/tasks/priority', color: 'text-orange-400' },
    { name: '#Urgent', href: '/tasks/urgent', color: 'text-red-400' },
  ];

  return (
    <>
      <aside className="hidden h-screen fixed lg:flex flex-col justify-between p-4 z-10">
        <div className="w-56 text-base">
          <AccountProfile />
          <MenuList data={mainMenus}/>
          <MenuList data={projectMenus} headerTitle={"Projects"}/>
          <MenuList data={tagMenus} headerTitle={"Tags"}/>
        </div>
        <div>
          <Button value={" Create Workspace "} styleButton={"bg-blue-600 border-blue-600 text-white hover:bg-blue-500"} />
        </div>
      </aside>
      <div className="lg:hidden fixed top-0 w-full">
        <div className="flex justify-between m-5 gap-2">
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
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
