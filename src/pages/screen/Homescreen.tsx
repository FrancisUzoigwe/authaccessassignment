import { useDispatch } from "react-redux";
import { logOut } from "../../global/GlobalState";

const Homescreen = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="
            bg-[purple]
            py-[8px]
            px-[28px]
            rounded-[30px]
            text-[20px]
            font-bold
            transition-all
            duration-300
            hover:scale-[1.05]
                "
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Homescreen;
