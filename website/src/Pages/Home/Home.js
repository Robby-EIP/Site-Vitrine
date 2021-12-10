import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const steps = [
  'Creation of Robby',
  'First version',
  '',
  '',
  '',
  '',
  '',
  '',
];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));


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
        <div style={{ width: '100%', paddingTop: '5%', display: 'flex', flexDirection: 'column' }}>
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
          <a href="https://discord.gg/Y5mjy86rFS" target={"_blank"}><img alt="our discord" src="icons8-discord-bubble.svg" style={{ width: '7%', minWidth: '75px' }} /></a>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%', paddingBottom: '7%' }}>
        <div style={{ paddingTop: '15%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Funny Exercises</span>
            <img src="icons8-google-code.svg" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Code / Blocks</span>
            <img src="If_then_else.svg" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Turnkey Solution</span>
            <img src="image 6.svg" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
        </div>
        <div style={{ paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Robots Smart Monitoring</span>
            <img src="image 8.svg" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
          <div style={{ height: '30%', width: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          </div>
          <div style={{ height: '30%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: 32 }}>Modular</span>
            <img src="image 9.svg" style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: '#1B152D', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <span style={{ color: 'white', fontSize: 72 }} >Timeline</span>
        <div style={{display: 'flex', paddingTop: "15%"}}>
          <Box sx={{ width: "100%",}}>
            <Stepper activeStep={2} alternativeLabel connector={<QontoConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel style={{fontSize: '50px'}}>
                    <span style={{color: "white"}}>{label}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          </div>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: 'red', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <span >page carrousel</span>
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