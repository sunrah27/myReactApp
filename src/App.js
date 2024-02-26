import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        <Counter />
        {/* <Message /> */}

        {/* <Greet name="Bruce" heroName="Batman">
            <p>This is a child prop</p>
        </Greet>
        <Greet name="Clark"heroName="Superman">
            <button>Action</button>
        </Greet>
        <Greet name="Estelle" heroName="Child of the Fullmoon">

        </Greet>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark"heroName="Superman"/>
        <Welcome name="Estelle" heroName="Child of the Fullmoon"/>
        <Hello /> */}
    </div>
  );
}

export default App;
