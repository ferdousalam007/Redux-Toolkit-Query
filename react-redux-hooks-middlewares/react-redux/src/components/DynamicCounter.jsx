import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/dynamicCounter/actions";


export default function DynamicCounter(){
    const count = useSelector(state=>state.dynamicReducer.value);
    const dispatch = useDispatch();
    const dynamicIncrement=(value)=>{
        dispatch(increment(value))
    }
    const dynamicDecrement=(value)=>{
        dispatch(decrement(value))
    }
    return(
        <>
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
           onClick={()=>dynamicIncrement(100)}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={()=>dynamicDecrement(10)}
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
        </>
    )
}