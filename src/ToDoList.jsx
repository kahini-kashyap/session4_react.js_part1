import React, { useState } from 'react'

const ToDoList = () => {

  const [num, setNum] = useState(0)

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    setNum(num - 1);
  };

  function reset() {
    window.location.reload(false);
  }

  return (
    <>
      <div id = "main">
        <div id="center">
          <h1> {num} </h1>
          <div id="btn">
            <button onClick={dec} id = "btns"> Decrement </button>
            <button onClick={inc} id = "btns"> Increment </button>
          </div>
          <button onClick = {reset} id = "btns2">Reset</button>
        </div>
      </div>
    </>
  )
}

export default ToDoList;