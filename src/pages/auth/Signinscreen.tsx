import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/home.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {registerApi} from "../../apis/registerApi"
const Signinscreen = () => {
const navigate = useNavigate()
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
    const { name, email, password } = data;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);

    registerApi(formData).then(() => {
      navigate("/auth/signin")
    })
  });

  return (
    <div
      className="w-full h-[100vh] bg-gray-100 flex items-center justify-center object-cover "
      style={{ backgroundImage: `url(${home})` }}
    >
      <form
        className="w-[600px] h-[450px] bg-white shadow-2xl bg-opacity-30 flex flex-col items-center  rounded-[20px]"
        onSubmit={onSubmit}
      >
        <div className="mt-[20px] text-[30px] font-semibold text-white">
          Register
        </div>
        <div className="w-[400px] h-[40px] bg-white mt-[10px] rounded-[40px]">
          <input
            type="text"
            placeholder="Enter Name"
            className="h-[40px] border-none w-[400px] placeholder:ml-5 outline-none bg-gray-300 bg-opacity-5 px-4"
            {...register("name")}
          />
          {errors.name?.message && (
            <div className="text-red-600 text-[12px] flex justify-end">
              Error occured on the name
            </div>
          )}
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
        <div className="w-[400px] h-[40px] bg-white mt-[30px] rounded-[40px]">
          <input
            type="text"
            placeholder="Confrim Password"
            className="h-[40px] border-none w-[400px] placeholder:ml-5 outline-none bg-gray-300 bg-opacity-5 px-4"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <div className="text-red-600 text-[12px] flex justify-end">
              Passwords must match!
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-[15px] py-[5px] rounded-[5px] bg-black mt-3 text-white"
        >
          Signup
        </button>
        <div className="mt-[20px]">
          <div>
            {" "}
            Have an account already?{" "}
            <Link
              to="/auth/signin"
              className="text-red-600 font-medium ml-[10px]"
            >
              Signin
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signinscreen;
