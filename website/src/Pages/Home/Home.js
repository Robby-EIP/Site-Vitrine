import { useState, useEffect } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      {/* set half the page to color 322653 */}
      <div style={{ backgroundColor: '#322653', height: '50%', width: '100%' }}>
        <h1>Home</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <div>
          <p style={{ color: '#7AFFBF', fontSize: 52 }}>Easily discover robotics programming</p>
          <p style={{ color: '#8D8282', fontSize: 24 }}>Robby is the solution</p>
        </div>
        <img src="undraw_firmware_re_fgdy.svg" style={{ width: '30%' }}></img>
      </div>
      <div style={{ backgroundColor: '#1B152D', height: '44.9%', width: '100%' }}></div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}></div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
    </>
  );
}

export default Home;