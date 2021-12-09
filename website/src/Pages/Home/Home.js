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
        <div style={{ width: '90%', paddingLeft: '5%', paddingTop: '6%', display: 'flex' }}>
          <div>
            <div style={{ width: '35%' }}>
              <span style={{ color: '#7AFFBF', fontSize: 68 }}>Easily discover robotics programming</span>
            </div>
            <div style={{ width: '35%', paddingTop: '1.5%' }}>
              <span style={{ color: '#8D8282', fontSize: 32 }}>Robby is the solution</span>
            </div>
          </div>
          <img src="undraw_firmware_re_fgdy.svg" style={{ width: '30%' }}></img>
        </div>
      </div>
      <div style={{ backgroundColor: '#1B152D', height: '44.9%', width: '100%' }}></div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}></div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
    </>
  );
}

export default Home;