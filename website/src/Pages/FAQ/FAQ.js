import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

function FAQ() {
    return (
      <>
        <div style={{ height: '70%', width: '100%', paddingTop: '5%', backgroundColor: '#1B152D' }}>
          <span style={{ color: 'white', fontSize: '32px' }}>FAQ</span>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2.5%' }}>
            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ width: '60%' }}>
              <Panel header="How many people are involved in the project ?" key="1">
                <p>Currently we are only 6 working on the project</p>
              </Panel>
              <Panel header="What's the purpose of your project ?" key="2">
                <p>Our goal at Robby is to make it easier for people such as students, to learn robotic programming through various exercises, without the need to buy one or more robots</p>
              </Panel>
              <Panel header="How can I contact you ?" key="3">
                <p>Click on contact and send us an email, or join our discord (the link is in the page's footer) and send us a message.<br></br>We will be more than happy to hear about you !</p>
              </Panel>
            </Collapse>
          </div>
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