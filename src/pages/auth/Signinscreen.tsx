import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/home.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signinApi } from "../../apis/SigninApi";
import { useDispatch } from "react-redux";
import { user } from "../../global/GlobalState";
import Swal from "sweetalert2";
import "animate.css";

const Signinscreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

    console.log(data);
    signinApi({ email, password }).then((res: any) => {
    if(res){
      dispatch(user(res));
      navigate("/screen/home");
      Swal.fire({
        title: "Welcome back on the platform😊",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }else{
      Swal.fire({
        title: "Error occured while signing in",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        icon:"error",
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/auth/signin")
    }
   
    });
    // reset();
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
            <div className="text-white text-[12px] flex justify-end">
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
            <div className="text-white text-[12px] flex justify-end">
              Passwords can only contain numbers
            </div>
          )}
        </div>

        <button
          type="submit"
          className="px-[15px] py-[5px] rounded-[5px] bg-black mt-5 text-white"
        >
          Signin
        </button>
        <div className="mt-[10px]">
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
