export default function DummyCard() {
  return (
    <>
      <div className="bg-gray-50 shadow-lg rounded-xl w-3/4 h-[26%] mx-auto p-8 mb-4 border border-text-300 shadow-purple-200 filter blur-sm">
        <div className="text-xs justify-center bg-purple-200 shadow-md shadow-purple-300 text-black w-full h-10 rounded-lg p-2 mb-6 items-center flex font-bold  flex-col ">
          <div className="h-2 w-4/5 bg-gray-400 rounded-lg"></div>
        </div>
        <div className="h-2 w-full bg-gray-400 rounded-lg"></div>
        <div className="h-2 w-1/2 mt-2 bg-gray-400 rounded-lg"></div>
        <div className="h-2 w-1/3 mt-2 bg-gray-400 rounded-lg"></div>
      </div>
    </>
  );
}
