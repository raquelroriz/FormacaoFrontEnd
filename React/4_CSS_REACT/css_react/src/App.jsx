import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  // 4 - cass inline dinamico
  const n = 15

  // 5 - classes dinamicas
  const redTitle = true

  return (
    <div className='App'>
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2 - css no component */}
      <MyComponent />
      <p>Pegou CSS do component</p>
      {/* 3 - inline style */}
      <p style={{ color: "blue", padding: "25px", borderTop:"1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* 4 - iline style dinamico  */}
      <h2 style={n > 10 ? { color: "purple"} : { color: "magenta"}}>CSS dinâmico</h2>
      <h2 style={n > 20 ? { color: "purple"} : { color: "magenta"}}>CSS dinâmico</h2>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      {/* 6 - css modules */}
      <Title />
    </div>
  )
}

export default App
