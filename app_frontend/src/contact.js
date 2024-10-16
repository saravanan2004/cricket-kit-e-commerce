import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  Container,
  Box,
  Alert,
  Grid,
  Paper,
  InputAdornment,
} from '@mui/material';
import { Phone, Email, Subject, Message } from '@mui/icons-material';
import CricketIcon from '@mui/icons-material/SportsCricket'; // You can use any cricket-related icon or an image of a cricket bat/ball
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedinIcon from '@mui/icons-material/LinkedIn';
// import GithubIcon from '@mui/icons-material/GitHub';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw18wUlXK0EOs6k2fFAw_KFJTkqSc4_mxFzxH24KeboXiLtLhfmfWw8uXJe3SYed3gJ/exec'; // Replace with your script URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('Name', formData.name);
    form.append('Number', formData.number);
    form.append('Email', formData.email);
    form.append('Subject', formData.subject);
    form.append('Message', formData.message);

    fetch(scriptURL, { method: 'POST', body: form })
      .then(() => {
        setIsSubmitted(true);
        alert('Thank you! Your form has been submitted.');
      })
      .catch((error) => console.error('Error!', error.message));
  };

  const subjectOptions = [
    { value: 'Order Inquiry', label: 'Order Inquiry' },
    { value: 'Product Information', label: 'Product Information' },
    { value: 'Return Request', label: 'Return Request' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <>
    {/* <h1 style={{color:"darkred", textAlign:"center", marginTop:"3%",marginBottom:"1%",fontFamily:"fantasy"}}>
      CRIC-KIT SPORTS 
      </h1> */}
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={5} sx={{ p: 4, borderRadius: 3, backgroundColor: '#e3f2fd' }}>
        <Box textAlign="center" mb={3}>
          <CricketIcon sx={{ fontSize: 60, color: '#003B5B' }} />
          <Typography variant="h4" gutterBottom color="#003B5B">
            Get in Touch
          </Typography>
          <Typography variant="body2" color="textSecondary">
            We're here to assist you with any inquiries!
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Subject />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Phone Number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                margin="normal"
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                {subjectOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: '#003B5B',
              '&:hover': { backgroundColor: '#005B8c' },
            }}
          >
            Submit
          </Button>
        </form>
        {isSubmitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Form submitted successfully!
          </Alert>
        )}
      </Paper>
      </Container>

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{marginTop:'4%'}}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <FacebookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ display: "inline" }} />
            <TwitterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ display: "inline" }} />
            <GoogleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ display: "inline" }} />
            <InstagramIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ display: "inline" }} />
            {/* <LinkedinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ display: "inline" }} />
            <GithubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ display: "inline" }} /> */}

            {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a> 
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>*/}
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  CRIC_KIT
                </h6>
                <p>
                Your one-stop shop for premium cricket gear, offering top-quality bats, protective equipment, and accessories to elevate your game.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Brands</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    SS kits
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    SG kits
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    MRF kits
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Grey-Nicollas
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Accessories</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Cricket T-Shirts
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Cricket Inners
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Tights
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Sunglasses
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Vannerpettai,Tirunelveli,Tamil Nadu
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  CRIC_KIT@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +91 9345571552
                </p>
                {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright: CRIC_KIT
          {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Restaurant
        </a> */}
        </div>
      </MDBFooter>
      
    
    </>
  );
};

export default Contact;
