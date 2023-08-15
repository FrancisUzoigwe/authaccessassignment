import { Link } from "react-router-dom";
import { SiGoogletagmanager } from "react-icons/si";
import { useState } from "react";
const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScroll)

  return (
<div>
{
  scroll ? (<div className="flex items-center justify-center w-[100%] h-[50px] bg-gray-400 duration-durate fixed left-0 z-20">
  <div className="flex items-center justify-between w-[93%] h-[40px] text-white">
    <div className="flex items-center">
      <div>
        <SiGoogletagmanager className="w-[30px] h-[30px] font-serif font-black" />
      </div>
      <div className="ml-2">oneTask!</div>
    </div>
    <div>
      <Link to="/auth/signin" style={{ marginRight: "12px" }}>
        Signin
      </Link>
      <Link
        to="/auth/signup"
        style={{
          padding: "4px 15px",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      >
        Signup
      </Link>
    </div>
  </div>
</div>): (<div className="flex items-center justify-center w-[100%] h-[50px] bg-white fixed left-0">
      <div className="flex items-center justify-between w-[93%] h-[40px] transition-[all 350ms]">
        <div className="flex items-center">
          <div>
            <SiGoogletagmanager className="w-[30px] h-[30px] font-serif font-black" />
          </div>
          <div className="ml-2">oneTask!</div>
        </div>
        <div>
          <Link to="/auth/signin" style={{ marginRight: "12px" }}>
            Signin
          </Link>
          <Link
            to="/auth/signup"
            style={{
              padding: "4px 15px",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>)
}
</div>
  );
};

export default FirstHeader;
