import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/GlobalState";
import { SiGoogletagmanager } from "react-icons/si";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="w-[200px] h-[100vh] flex items-center justify-center bg-gray-200 fixed">
      <div className=" flex flex-col w-[93%] h-[93%] justify-between items-center">
        <Link to="/screen/home">
          <div className="flex items-center ">
            <div>
              <SiGoogletagmanager className="w-[30px] h-[30px] font-serif font-black" />
            </div>
            <div className="ml-2">oneTask!</div>
          </div>
        </Link>
        <div className="flex flex-col w-[150px] justify-between h-[300px] items-center font-semibold">
          <Link to="/screen/create">Create Task</Link>
          <Link to="/screen/view">View Tasks</Link>
          <Link to="/screen/done">Done Task</Link>
        </div>
       <div>
       <button
          className="
            bg-gray-800
            py-[15px]
            px-[15px]
            rounded-[30px]
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
          <TbLogout2 />
          {isDropdownVisible && (
            <div className="absolute px-[2px] py-[2px] text-black  rounded-md mt-[5px] text-[18px] ml-[-25px] font-semibold duration-700 ">
              Logout
            </div>
          )}
        </button>
       </div>
      </div>
    </div>
  );
};

export default Header;
