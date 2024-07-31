const InputArea = ({ title, placeholder, type, className }) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className="mb-2 text-gray-700 font-semibold">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 border bg-slate-50 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
      />
    </div>
  );
};

export default InputArea;
