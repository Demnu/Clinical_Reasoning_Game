import { Link } from "react-router-dom";
import About from "../components/character/About";
import Person from "../components/character/Person";
const Game = () => {
  return (
    <div className=" flex justify-center items-center flex-col pt-4">
      <h1 className=" text-4xl mb-6">Clinical Reasoning: The (Online) Game</h1>

      <div className="block p-6 w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow  mb-3">
        <Person />
      </div>

      <Link className="w-full max-w-2xl" to="/">
        <button
          type="button"
          className="inline-block rounded w-full max-w-2xl bg-blue-600 hover:bg-blue-500 px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white"
        >
          Home
        </button>
      </Link>
    </div>
  );
};

export default Game;
