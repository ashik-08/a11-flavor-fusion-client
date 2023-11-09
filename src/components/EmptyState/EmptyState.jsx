import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="flex justify-center items-center pt-[20%]">
      <div className="flex flex-col m-8 w-72 animate-pulse">
        <div className="h-32 rounded-t bg-blue-gray-100"></div>
        <div className="flex-1 rounded-b px-6 py-8 md:p-5 space-y-4 bg-gray-400">
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="flex gap-8">
            <div className="w-1/2 h-6 rounded bg-gray-300"></div>
            <div className="w-1/2 h-6 rounded bg-gray-300"></div>
          </div>
        </div>

        <p className="pt-4">No Food Items Found 🥺</p>

        <Link className="text-saffron" to="/">
          First add some..
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;
