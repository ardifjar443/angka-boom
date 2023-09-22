import { useState } from "react";
import Box from "./box";

const AngkaBoom = () => {
  const [angka, setAngka] = useState(1);
  const [angkaPertama, setAngkaPertama] = useState(1);
  const [angkaKedua, setAngkaKedua] = useState(100);
  return (
    <>
      <div
        className=" min-h-screen flex justify-center items-center"
        style={{ backgroundColor: "#232946" }}
      >
        <Box
          angka={angka}
          setAngka={setAngka}
          angkaPertama={angkaPertama}
          setAngkaPertama={setAngkaPertama}
          angkaKedua={angkaKedua}
          setAngkaKedua={setAngkaKedua}
        />
      </div>
    </>
  );
};

export default AngkaBoom;
