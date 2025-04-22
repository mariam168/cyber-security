const Button = ({ text, onClick, bgColor = "bg-[#0F318E]", hoverColor = "hover:bg-[#22D030]" }) => {
    return (
      <button
        onClick={onClick}
        className={`mt-6 ${bgColor} px-6 py-3 rounded-lg font-semibold text-white ${hoverColor} transition`}
      >
        {text} →
      </button>
    );
  };
  
  export default Button;
  