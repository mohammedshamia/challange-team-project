import React from "react";
import RatingComponent from "./components/Rating";

function App() {
  return <div>
    <RatingComponent  value={0} precision={0} isReadOnly={false} isDisabled={false} name={'half-rating'} onChange={()=>{}}/>
  </div>;
}

export default App;
