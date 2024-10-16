import * as React from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Carousel from 'react-bootstrap/Carousel';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedinIcon from '@mui/icons-material/LinkedIn';
// import GithubIcon from '@mui/icons-material/GitHub';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField'; // Import TextField from Material-UI
import { DialogContent, DialogActions } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const pages = ['Legends','Batters','Bowlers'];
const settings = ['Contact'];

export default function MediaCard() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
      window.location.href= '/App'
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
      window.location.href= '/Contact'
    };

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const [data, setData] = useState([]);
      console.log(data);

  useEffect(()=> {
    getproduct()
  },[]);

  const handleClickOpen = (clickedproductindex) => {
    setOpen(true);
    setProductindex(clickedproductindex)
  };
  
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState("");
  const [productindex, setProductindex] = React.useState("");

  const handleClose = async (value) => {
    setOpen(false);
    const selectedData = {
      ProductId: data[productindex].product_id,
      ProductName: data[productindex].product_name,
      ProductPrice: data[productindex].product_price,
      ProductQuantity: quantity
    };
  
    console.log(selectedData); // This logs the data you're sending
  
    // Make POST request to the backend
    try {
      const response = await fetch('http://localhost:3000/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Success message
      } else {
        console.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    // You can also reset the quantity field after submission if necessary
    setQuantity("");
  };
  

  const addtocart = (clickedindex) => () => {
    // console.log("clicked index:",clickedindex);
    setQuantity("")
    handleClickOpen(clickedindex)
  };



  const getproduct = async () => {
    const response = await fetch ('http://localhost:3000/getproducts');
    const responsedata = await response.json();
    console.log(responsedata);
    setData(responsedata)
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsCricketIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CRIC_KIT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SportsCricketIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CRIC_KIT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            
            <Tooltip title="Open settings">
            {/* <Badge badgeContent={4} color="primary"> */}
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                <ContactPageIcon  onClick={handleOpenUserMenu} sx={{ p: 0 }} alt="Remy Sharp"  />
              {/* </IconButton> */}
              {/* </Badge> */}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))} 
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <div style={{ backgroundColor: "violet", width: "100%", height: "100%" }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/firstslide.jpg`}
              alt="First slide"
              style={{ width: '100%', height: '200px' }} />
            <Carousel.Caption style={{fontFamily:"Montserrat", }}>
              <h3>Premium Cricket Bats</h3>
              <p>Discover our top-range English and Kashmir willow cricket bats, designed to enhance your performance at every level.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/secondslide.jpg`}
              alt="Second slide"
              style={{ width: '100%', height: '200px' }} />
            <Carousel.Caption style={{fontFamily:"Montserrat"}}>
              <h3> Protective Gear for Every Player</h3>
              <p>From helmets to leg guards, our range of protective gear ensures you stay safe while playing with full confidence.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/thirdslide.jpg`}
              alt="Third slide"
              style={{ width: '100%', height: '200px' }} />
            <Carousel.Caption style={{fontFamily:"Montserrat"}}>
              <h3>Cricket Accessories & Essentials</h3>
              <p>
              Explore high-quality cricket balls, gloves, bags, and more to keep you fully equipped for your next game.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

    
    <div style={{margin:"40px"}}>
      <h1 style={{color:"darkred", textAlign:"center", marginTop:"3%",marginBottom:"1%",fontFamily:"fantasy"}}>
      CRIC-KIT SPORTS 
      </h1>


      <Row>
        {data.map((products,index) => (
        <Col style={{marginTop:"1%"}} key={index} sm={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={products.product_image}
        title="Product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
        {products.product_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {products.product_description}
        </Typography>
        <br></br>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
        <h5 style={{fontFamily:"Montserrat", textAlign:"center", color:"darkred", marginBottom:"-10px"}}>Price: ₹{products.product_price}</h5>
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" variant="contained" style={{width:"50%"}} onClick={addtocart(index)}>Order now</Button>
        <Button size="small" variant="outlined" style={{width:"50%"}} onClick={addtocart(index)}>Add to cart</Button>
        
      </CardActions>
    </Card>
        </Col>
        ))}
      </Row>
       
    </div>

    <Dialog maxWidth="sm" onClose={handleClose} open={open}>
  <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Enter Quantity</DialogTitle>
  
  <DialogContent>
    <TextField 
      id="outlined-basic" 
      label="Quantity" 
      variant="outlined" 
      fullWidth 
      value={quantity} 
      onChange={(event) => setQuantity(event.target.value)}
      margin="normal"
      InputProps={{
        style: {
          padding: '10px',
        }
      }}
    />
  </DialogContent>

  <DialogActions style={{ justifyContent: 'center', paddingBottom: '16px' }}>
    <Button 
      variant="contained" 
      color="primary" 
      size="large" 
      style={{ width: '40%' }} 
      onClick={handleClose}
    >
      Confirm
    </Button>
  </DialogActions>
</Dialog>


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
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
}