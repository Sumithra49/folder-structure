import { useState } from "react";
import "./Folder.css";

const Folder = ({ explorer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    if (explorer.isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="folder">
      <div className="folder-name" onClick={toggleFolder}>
        {explorer.isFolder ? (isOpen ? "📂" : "📁") : "📄"} {explorer.name}
      </div>

      {isOpen && explorer.items?.length > 0 && (
        <div className="folder-children">
          {explorer.items.map((item) => (
            <Folder key={item.id} explorer={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
