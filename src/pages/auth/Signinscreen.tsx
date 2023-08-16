import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/home.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signinApi } from "../../apis/SigninApi";
import { useDispatch } from "react-redux";
import { user } from "../../global/GlobalState";

const Signinscreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
 

    signinApi({email, password}).then((res: any) => {
      dispatch(user(res));
      navigate("/screen/home");
      console.log("Loading")
    });
    reset()
  });

  return (
    <div
      className="w-full h-[100vh] bg-gray-100 flex items-center justify-center object-cover "
      style={{ backgroundImage: `url(${home})` }}
    >
      <form
        className="w-[600px] h-[300px] bg-white shadow-2xl bg-opacity-30 flex flex-col items-center  rounded-[20px]"
        onSubmit={onSubmit}
      >
        <div className="mt-[20px] text-[30px] font-semibold text-white">
          Signin
        </div>
       
        <div className="w-[400px] h-[40px] bg-white mt-[30px] rounded-[40px]">
          <input
            type="text"
            placeholder="Enter Email"
            className="h-[40px] border-none w-[400px] placeholder:ml-5 outline-none bg-gray-300 bg-opacity-5 px-4"
            {...register("email")}
          />
          {errors.email?.message && (
            <div className="text-red-600 text-[12px] flex justify-end">
              invalid email address
            </div>
          )}
        </div>
        <div className="w-[400px] h-[40px] bg-white mt-[30px] rounded-[40px]">
          <input
            type="text"
            placeholder="Password"
            className="h-[40px] border-none w-[400px] placeholder:ml-5 outline-none bg-gray-300 bg-opacity-5 px-4"
            {...register("password")}
          />
          {errors.password?.message && (
            <div className="text-red-600 text-[12px] flex justify-end">
              Passwords can only contain numbers
            </div>
          )}
        </div>
    
        <button
          type="submit"
          className="px-[15px] py-[5px] rounded-[5px] bg-black mt-3 text-white"
        >
          Signin
        </button>
        <div className="mt-[20px]">
          <div>
            Don't have an account?
            <Link
              to="/auth/signup"
              className="text-red-600 font-medium ml-[10px]"
            >
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signinscreen;
