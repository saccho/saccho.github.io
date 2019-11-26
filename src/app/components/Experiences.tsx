import React from "react";
import Experience from "./Experience";
import experiences from "../data/values/experiences";

const Experiences: React.FC = () => {
  const expList = [];

  for (const i in experiences) {
    expList.push(
      <Experience
        key={i}
        date={experiences[i].date}
        name={experiences[i].name}
        status={experiences[i].status}
      />
    );
  }

  return <div>{expList}</div>;
};

export default Experiences;
