import React from 'react'

function ConditionalRender() {
  const x = 5;

  const name = "Raquel";

  return (
    <div>
      {/* 7 - render condicional */}
      <h3>Isso será exibido?</h3>
      {x > 2 && <p>X é maior que 2? Sim!</p>}

      {/* 8 - else */}
      <h3>Render ternário</h3>
      {name === "João" ?(
        <div>
          <p>Olá João</p>
        </div>
      ) : (
      <div> 
        <p>Nome não encontrado!</p>
      </div>
    )}
    </div>
  )
}

export default ConditionalRender
