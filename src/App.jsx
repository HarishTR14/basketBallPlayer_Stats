import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard";
import { playerData } from "./playerData";
import "./index.css";
const App = () => {
  return (
    <div className="app-container">
      {playerData.map((player, index) => (
        <BasketballPlayerCard
          key={index}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
};

export default App;
