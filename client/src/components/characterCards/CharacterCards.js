import React from "react";
import { v4 as uuidv4 } from "uuid";
import TestImg from "../../images/test-character.png";

const characters = [
  //update with get request data from mongo db
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
];

const CharacterCards = () => {
  return characters.map((character) => (
    <>
      <div
        className="characterCard max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col"
        key={character.id}
      >
        <div className="absolute -top-10">
          <img
            className=" h-24 w-24 rounded-full object-cover characterImg"
            src={character.img}
            alt="character pic"
          />
        </div>
        <div className="mt-16 flex items-center flex-col justify-center">
          <h1 className="font-bold text-2xl mt-4 characterName ">
            {character.name}
          </h1>
          <p className="font-semibold text-xl text-gray-500 characterHP">
            HP: {character.HP}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterAttack">
            Attack: {character.attack}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterExperience">
            Experience: {character.experience}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterLevel">
            Level: {character.level}
          </p>
        </div>
        <div>
          <button className="resumeGame">Resume Game</button>
          <button className="deleteGame">Delete Game</button>
        </div>
      </div>
    </>
  ));
};

export default CharacterCards;