import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className=" flex justify-center items-center flex-col pt-4">
      <h1 className=" text-4xl mb-6">Clinical Reasoning: The (Online) Game</h1>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900  mb-3">
        About the Game
      </h2>
      <div className="block p-6 w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-3">
        <p className="font-normal text-gray-70">
          The purpose behind this game is to help a medical student or doctor in
          training to develop clinical reasoning skills. This game is not
          competitive, and there is no “right answer”… You cannot “win”!! The
          aim of the game is to take a randomly generated presentation, and
          practice clinical reasoning by considering the symptoms, signs or
          results using different reasoning methods to generate a broad list of
          differential diagnoses. As more cards are drawn and more information
          becomes available, this differential diagnosis list will be refined.
          The game ends when it is no longer possible to explain all the
          information with a single diagnosis.
        </p>
      </div>
      <Link className="w-full max-w-2xl" to="/game">
        <button
          type="button"
          className="inline-block rounded w-full max-w-2xl bg-blue-600 hover:bg-blue-500 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white"
        >
          First Patient
        </button>
      </Link>
    </div>
  );
};

export default Home;
