import './App.css';
import Title from "./components/Title"
import Hogwarts from "./components/Hogwarts"

function App() {
  return (
    <div className="App">
      <p>My first React app</p>
      <Title title="A list of Hogwarts Students and Professors" description="Not a very commplete list :)"/>
      <Hogwarts/>
    </div>
  );
}

export default App;
