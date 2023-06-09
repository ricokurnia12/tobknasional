export const Button = ({ children, className }) => {
  return (
    <button className="text-sm lg:text-lg  bg-secondary hover:bg-yellow-500 active:scale-95 text-[#242424] font-bold py-2 px-4 rounded-xl mt-8">
      {children}
    </button>
  );
};
