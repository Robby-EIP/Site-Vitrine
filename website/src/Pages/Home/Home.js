import { useState, useEffect } from 'react';

function Home() {
  // const [images, setImages] = useState([]);  


  // import all images from public/carousel
  // useEffect(() => {
  //   const images = require.context('./carousel/', true);
  //   console.log("test ", images);
  //   console.log("test.keys() ", images.keys());
  //   setImages(images.keys());
  // }, []);

  // const importAll = (r) => {
  //   return r.keys().map(r);
  // };

  // useEffect(() => {
  //   setImages(importAll(require.context('carousel/', false, /\.(png|jpe?g|svg)$/)));
  // }, []);

  return (
    <>
      <div style={{ backgroundColor: '#322653', height: '55%', width: '100%' }}>
        <div style={{ width: '85%', paddingLeft: '15%', paddingTop: '10%', display: 'flex' }}>
          <div style={{ width: '20%' }}>
            <div style={{ width: '130%', paddingTop: "20%" }}>
              <span style={{ color: '#7AFFBF', fontSize: 72 }}>Easily discover robotics programming</span>
            </div>
            <div style={{ width: '130%', paddingTop: '1.5%' }}>
              <span style={{ color: '#8D8282', fontSize: 32 }}>Robby is the solution</span>
            </div>
          </div>
          <div style={{ width: '50%', position: 'relative' }}>
            <img src="Vector1.svg" alt='1' style={{ width: '85%', position: 'absolute' }} />
            <img src="undraw_firmware_re_fgdy.svg" alt='code' style={{ width: '92%', position: 'absolute' }} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#1B152D', height: '44.9%', width: '100%' }}></div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ width: '100%', paddingTop: '5%', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'white', fontSize: 72 }} >Robby's Stack</span>
          <span style={{ color: 'lightgrey', fontSize: 32, paddingTop: '2%' }} >An Open Source Project</span>
          <div style={{ paddingTop: '4%', display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: 28, paddingBottom: '2%' }} >Want to discover robotic programming ?</span>
            <span style={{ color: 'white', fontSize: 28, paddingBottom: '2%' }} >You don't have any robots at home, or not enough ?</span>
            <span style={{ color: 'white', fontSize: 28 }} >Robby is made for you !</span>
          </div>
          <div>
            <img src="RobbyEIP.png" alt='' style={{ width: '15%' }}></img>
          </div>
        </div>
        <div style={{ color: 'white', width: '100%', height: '10%' }}>
          <a href="https://github.com/Robby-EIP" rel="noreferrer" target={"_blank"} style={{ marginRight: '30%' }}><img alt="our github" src="icons8-github.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
          <a href="https://discord.gg/Y5mjy86rFS" rel="noreferrer" target={"_blank"}><img alt="our discord" src="icons8-discord-bubble.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%', paddingBottom: '7%' }}>
        <div style={{ paddingTop: '15%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Funny Exercises</span>
            <img src="icons8-google-code.svg" alt="code.svg" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Code / Blocks</span>
            <img src="If_then_else.svg" alt='code blocks' style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Turnkey Solution</span>
            <img src="image 6.svg" alt='solution'  style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
        </div>
        <div style={{ paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Robots Smart Monitoring</span>
            <img src="image 8.svg" alt="smart robot" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
          <div style={{ height: '30%', width: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          </div>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Modular</span>
            <img src="image 9.svg" alt='modular' style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: 'red', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <span >page timeline</span>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: 'red', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <span >page carousel</span>
          {/* {images.map((image, index) => (
            console.log('image == ', image),
            <img key={index} src={image} alt="carousel" style={{ width: '100%', height: '100%' }} />
          ))} */}
          <img src='carousel/gabriel_knies.jpeg' alt="carousel" style={{ width: '10%' }} />
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: 'red', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <span >page team</span>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: 'red', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <span >page contact</span>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
    </>
  );
}

export default Home;