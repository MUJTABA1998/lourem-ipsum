import { useState } from "react";
import "./App.css";
import Paragraph from "./data";

function App() {
  const [input, setinput] = useState();
  const [text, setText] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    let amount = input;
    if (amount > Paragraph.length) {
      amount = Paragraph.length;
    }
    if (amount <= 0) {
      amount = 1;
    }
    setText(Paragraph.slice(0, amount));
  };

  console.log(input);
  return (
    <div className="w-full h-screen">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center gap-16">
          <h1 className="text-xl font-semibold tracking-wider text-center capitalize md:text-4xl text-secondary">
            try some boring loram ipsum
          </h1>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            <h1 className="text-lg tracking-wider text-secondary">
              Paragraph:{" "}
            </h1>
            <div>
              <input
                type="number"
                placeholder="0"
                className="py-2 pl-3 outline-none appearance-none w-[100px] text-secondary input-number"
                onChange={(e) => setinput(parseInt(e.target.value))}
              />
              <button
                className="px-3 py-2 bg-[#ffbe76] text-white capitalize"
                onClick={handleSumbit}
              >
                sumbit
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 py-10">
            {text.map((txt, index) => (
              <p
                key={index}
                className="text-xs py-5 px-5 rounded-lg text-white max-w-[700px] mx-auto text-center drop-shadow-xl bg-[#ffbe76]"
              >
                {txt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
