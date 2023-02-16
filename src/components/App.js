import React from "react";
import { useState } from "react";

const App = () => {
  const [relativeList,setRealtiveList]=useState();
  const [relativeListItem1,setRealtiveListItem1]=useState();

  const [relativeListItem2,setRealtiveListItem2]=useState();

  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={relativeList}>
                 <li key={relativeListItem1}>Nikhil</li>
                 <li key={relativeListItem2}>Nikki</li>
               </ol>
               
    </div>
  )
}

export default App
