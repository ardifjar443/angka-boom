import { useState } from "react";

const Box = (props) => {
  const [peringatan, setPeringatan] = useState(false);
  const handleChange = (e) => {
    props.setAngka(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Return") {
      enter();
    }
  };
  const enter = () => {
    if (props.angka >= props.angkaPertama && props.angka <= props.angkaKedua) {
      setPeringatan(false);
    } else {
      setPeringatan(true);
    }
  };

  return (
    <>
      <div
        className=" container mx-auto rounded-xl text-center pb-10 pt-10"
        style={{ backgroundColor: "#fffffe" }}
      >
        <div>
          <h1 className=" text-2xl text-b  hover:text-violet-400">
            Angka Boom
          </h1>
        </div>
        <div className=" m-5">
          <p>
            Tebak Angka dari <span>{props.angkaPertama + " "}</span>
            sampai <span>{props.angkaKedua}</span>
          </p>
        </div>
        <div className=" text-center flex flex-col justify-center items-center  ">
          <div
            className={` w-1/2 bg-violet-400 ${
              peringatan ? "block" : "hidden"
            }`}
          >
            hello world
          </div>
          <input
            className="text-center text-3xl font-bold text-red-200 hover:text-red-300"
            type="text"
            value={props.angka}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            tabIndex="0"
          />
        </div>
        <div className="mt-4">
          <button
            className="bg-violet-300 font-bold hover:bg-violet-400 rounded-md p-2"
            onClick={enter}
            onKeyDown={handleKeyPress}
            tabIndex="0"
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default Box;