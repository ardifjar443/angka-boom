import { useState } from "react";
import Box from "./box";
import GameOver from "./gameOver";

const AngkaBoom = () => {
  const [angka, setAngka] = useState(1);
  const [angkaPertama, setAngkaPertama] = useState(1);
  const [angkaKedua, setAngkaKedua] = useState(100);
  const [game, setGame] = useState(false);

  const [tebakan, setTebakan] = useState(0);
  const [randomNum, setRandomNum] = useState(generateRandomNum());

  function generateRandomNum() {
    let random = Math.floor(Math.random() * 100) + 1;
    while (random <= 10 || random >= 90) {
      random = Math.floor(Math.random() * 100) + 1;
    }
    return random;
  }
  const newGame = () => {
    setRandomNum(generateRandomNum());
  };
  return (
    <>
      <div className=" " style={{ backgroundColor: "#232946" }}>
        <div style={{ height: "10vh" }} className="p-6 flex justify-end">
          <a
            href="https://ardifjar443.github.io"
            target="_blank"
            className="bg-red-100 text-xl font-bold hover:bg-red-200 rounded-md flex items-center p-2"
          >
            Back to home Page
          </a>
        </div>
        <div
          className="flex flex-col items-center justify-center"
          style={{ height: "90vh" }}
        >
          {game ? (
            <GameOver angkaBoom={randomNum} game={setGame} newGame={newGame} />
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
              newGame={newGame}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AngkaBoom;
