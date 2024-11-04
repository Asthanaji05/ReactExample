import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [activeChapter, setActiveChapter] = useState(null);

  const chapters = [
    'Chapter 1',
    'Chapter 2',
    'Chapter 3',
    'Chapter 4',
    'Chapter 5',
    'Chapter 6',
    'Chapter 7',
    'Chapter 8',
  ];

  return (
    <div className="sidebar">
      <ul>
        {chapters.map((chapter, index) => (
          <li
            key={index}
            className={`chapter-item ${activeChapter === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveChapter(index)}
            onMouseLeave={() => setActiveChapter(null)}
            onClick={() => setActiveChapter(index)}
          >
            {chapter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;