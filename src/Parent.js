import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor]= useState("#FFF")

function handleColorChange(newChildColor){
  const newRandomColor= getRandomColor()
  setColor(newRandomColor)
  setChildrenColor(newChildColor)
}

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleColorChange} color={childrenColor}/>
      <Child onChangeColor={handleColorChange} color={childrenColor}/>
    </div>
  );
}

export default Parent;
