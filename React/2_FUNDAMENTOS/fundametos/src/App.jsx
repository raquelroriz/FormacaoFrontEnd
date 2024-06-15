import "./App.css";

// 2 - importando componente
import FirstComponent from "./components/FirstComponent";

// 4 - template expression
import TemplateExpressions from "./components/TemplateExpressions";

// 5 - hierarquia de componentes
import MyComponent from "./components/MyComponent";

// 6 - eventos
import Events from "./components/Events";

function App() {
  // 3 - comentarios
  return (
    <div className="App">
      {/* 3 - comentarios  JSX */}
      <h1>Fundamentos do React </h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
