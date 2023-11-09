import { Provider } from "react-redux";

import store from "./redux/store";
import NewCounter from "./components/NewCounter";
import HooksCounter from "./components/HooksCounter";
import DynamicCounter from "./components/DynamicCounter";
function App() {
  return (
    <Provider store={store}>
  
      <center>
        <h1>hello react redux</h1>
      </center>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* header */}
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Applications
        </h1>
        {/* counters */}
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <NewCounter/>
          <HooksCounter/>
          <DynamicCounter/>
        </div>
      </div>
    
    </Provider>
  );
}

export default App;
