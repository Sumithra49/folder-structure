import { useState } from "react";
import "./Folder.css";

const Folder = ({ explorer, handleAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    if (explorer.isFolder) setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-row">
        <div className="folder-name" onClick={toggleFolder}>
          {explorer.isFolder ? (isOpen ? "📂" : "📁") : "📄"} {explorer.name}
        </div>
        {explorer.isFolder && (
          <div className="folder-buttons">
            <button onClick={() => handleAdd(explorer.id, true)}>
              Folder +
            </button>
            <button onClick={() => handleAdd(explorer.id, false)}>
              File +
            </button>
          </div>
        )}
      </div>

      {isOpen && explorer.items && (
        <div style={{ marginLeft: "40px" }}>
          {explorer.items.map((item) => (
            <Folder key={item.id} explorer={item} handleAdd={handleAdd} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
