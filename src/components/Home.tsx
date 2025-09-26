export const Home = () => {
  return (
    <div className="relative w-full h-auto flex items-center justify-center overflow-hidden rounded-radius my-2">
      <div 
        className="absolute inset-0 bg-[url('./assets/png/home.png')] bg-cover bg-center blur-[2px] scale-105"
      ></div>
      <div className="absolute inset-0 bg-black/10"></div>
      <span className="font-title text-white text-[15rem] relative z-10 drop-shadow-2xl">
        MULTIHUB
      </span>
    </div>
  );
};