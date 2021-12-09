function Home() {

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
            <img src="Vector1.svg" style={{ width: '85%', position: 'absolute' }} />
            <img src="undraw_firmware_re_fgdy.svg" style={{ width: '92%', position: 'absolute' }} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#1B152D', height: '44.9%', width: '100%' }}></div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ width: '100%', paddingTop: '7%', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'white', fontSize: 72 }} >Robby's Stack</span>
          <span style={{ color: 'lightgrey', fontSize: 32, paddingTop: '2%' }} >An Open Source Project</span>
          <div style={{ paddingTop: '4%', display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: 28, paddingBottom: '2%' }} >Want to discover robotic programming ?</span>
            <span style={{ color: 'white', fontSize: 28, paddingBottom: '2%' }} >You don't have any robots at home, or not enough ?</span>
            <span style={{ color: 'white', fontSize: 28 }} >Robby is made for you !</span>
          </div>
          <div>
            <img src="RobbyEIP.png" style={{ width: '15%' }} />
          </div>
        </div>
        <div style={{ color: 'white', width: '100%', height: '10%' }}>
          <a href="https://github.com/Robby-EIP" target={"_blank"} style={{ marginRight: '30%' }}><img alt="our github" src="icons8-github.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
          <a href="https://discord.gg/ujrvfPqeBR" target={"_blank"}><img alt="our discord" src="icons8-discord-bubble.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
    </>
  );
}

export default Home;