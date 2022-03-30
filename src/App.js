import "./App.scss";

import { useCallback, useState } from "react";
import Hero from "./components/Hero";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [count, setCount] = useState(0);

  //   const handleHeroClick = () => {}; //ve ban chat khi no render du lieu van the ,nhung van de o day la ve mat tham chieu no se co dia chi khac nhau
  //nen cung kieu du lieu nhung van bij re-render
  //De chi render 1 lan khong bi re-render 1,useCallback co 1 function va dependencies va tra ve function
  const handleHeroClick = useCallback((type) => {}, []);

  //useMemo se dung cho dang data
  //const data=useMemo(() =>[{},{},{}], [])

  return (
    <div className="app">
      <h1>React Hooks</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {/* cho du su dung react.memo nhung no van re-render */}
      <Hero name="Easy Front-end" onClick={handleHeroClick} />
    </div>
  );
}

export default App;
