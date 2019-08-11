import React from "react";

const Child = function(props) {
  const ToggleDiv = props.toggleState ? 
  <div>IS toggled</div> : <div>IS not toggled</div>
  return (
    <div>
      <h2>Child Component</h2>
      {ToggleDiv}
    </div>
  );
}

export default Child;