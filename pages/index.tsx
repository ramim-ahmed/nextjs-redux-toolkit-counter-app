import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectValue } from "../slices/counterSlice";

const Home: NextPage = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full bg-gradient-to-l from-indigo-500 to-cyan-300 flex justify-center items-center">
      <div className=" container mx-auto px-10 py-10">
        <h1 className="text-2xl font-medium text-center text-white">
          Redux-Tookit-Counter App
        </h1>
        <h3 className="text-center text-white text-xl font-normal mt-5">
          Counter: {count}
        </h3>
        <div className="mt-10 flex justify-center space-x-10">
          <button
            onClick={() => dispatch(increment())}
            className=" bg-white px-10 py-4 rounded"
            type="button"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-white px-10 py-4 rounded"
            type="button"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
