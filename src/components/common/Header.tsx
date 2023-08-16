// import { useDispatch } from "react-redux";
// import { logOut } from "../../global/GlobalState";
// import { SiGoogletagmanager } from "react-icons/si";
// import { TbLogout2 } from "react-icons/tb";

// const Header = () => {
//   const dispatch = useDispatch();
 

//   return (
//     <div className="w-full h-[60px] flex items-center justify-center">
//       <div className="flex items-center justify-between w-[93%] h-[50px]">
//         <div className="flex items-center">
//           <div>
//             <SiGoogletagmanager className="w-[30px] h-[30px] font-serif font-black" />
//           </div>
//           <div className="ml-2">oneTask!</div>
//         </div>
//         <button
//           className="
//             bg-gray-800
//             py-[8px]
//             px-[8px]
//             rounded-[15px]
//             text-[16px]
//             font-bold
//             text-white
//             transition-all
//             duration-300
//             hover:scale-[1.05]
//                 "
//           onClick={() => {
//             dispatch(logOut());
//           }}
//         >
//           <TbLogout2 />
//           <div className="absolute px-[15px] py-[8px] text-[black] hover:cursor-pointer ml-[-40px] font-medium hidden">
//             Logout
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/GlobalState";
import { SiGoogletagmanager } from "react-icons/si";
import { TiArrowSortedDown } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";


const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="w-full h-[60px] flex items-center justify-center">
      <div className="flex items-center justify-between w-[93%] h-[50px]">
        <div className="flex items-center">
          <div>
            <SiGoogletagmanager className="w-[30px] h-[30px] font-serif font-black" />
          </div>
          <div className="ml-2">oneTask!</div>
        </div>
        <button
          className="
            bg-gray-800
            py-[8px]
            px-[8px]
            rounded-[15px]
            text-[16px]
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-[1.05]
          "
          onClick={() => {
            dispatch(logOut());
          }}
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <TbLogout2/> 
          {isDropdownVisible && (
            <div className="absolute px-[2px] py-[2px] text-black  rounded-md mt-[5px] text-[16px] ml-[-20px] font-normal">
              Logout
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

