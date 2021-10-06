import { useState } from "react";

const TutorialHome = () => {
  // let name = "Mario";
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(21);

  const handleUpdater = () => {
    // name = "Luigi";
    // console.log(name);
    setName("Vishal");
    setAge(22);
  };

  const [sent, setSent] = useState("Click the button to update the sentence");
  const sentUpdater = () => {
    setSent("This is a new sentence");
  };

  const handleClick = (e) => {
    console.log("Hello, bloggers", e.target);
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2> Homepage </h2>

      <div className="hooks">
        <p>
          {name} is {age} years old
        </p>
        <p>{sent}</p>
        <button onClick={sentUpdater}>Click here to update sentence</button>
        <button onClick={handleUpdater}>Click me to update Name and age</button>
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickAgain("Vishal", e)}>
          Click Me Again
        </button>
      </div>
    </div>
  );
};

export default TutorialHome;
