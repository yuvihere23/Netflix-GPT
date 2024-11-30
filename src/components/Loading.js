const Loading = () => {
    return (
      <div className="flex justify-center mt-4 relative z-20"> {/* Higher z-index */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-black animate-bounce"></div>
          <div className="w-10 h-10 rounded-full bg-black animate-bounce delay-100"></div>
          <div className="w-10 h-10 rounded-full bg-black animate-bounce delay-200"></div>
        </div>
        <p className=" px-4 py-4 m-4 bg-black text-white ml-4 font-bold text-6xl">Fetching results, please wait...</p>
      </div>
    );
  };
  
  export default Loading;
  