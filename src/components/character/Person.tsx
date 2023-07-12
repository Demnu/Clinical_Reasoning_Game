import { useEffect, useState } from "react";
import Bob from "../../assets/bob.jpg";
import Liz from "../../assets/liz.jpg";
import SpeechBubble from "../../assets/speech_bubble.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Typography } from "@mui/material";

import { Button } from "@mui/material";
type personType = {
  id: number;
  name: string;
  age: number;
  imageUrl: string;
};

const bob: personType = {
  id: 1,
  name: "Bob",
  age: 52,
  imageUrl: Bob,
};
const liz: personType = {
  id: 2,
  name: "Liz",
  age: 39,
  imageUrl: Liz,
};
const complaints = [
  "I just can't get to sleep at night",
  "I've got this pain in my pelvis",
  "I keep getting really dizzy",
];
const persons = [bob, liz];
const Person = () => {
  const [person, setPerson] = useState<personType>({
    id: 0,
    name: "",
    age: 0,
    imageUrl: "",
  });
  const [complaint, setComplaint] = useState<string>("");
  const [showComplaint, setShowComplaint] = useState<boolean>(false);

  const clickHandler = () => {
    const randomComplaint =
      complaints[Math.floor(Math.random() * complaints.length)];
    setComplaint(randomComplaint);
    setShowComplaint(true);
  };

  useEffect(() => {
    const randomPerson = persons[Math.floor(Math.random() * persons.length)];
    setPerson(randomPerson);
  }, []);

  return (
    <div className=" flex justify-center pt-4 flex">
      {person && (
        <img src={person.imageUrl} alt="Logo" style={{ maxWidth: "22rem" }} />
      )}
      <div className=" mt-20 flex flex-col items-center">
        {!showComplaint && (
          <>
            <h1 className=" text-6xl mb-3">{person.name.toUpperCase()}</h1>
            <h1 className=" text-4xl mb-4">{person.age} YEARS OLD</h1>
            <Button onClick={clickHandler} color="primary">
              <ArrowForwardIcon color="primary" style={{ fontSize: 150 }} />
            </Button>
          </>
        )}
        {showComplaint && (
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "20rem",
              height: "20rem",
            }}
          >
            <img
              src={SpeechBubble}
              alt="Logo"
              style={{ width: "100%", height: "100%" }}
            />
            <p
              style={{
                fontSize: "1.5rem",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#000",
                padding: "0.5rem",
                textAlign: "center",
              }}
            >
              {complaint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Person;
