const GameOver = (props) => {
  return (
    <>
      <div
        className=" p-4 rounded-md flex flex-col justify-center text-center align-middle"
        style={{ backgroundColor: "#fffffe" }}
      >
        <div>
          <span className=" text-3xl">Game Over</span>
        </div>
        <div className="m-6">
          <span>Angka Boom nya adalah :{props.angkaBoom}</span>
        </div>
        <div>
          <button
            className="bg-red-200 rounded-md p-2 hover:bg-red-300"
            onClick={() => {
              props.game(false);
              props.newGame();
            }}
          >
            New Game
          </button>
        </div>
      </div>
      <div className=" text-white mt-4">
        code by
        <a
          href="https://github.com/ardifjar443"
          className="ms-2"
          target="_blank"
        >
          Ardifjar443
        </a>
      </div>
    </>
  );
};

export default GameOver;
