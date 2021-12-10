import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { CenterFocusStrong } from '@mui/icons-material';
import { Form, Button } from 'react-bootstrap';


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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

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
  const [images, setImages] = useState([]);
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const images = require.context('./carousel', true, /\.(png|jpe?g|svg)$/);
    let imagesArray = images.keys();
    imagesArray = imagesArray.map(image => {
      return image.replace('./', 'carousel/');
    });
    setImages(imagesArray);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, object, message);
  };

  function validateForm() {
    return email.length > 0 && object.length > 0 && message.length > 0;
  }

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
            <img src="image 6.svg" alt='solution' style={{ width: '25%', minWidth: '75px', paddingTop: '7%' }} />
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
        <div style={{ backgroundColor: '#1B152D', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'white', fontSize: 72 }} >Timeline</span>
          <div style={{ display: 'flex', paddingTop: "15%" }}>
            <Box sx={{ width: "100%", }}>
              <Stepper activeStep={2} alternativeLabel connector={<QontoConnector />}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel style={{ fontSize: '50px' }}>
                      <span style={{ color: "white" }}>{label}</span>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%', justifyContent: 'center' }}>
        <div style={{ paddingTop: '4%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: 72 }} >Caroussel</span>
          <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: "center", paddingTop: "2%" }}>
            <div style={{ height: "30%", width: "30%", justifyContent: "center" }}>
              <Slider {...settings}>
                {images.map((image, index) => {
                  return (<img alt="" src={image} key={index} />);
                })
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%' }}>
        <div style={{ backgroundColor: '#1B152D', paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
          <span style={{ color: 'white', fontSize: 72 }} >Our team</span>
          <div style={{ display: 'flex', paddingTop: "15%", justifyContent: "space-around", width: "75%" }}>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
              <img height="110px" width="100px" src="team/gab.jpeg" alt="Gabriel Knies"></img>
              <span style={{ color: 'white', paddingTop: "10%" }}>Gabriel</span>
              <span style={{ color: 'white', paddingTop: "10%" }}>Knies</span>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
              <img height="110px" width="100px" src="team/lolo.jpeg" alt="Lorenzo Manoeuvre"></img>
              <span style={{ color: 'white', paddingTop: "10%" }}>Lorenzo</span>
              <span style={{ color: 'white', paddingTop: "10%" }}>Manoeuvre</span>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
              <img height="110px" width="100px" src="team/lucas.jpeg" alt="Lucas Dudot"></img>
              <span style={{ color: 'white', paddingTop: "10%" }}>Lucas</span>
              <span style={{ color: 'white', paddingTop: "10%" }}>Dudot</span>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
              <img height="110px" width="100px" src="team/rafik.jpeg" alt="Rafik Merzouk"></img>
              <span style={{ color: 'white', paddingTop: "10%" }}>Rafik</span>
              <span style={{ color: 'white', paddingTop: "10%" }}>Merzouk</span>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
              <img height="110px" width="100px" src="team/jor.jpeg" alt="Jori Bashllari"></img>
              <span style={{ color: 'white', paddingTop: "10%" }}>Jori</span>
              <span style={{ color: 'white', paddingTop: "10%" }}>Bashllari</span>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
              <img height="110px" width="100px" src="team/gab.jpeg" alt="Paul Marliere"></img>
              <span style={{ color: 'white', paddingTop: "10%" }}>Paul</span>
              <span style={{ color: 'white', paddingTop: "10%" }}>Marliere</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '0.1%', width: '100%' }}></div>
      <div style={{ backgroundColor: '#1B152D', height: '100%', width: '100%', justifyContent: 'center' }}>
        <div style={{ paddingTop: '7%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginTop: '5%', backgroundColor: 'orange', paddingTop: '5%', width: '60%', justifyContent: 'center', alignSelf: 'center',  }}>
            <span style={{ color: "black", fontSize: '42px' }}>Contact us</span>
            <div style={{ paddingLeft: '5%', paddingRight: '5%', width: '100%', justifyContent: 'center', display: 'flex' }}>
              <Form style={{ width: '50%', paddingBottom: '5%' }} onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                  <Form.Label
                    style={{ color: 'white', marginRight: "1%" }}
                  >Email</Form.Label>
                  <Form.Control
                    placeholder="Enter email"
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="object">
                  <Form.Label
                    style={{ color: 'white', marginRight: "1%" }}
                  >Object</Form.Label>
                  <Form.Control
                    placeholder="Enter Object"
                    type="text"
                    value={object}
                    onChange={(e) => setObject(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="message">
                  <Form.Label
                    style={{ color: 'white', marginRight: "1%" }}
                  >Message</Form.Label>
                  <Form.Control
                    placeholder="Enter message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{ marginTop: '5%' }}
                  className="buttonSubmit"
                  block
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Submit
                </Button>
                {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#252B42', height: '30%' }}>
        <span>e</span>
      </div>
    </>
  );
}

export default Home;