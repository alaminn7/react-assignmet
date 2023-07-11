import React, { useState } from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById('textarea').value;
    setDisplayText(textAreaValue);
  };

  return (
    <div>
      <textarea id="textarea" rows="4" cols="50" />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
}

function Footer() {
  return <p>copyright Al Amin.</p>;
}

function App() {
  return (
    <div style={{maxWidth: `1000px`, margin: `0 auto`, padding: `2rem`}}>
      <Header title="My React Application" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
