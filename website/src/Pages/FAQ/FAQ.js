
function FAQ() {
    return (
      <>
        <div style={{ height: '70%', width: '100%', paddingTop: '5%', backgroundColor: '#1B152D' }}>
          <span style={{ color: 'white', fontSize: '32px' }}>FAQ</span>
        </div>
        <div style={{ backgroundColor: '#252B42', height: '30%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '50%', alignItems: 'center', display: 'flex', justifyContent: "center", paddingTop: '3%' }}>
          <img src="ant-design_mail-outlined.svg" alt="mail" style={{ width: '8%' }}></img>
          <span style={{ color: "white", fontSize: '24px', marginLeft: '5%' }}>robbylerobot@outlook.com</span>
        </div>
        <div style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: "center", paddingTop: '3%' }}>
          <div style={{ width: '50%', alignItems: 'center', display: 'flex', justifyContent: "center", paddingTop: '1%' }}>
            <span style={{ color: "white", fontSize: '24px', marginLeft: '5%' }}>Copyright @ 2021, Robby All rights reserved.</span>
          </div>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div style={{ width: '12.5%', alignItems: 'center', display: 'flex', justifyContent: "center" }}>
              <a href="https://www.instagram.com/robbylerobot2021/" rel="noreferrer" target={"_blank"} ><img alt="our instagram" src="Instagram.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
            </div>
            <div style={{ width: '12.5%', alignItems: 'center', display: 'flex', justifyContent: "center" }}>
              <a href="https://github.com/Robby-EIP" rel="noreferrer" target={"_blank"} ><img alt="our github" src="icons8-github.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
            </div>
            <div style={{ width: '12.5%', alignItems: 'center', display: 'flex', justifyContent: "center" }}>
              <a href="https://discord.gg/Y5mjy86rFS" rel="noreferrer" target={"_blank"}><img alt="our discord" src="icons8-discord-bubble.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
            </div>
            <div style={{ width: '12.5%', alignItems: 'center', display: 'flex', justifyContent: "center" }}>
              <a href="https://www.linkedin.com/in/robby-robotarium-a8463b223/" rel="noreferrer" target={"_blank"}><img alt="our linkedin" src="linkedin.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default FAQ;