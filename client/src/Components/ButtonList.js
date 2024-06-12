import React from "react";
import Button from "./Button";

const buttonList = [
  { name: "All" },
  { name: "Superhero Movies" },
  { name: "React" },
  { name: "Typscript" },
  { name: "Logan" },
  { name: "Music" },
  { name: "Movies" },
  { name: "Typescript" },
  { name: "Web Development" },
  { name: "Action" },
  { name: "Horror" },
];

const ButtonList = () => {
  return (
    <div className="flex mt-4">
      {buttonList.map((item, index) => (
        <Button key={index} name={item.name} />
      ))}
    </div>
  );
};

export default ButtonList;
