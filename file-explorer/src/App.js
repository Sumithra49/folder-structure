import "./App.css";
import explorer from "./components/explorer";
import Folder from "./components/Folder";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">📁 File Explorer</h1>
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
