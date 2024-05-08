import logo from './LogoIcon.png';
import './App.css';
import WorkoutManager from './WorkoutManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Workout Manager!</h1>
        <ul>
          <li>Enter an exercise that you want to do in the box below, then hit Enter on your keyboard to commit it to the Workout Manager.</li>
        </ul>
        <ul>
          <li>Once you have completed an exercise, click the 'Completed' button underneath to remove it.</li>
        </ul>
        <WorkoutManager/>
      </header>
    </div>
  );
}

export default App;