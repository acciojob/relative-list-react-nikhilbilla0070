import React from "react";

const App = () => {
  const relativeList = [
    'Nikhil',
    'Kittu',
    'Raju',
    'Sai'
  ];

  return (
    <div id="main">
    <ol key="relativeList">
      <li key="relativeListItem1">{relativeList[0]}</li>
      <li key="relativeListItem2">{relativeList[1]}</li>
    </ol>          
    </div>
  )
}

export default App
