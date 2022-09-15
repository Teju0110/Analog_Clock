import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const deg = 6;

  const [hh, setHh] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  const time = () => {
    var day = new Date();
    setHh(day.getHours() * 30);
    setMin(day.getMinutes() * deg);
    setSec(day.getSeconds() * deg);
  };

  setInterval(time,1000)

  return (
    <div className="App" >
      <div className="hour" style={{transform:`rotateZ(${hh+min/12}deg)`}}></div>
      <div className="min"  style={{transform:`rotateZ(${min}deg)`}}></div>
      <div className="sec"  style={{transform:`rotateZ(${sec}deg)`}}></div>
    </div>
  );
}

export default App;
