import React from "react";
import { first } from "../../data"; // Correct the path if needed

const FirstTask = () => {
  return (
    <div className="first-task">
      {first.map((data) => (
        <div className="card" key={data.id}>
          <div className="logo">
            <span>{data.logo}</span>
          </div>
          <div className="text">
            <p className="title">{data.title}</p>
            <p className="description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstTask;