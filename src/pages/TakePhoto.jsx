import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Card, Form, Container, Row } from 'react-bootstrap';
import Photo from '../images/takePhoto.png';
import arrow from '../images/clickM.png';
import bankExample from '../images/bankCheck.jpeg';
import firstStep from '../images/front.png';
import secondStep from '../images/back.png';
import { MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const TakePhoto = () => {
  const [stream, setStream] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [secondScreenshot, setSecondScreenshot] = useState(null);
  const [webcamActive, setWebcamActive] = useState(false);
  const [isFrontPhotoTaken, setIsFrontPhotoTaken] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoWidth, setVideoWidth] = useState(window.innerWidth > 768 ? 600 : window.innerWidth);
  const [instruction, setInstruction] = useState(window.innerWidth > 768 ? 700 : window.innerWidth);
  const navigate = useNavigate();

  const handleStartWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
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
      setIsFrontPhotoTaken(true);
    }
    handleStopWebcam();
  };

  const handleCaptureSecondScreenshot = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (videoRef.current) {
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      setSecondScreenshot(dataUrl);
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

  const handleContinue = () => {
    navigate('/OCR', { state: { screenshot, secondScreenshot } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px', gap: '20px' }}>
      {webcamActive ? (
        <>
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', border: '2px dashed #0D7CC3', height: '340px', width: '100%', maxWidth: '1295px', borderRadius: '5px', overflow: 'hidden' }}>
            <div className='video-cam' style={{ width: videoWidth, height: '264px', overflow: 'hidden', position: 'relative', marginTop: '15px' }}>
              <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} autoPlay />
            </div>
            <div style={{ width: '410px', display: 'flex', justifyContent: 'space-around' }}>
              {isFrontPhotoTaken ? (
                <Button onClick={handleCaptureSecondScreenshot} style={{ width: '200px', background: '#E68F36', border: '#E68F36' }}>Take Back Photo</Button>
              ) : (
                <Button onClick={handleCaptureScreenshot} style={{ width: '200px', background: '#E68F36', border: '#E68F36' }}>Take Photo</Button>
              )}
              <Button onClick={handleStopWebcam} style={{ width: '200px', background: '#0D7CC3', border: '#0D7CC3' }}>Cancel</Button>
            </div>
            <canvas ref={canvasRef} width={videoWidth} height={264} style={{ display: 'none' }} />
          </Container>
          <MDBContainer>
            <MDBCard style={{ border: '1px solid grey' }}>
              <MDBRow className='g-0'>
                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column' style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Card.Img src={bankExample} style={{ width: '100%', maxWidth: '700px' }} />
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md='6' style={{ padding: '20px', alignContent: 'center', textAlign: 'start' }}>
                  <h3>Instructions :</h3>
                  <p>1. Make sure that your camera is connected</p>
                  <p>2. Make sure that your browser allows camera capture</p>
                  <p>3. Fix the bank check in the seize of the camera</p>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </>
      ) : (
        <Container>
          {screenshot ? (
            <div style={{ height: '670px' }}>
              <div style={{ border: '2px dashed #0D7CC3', height: '343px', alignContent: 'center', overflow: 'hidden' }}>
                <h4 style={{ color: '#E68F36', alignItems: 'center' }}> <Card.Img src={firstStep} style={{ width: '45px' }} /> Front Check Photo</h4>
                <img src={screenshot} alt="Screenshot" style={{ width: '100%', maxWidth: '700px' }} />
              </div>
              {secondScreenshot ? (
                <div style={{ marginTop: '20px' }}>
                  <div style={{ border: '2px dashed #0D7CC3', height: '343px', alignContent: 'center', overflow: 'hidden' }}>
                    <h4 style={{ color: '#E68F36', alignItems: 'center' }}> <Card.Img src={secondStep} style={{ width: '45px' }} /> Back Check Photo</h4>
                    <img src={secondScreenshot} alt="Second Screenshot" style={{ width: '100%', maxWidth: '700px' }} />
                  </div>
                  <Row style={{ gap: '20px', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Button onClick={() => navigate(-1)} style={{ background: '#0D7CC3', border: '#0D7CC3', width: '200px', height: '40px', marginBottom: '10px' }}>
                      Back
                    </Button>
                    <Button onClick={handleContinue} style={{ background: '#E68F36', border: '#E68F36', width: '200px', height: '40px', marginBottom: '10px' }}>
                      Continue
                    </Button>
                  </Row>
                </div>
              ) : (
                <Card className="text-center" style={{ border: '2px dashed #0D7CC3', marginTop: '20px' }}>
                  <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h4 style={{ color: '#E68F36', alignItems: 'center' }}> <Card.Img src={secondStep} style={{ width: '45px' }} /> Back Check Photo</h4>
                    <Button style={{ background: 'transparent', border: 'transparent' }} onClick={handleStartWebcam}>
                      <Card.Img src={Photo} style={{ width: '100px' }} />
                    </Button>
                    <Card.Title>Take a photo of the back of your check</Card.Title>
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
            </div>
          ) : (
            <>
              <Card className="text-center" style={{ border: '2px dashed #0D7CC3', overflow: 'hidden' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h4 style={{ color: '#E68F36', alignItems: 'center' }}> <Card.Img src={firstStep} style={{ width: '45px' }} /> Front Check Photo</h4>
                  <Button style={{ background: 'transparent', border: 'transparent' }} onClick={handleStartWebcam}>
                    <Card.Img src={Photo} style={{ width: '100px' }} />
                  </Button>
                  <Card.Title>Take a photo of the front of your check</Card.Title>
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
              <Row style={{ gap: '20px', justifyContent: 'flex-end' }}>
                <Button as={Link} to='/SelectBank' style={{ background: '#0D7CC3', border: '#0D7CC3', width: '200px', height: '40px', marginTop: '20px' }} onClick={handleStartWebcam}>
                  Back
                </Button>
                <Button as={Link} to='#' style={{ background: '#bc9166', border: '#bc9166', width: '200px', height: '40px', marginTop: '20px' }}>
                  Continue
                </Button>
              </Row>
            </>
          )}
        </Container>
      )}
    </div>
  );
};

export default TakePhoto;
