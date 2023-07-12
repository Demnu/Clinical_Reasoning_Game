import { useEffect, useState } from "react";
import Bob from "../../assets/bob.jpg";
import Liz from "../../assets/liz.jpg";
import Loading from "../../assets/loading.jpg";
import SpeechBubble from "../../assets/speech_bubble.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
const bill: personType = {
  id: 1,
  name: "Bill",
  age: 67,
  imageUrl: Bob,
};
const liz: personType = {
  id: 2,
  name: "Liz",
  age: 39,
  imageUrl: Liz,
};
const margo: personType = {
  id: 2,
  name: "Margo",
  age: 65,
  imageUrl: Liz,
};
const complaints = [
  "I just can't get to sleep at night",
  "I've got this pain in my pelvis",
  "I keep getting really dizzy",
  "I have a persistent headache that won't go away",
  "My stomach feels bloated and uncomfortable",
  "I'm experiencing shortness of breath",
  "I have a constant runny nose and sneezing",
  "I've been feeling extremely tired all the time",
  "I've been having frequent heartburn and acid reflux",
  "I'm having trouble focusing and concentrating",
  "I've been experiencing frequent muscle cramps",
  "I have a constant ringing in my ears",
  "I'm having difficulty swallowing",
  "I've been experiencing chest pain and discomfort",
  "I keep getting frequent nosebleeds",
  "I have a persistent cough that won't go away",
  "I'm experiencing joint pain and stiffness",
  "I've been having trouble with my vision",
  "I have a skin rash that's causing itching and irritation",
  "I'm experiencing frequent mood swings",
];
const persons = [bob, liz, margo, bill];
const Person = () => {
  const [person, setPerson] = useState<personType>({
    id: 0,
    name: "",
    age: 0,
    imageUrl: Loading,
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
    <div className=" flex justify-center pt-4 flex-wrap">
      {person && (
        <div className=" flex justify-center w-80">
          <img src={person.imageUrl} alt="Logo" style={{ maxWidth: "22rem" }} />{" "}
        </div>
      )}
      <div className="mt-20 flex flex-col items-center w-80  ">
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
