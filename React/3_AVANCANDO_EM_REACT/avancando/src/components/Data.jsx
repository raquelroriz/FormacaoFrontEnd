import { useState } from "react";

const Data = () => {
  let someData = 10;

  const [anotherNumber, SetAnotherNumber] = useState(15)
  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => SetAnotherNumber(20)}>Mudar state</button>
      </div>
    </div>
  )
}

export default Data
