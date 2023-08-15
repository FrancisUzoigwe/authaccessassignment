import Props from "../../components/static/Props";
import Props2 from "../../components/static/Props2";
import { BsDatabase } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { TbBoxMultiple } from "react-icons/tb";
import { AiOutlineCloudUpload } from "react-icons/ai";
import project from "../../assets/project.webp";
import remove from "../../assets/removes.png";
import { RiSecurePaymentLine } from "react-icons/ri";
import convo from "../../assets/convo.webp";

const LandingScreen = () => {
  return (
    <div className="w-full h-[120vh] flex ">
      {/* <div> */}
      <div className="mt-[60px] w-full h-[auto]  items-center justify-center">
        <div className="w-[93%] h-[350px] rounded-lg flex items-center justify-between ml-[48px]">
          <div className="w-[24%] h-[330px] rounded-[30px]">
            <div className="">
              <Props
                text="Integrations"
                bg="bg-gray-300"
                image={<BsDatabase className="h-[30px] w-[30px]" />}
              />
              <Props2
                text="Analytics"
                bg="bg-gray-300"
                image={<GrAnalytics className="h-[30px] w-[30px]" />}
              />
              <Props
                text="Messages"
                bg="bg-gray-300"
                image={<TiMessages className="h-[30px] w-[30px]" />}
              />
              <Props2
                text="Multi-tasking"
                bg="bg-gray-300"
                image={<TbBoxMultiple className="h-[30px] w-[30px]" />}
              />
            </div>
          </div>
          <img
            className="w-[24%] h-[330px] rounded-[30px] relative flex items-end justify-center object-cover"
            src={project}
            alt="project"
          ></img>
          <div className="absolute w-[60px] h-[60px] bg-black rounded-[140px] mb-[250px] ml-[540px] flex items-center justify-center">
            <div>
              <AiOutlineCloudUpload className="w-[30px] h-[30px] text-white" />
            </div>
          </div>
          <div
            className="absolute w-[250px] h-[50px] bg-opacity-75 bg-gray-400 rounded-[140px] ml-[350px]  mt-[240px] flex items-center 
          justify-center font-semibold"
          >
            Over 2,000+ users
          </div>
          <div className="w-[49%] h-[330px] rounded-[30px] bg-right flex items-center justify-around border bg-gray-100">
            <div className="w-[250px] h-[260px] rounded-[20px] flex-col flex items-center justify-center">
              <div className="w-[230px] h-[80px] bg-purple-500 mb-[20px] rounded-[20px] flex items-center justify-evenly">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-white flex items-center justify-center">
                  <RiSecurePaymentLine className="w-[30px] h-[30px]" />
                </div>
                <div className="font-medium mr[30px]">Security</div>
              </div>
              <img className="w-[230px] h-[150px] bg-purple-500 rounded-[20px] object-cover" src={convo}></img>
            </div>
            <img
              className="w-[330px] h-[310px] object-cover"
              src={remove}
            ></img>
          </div>
        </div>
        <div className="w-full h-[375px]"></div>
      </div>
    </div>
    // </div>
  );
};

export default LandingScreen;
