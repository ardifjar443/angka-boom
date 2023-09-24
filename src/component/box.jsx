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
    if (props.angka >= props.angkaPertama+1 && props.angka <= props.angkaKedua-1) {
      setPeringatan(false);
      props.setTebakan(props.angka);
      if (props.angka == props.angkaRandom) {
        props.game(true);
      } else if (props.angka > props.angkaRandom) {
        props.setAngkaKedua(props.angka);
      } else {
        props.setAngkaPertama(props.angka);
      }
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
            Angka Boom : random angka : {props.angkaRandom} : tebakan :{" "}
            {props.tebakan}
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
            className={` w-1/2 bg-violet-400 text-white p-2 rounded-t-lg  ${
              peringatan ? "block" : "hidden"
            }`}
          >
            masukan angka antara {props.angkaPertama+1} sampai {props.angkaKedua-1}
          </div>
          <input
            className=" w-1/2 text-center text-3xl font-bold text-red-200 hover:text-red-300  border-2 border-violet-400 "
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
