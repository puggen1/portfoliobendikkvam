import Header from "./components/header";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Projects/>
      <Contact  />
    </div>
  );
}

export default App;
