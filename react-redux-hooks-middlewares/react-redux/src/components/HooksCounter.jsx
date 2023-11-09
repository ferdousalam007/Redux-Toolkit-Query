/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

// eslint-disable-next-line react-refresh/only-export-components
export default function Hookscounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementDispatch = () => {
    dispatch(increment());
  };
  const handleDecrementDispatch = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            onClick={handleIncrementDispatch}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={handleDecrementDispatch}
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
