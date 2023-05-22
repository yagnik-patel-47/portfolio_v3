import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const ThemePopover = () => {
  const [showDark, setShowDark] = useState(
    localStorage.theme === "dark" ||
      (localStorage.theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-3 cursor-pointer lg:ml-10" aria-label="themebtn">
          {showDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white dark:bg-neutral-800 rounded-md p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-20 space-y-2"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="group text-[13px] leading-none text-neutral-800 dark:text-white rounded-[3px] flex items-center h-[25px] px-4 relative select-none outline-none data-[highlighted]:bg-[#d8e6ef] dark:data-[highlighted]:bg-neutral-700 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none space-x-3"
            onSelect={() => {
              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
                setShowDark(true);
              } else {
                document.documentElement.classList.remove("dark");
                setShowDark(false);
              }
              localStorage.setItem("theme", "system");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>

            <span>System</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[13px] leading-none text-neutral-800 dark:text-white rounded-[3px] flex items-center h-[25px] px-4 relative select-none outline-none data-[highlighted]:bg-[#d8e6ef] dark:data-[highlighted]:bg-neutral-700 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none space-x-3"
            onSelect={() => {
              document.documentElement.classList.remove("dark");
              setShowDark(false);
              localStorage.setItem("theme", "light");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
            <span>Light</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[13px] leading-none text-neutral-800 dark:text-white rounded-[3px] flex items-center h-[25px] px-4 relative select-none outline-none data-[highlighted]:bg-[#d8e6ef] dark:data-[highlighted]:bg-neutral-700 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none space-x-3"
            onSelect={() => {
              document.documentElement.classList.add("dark");
              setShowDark(true);
              localStorage.setItem("theme", "dark");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>

            <span>Dark</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemePopover;
