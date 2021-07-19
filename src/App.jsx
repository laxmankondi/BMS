


//Hoc
import DefaultHOC from "./HOC/Default.HOC";

//components
import Temp from "./components/Temp";

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Temp} />  
     </>
  );
}

export default App;
