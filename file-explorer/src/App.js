import { useState } from "react";
import "./App.css";
import initialExplorer from "./components/explorer";
import Folder from "./components/Folder";

function App() {
  const [explorer, setExplorer] = useState(initialExplorer);

  const addFolderOrFile = (folder, folderId, name, isFolder) => {
    if (folder.id === folderId && folder.isFolder) {
      const newItem = {
        id: Date.now().toString(),
        name,
        isFolder,
        items: isFolder ? [] : [],
      };
      return { ...folder, items: [...folder.items, newItem] };
    }

    if (folder.items && folder.items.length > 0) {
      return {
        ...folder,
        items: folder.items.map((file) =>
          addFolderOrFile(file, folderId, name, isFolder)
        ),
      };
    }

    return folder;
  };

  const handleAdd = (folderId, isFolder) => {
    const name = prompt(`Enter ${isFolder ? "folder" : "file"} name:`);
    if (!name) return;
    const updated = addFolderOrFile(explorer, folderId, name, isFolder);
    setExplorer(updated);
  };

  return (
    <div className="app-container">
      <h1 className="title">📁 File Explorer</h1>
      <Folder explorer={explorer} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
