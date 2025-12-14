import { useState, useEffect } from 'react';
import { fetchTitles } from "./fetch_titles";

interface Title {
  id: number;
  title: string;
}

interface VerticalTitlesMenuProps {
  onchange: (id: number) => void;
}

function VerticalTitlesMenu({ onchange }: VerticalTitlesMenuProps) {
  const [titles, setTitles] = useState<Title[]>([{ id: 0, title: "...Loading..." }]);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    try {
      fetchTitles()
        .then(data => {
          setTitles(data);
          if (data.length > 0) {
            setSelectedId(data[0].id);
            onchange(data[0].id);
          }
        })
    } catch (error: any) {
      console.log("Fetch error: ", error);
      setTitles([{ id: 0, title: "Error loading titles" }]);
    }
  }, [onchange])

  const handleTitleClick = (id: number) => {
    setSelectedId(id);
    onchange(id);
  };

  return (
    <div className="vertical-menu">
      <h2>Articles</h2>
      <ul className="menu-list">
        {titles.map((title) => (
          <li
            key={title.id}
            className={`menu-item ${selectedId === title.id ? 'active' : ''}`}
            onClick={() => handleTitleClick(title.id)}
          >
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalTitlesMenu;
