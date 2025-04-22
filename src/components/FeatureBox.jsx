const FeatureBox = ({ text, bgColor = "bg-green-600" }) => {
    return (
      <div className={`flex items-center ${bgColor} px-2 py-1 rounded-md`}>
        <span className="ml-2 font-semibold">{text}</span>
      </div>
    );
  };
  
  export default FeatureBox;
  