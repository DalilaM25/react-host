export const Home = () => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden rounded-radius my-2">
      <div className="absolute inset-0 bg-[url('./assets/png/home.png')] bg-cover bg-center blur-[2px]"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      <span
        className="font-title text-white text-[15rem] relative z-10
                 [text-shadow:_0_0_10px_rgb(255_255_255_/_80%),_0_0_20px_rgb(255_255_255_/_60%)]
                 animate-pulse [animation-duration:4s]"
      >
        MULTIHUB
      </span>
    </div>
  );
};
