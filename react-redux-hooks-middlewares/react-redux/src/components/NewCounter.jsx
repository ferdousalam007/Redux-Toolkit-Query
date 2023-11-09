/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

// eslint-disable-next-line react-refresh/only-export-components
function NewCounter({increment,decrement,count}) {
  return (
    <>
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button onClick={increment} className="bg-indigo-400 text-white px-3 py-2 rounded shadow">
            Increment
          </button>
          <button onClick={decrement} className="bg-red-400 text-white px-3 py-2 rounded shadow">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment:(value)=>dispatch(increment(value)),
        decrement:(value)=>dispatch(decrement(value))
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(NewCounter);
