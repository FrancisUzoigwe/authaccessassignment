interface iProps {
  text?: string;
  bg?: string;
  image?: any;
}

const Props: React.FC<iProps> = ({ text, bg, image }) => {
  return (
    <div className="w-[auto] h-[auto] flex justify-between mt-[9px]">
      <div className={`w-[70px] h-[70px] rounded-[70px] ${bg} flex items-center justify-center `}>
        <div className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">{image}</div>
      </div>
      <div className="w-[230px] h-[70px] rounded-[70px] bg-gray-300 flex items-center justify-center font-medium">{text}</div>
    </div>
  );
};

export default Props;
