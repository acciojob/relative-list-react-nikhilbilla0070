import React from "react";
import { useState } from "react";

const App = () => {
  const relativeList = [
    'Nikhil',
    'Kittu',
    'Raju',
    'Sai'
  ];

  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
      {relativeList.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>
          {relative}
        </li>
      ))}
    </ol>
               
    </div>
  )
}

export default App
