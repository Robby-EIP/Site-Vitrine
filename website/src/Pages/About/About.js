function About() {
  return (
    <>
      <div style={{ height: '70%', width: '100%', paddingTop: '5%', backgroundColor: '#1B152D' }}>
        <span style={{ color: 'white', fontSize: '32px' }}>About Us</span>
        <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'center' }}>
          <img alt="logo" src="logo_white.png" style={{ width: "10%" }} ></img>
        </div>
        <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <span style={{ color: 'white', fontSize: '32px' }}>Robby is a project made by 6 students at Epitech Montpellier</span>
          <span style={{ color: 'white', fontSize: '32px' }}>It is our end of study project also known as EIP</span>
          <span style={{ color: 'white', fontSize: '32px' }}>We are currently working on it and we hope you will enjoy it</span>
          <div style={{ marginTop: '1%', backgroundColor: "#EF2779", width: '6%', display: 'flex', alignSelf: 'center', justifyContent: 'center', borderRadius: "10%" }}>
            <a rel="noreferrer" target={"_blank"} href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAEN_vXJUMzVOTDZYT0tSQlFYM0FSTkpJNEdTOUdSWC4u" style={{ textDecoration: 'none', color: 'white' }}><span style={{ color: "white", fontSize: "28px" }}>Help us</span></a>
          </div>
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

export default About;