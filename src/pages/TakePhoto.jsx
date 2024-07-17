import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Col, Container } from 'react-bootstrap';
import Photo from '../images/takePhoto.png';
import arrow from '../images/clickM.png';
import bankExample from '../images/bankCheck.jpeg'
import {
  MDBTextArea,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

const TakePhoto = () => {
  const [stream, setStream] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [secondScreenshot, setSecondScreenshot] = useState(null);
  const [webcamActive, setWebcamActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoWidth, setVideoWidth] = useState(window.innerWidth > 768 ? 600 : window.innerWidth);
  const [instruction, setInstruction] = useState(window.innerWidth > 768 ? 700 : window.innerWidth)

  const handleStartWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      setStream(mediaStream);
      setWebcamActive(true);
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const handleStopWebcam = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStream(null);
      setWebcamActive(false);
    }
  };

  const handleCaptureScreenshot = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (videoRef.current) {
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      setScreenshot(dataUrl);
      console.log('Screenshot captured:', dataUrl);
    }
    handleStopWebcam();
  };

  const handleCaptureSecondScreenshot = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (videoRef.current) {
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      setScreenshot(dataUrl);
      console.log('Screenshot captured:', dataUrl);
    }
    handleStopWebcam();
  };

  useEffect(() => {
    if (webcamActive && videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  }, [webcamActive, stream]);

  useEffect(() => {
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [stream]);

  useEffect(() => {
    const handleResize = () => setVideoWidth(window.innerWidth > 768 ? 600 : window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setInstruction(window.innerWidth > 768 ? 600 : window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px', gap: '20px' }}>
      <h1>Front Check Photo</h1>
      {webcamActive ? (
        <>
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', border: '2px dashed #0D7CC3', height: '340px', width: '100%', maxWidth: '1295px', borderRadius: '5px' }}>
            <div className='video-cam' style={{ width: videoWidth, height: '264px', overflow: 'hidden', position: 'relative', marginTop: '15px' }}>
              <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} autoPlay />
            </div>
            <div style={{ width: '410px', display: 'flex', justifyContent: 'space-around' }}>
              <Button onClick={() => { handleCaptureScreenshot(); }} style={{ width: '200px', background: '#E68F36', border: '#E68F36' }}>Take Photo</Button>
              <Button onClick={handleStopWebcam} style={{ width: '200px', background: '#0D7CC3', border: '#0D7CC3' }}>Cancel</Button>
            </div>
            <canvas ref={canvasRef} width={videoWidth} height={264} style={{ display: 'none' }} />
          </Container>
          <MDBContainer>
            <MDBCard style={{ border: '1px solid grey' }}>
              <MDBRow className='g-0' >
                <MDBCol md='6' >
                  <MDBCardBody className='d-flex flex-column' style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Card.Img src={bankExample} style={{ width: '100%', maxWidth: '700px' }} />
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md='6' style={{ padding: '20px', alignContent: 'center', textAlign: 'start' }}>
                  <h3>Instructions :</h3>
                  <p>1. Make sure that your camera is connected </p>
                  <p>2. Make sure that your browser allows camera capture </p>
                  <p>3. Fix the bank check in the seize of the camera </p>
                  <p>4. Make sure that you are taking picture of the front check </p>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </>
      ) : (
        <Container>
          {screenshot ? (
            <div style={{height:'670px'}}>
              <div style={{ border: '2px dashed #0D7CC3', height: '315px' }}>
                <img src={screenshot} alt="Screenshot" style={{ marginTop: '15px' }} />
              </div>  
              <Card className="text-center" style={{ border: '2px dashed #0D7CC3' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button style={{ background: 'transparent', border: 'transparent' }} onClick={handleStartWebcam}>
                  <Card.Img src={Photo} style={{ width: '100px' }} />
                </Button>
                <Card.Title>Take a photo of your check</Card.Title>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Make sure that your camera is connected and that your browser allows camera capture. When ready, click Capture</Form.Label>
                  <Card.Title>Or</Card.Title>
                  <Card.Text>
                    <Card.Img src={arrow} style={{ width: '50px' }} /> Drag & Drop or click here <Card.Img src={arrow} style={{ width: '50px' }} />
                  </Card.Text>
                  <Form.Control type="file" />
                </Form.Group>
              </Card.Body>
            </Card>
            </div>
          ) : (
            <Card className="text-center" style={{ border: '2px dashed #0D7CC3' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button style={{ background: 'transparent', border: 'transparent' }} onClick={handleStartWebcam}>
                  <Card.Img src={Photo} style={{ width: '100px' }} />
                </Button>
                <Card.Title>Take a photo of your check</Card.Title>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Make sure that your camera is connected and that your browser allows camera capture. When ready, click Capture</Form.Label>
                  <Card.Title>Or</Card.Title>
                  <Card.Text>
                    <Card.Img src={arrow} style={{ width: '50px' }} /> Drag & Drop or click here <Card.Img src={arrow} style={{ width: '50px' }} />
                  </Card.Text>
                  <Form.Control type="file" />
                </Form.Group>
              </Card.Body>
            </Card>
          )}
        </Container>
      )}
    </div>
  );
};

export default TakePhoto;