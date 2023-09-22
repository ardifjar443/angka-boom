import { useState } from "react";
import Box from "./box";

const AngkaBoom = () => {
  const [angka, setAngka] = useState(1);
  const [angkaPertama, setAngkaPertama] = useState(1);
  const [angkaKedua, setAngkaKedua] = useState(100);
  const [game, setGame] = useState(false);

  const [tebakan, setTebakan] = useState(0);
  const [randomNum, setRandomNum] = useState(generateRandomNum());

  function generateRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
  const newGame = () => {
    setRandomNum(generateRandomNum());
  };
  return (
    <>
      <div
        className=" min-h-screen flex justify-center items-center"
        style={{ backgroundColor: "#232946" }}
      >
        {game ? (
          ""
        ) : (
          <Box
            angka={angka}
            setAngka={setAngka}
            angkaPertama={angkaPertama}
            setAngkaPertama={setAngkaPertama}
            angkaKedua={angkaKedua}
            setAngkaKedua={setAngkaKedua}
            angkaRandom={randomNum}
            tebakan={tebakan}
            setTebakan={setTebakan}
            game={setGame}
          />
        )}
      </div>
    </>
  );
};

export default AngkaBoom;
