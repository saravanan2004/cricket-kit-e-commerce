import * as React from 'react';
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
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

export default function MediaCard() {
  return (
    <>
    <AppBar position="static">
      <Box maxWidth="xl">
        <Toolbar disableGutters>
          <SportsCricketIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
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
            CRICKIT
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>

    <div style={{ margin: "40px" }}>
      <h1 style={{ color: "darkred", textAlign: "center", marginTop: "3%", marginBottom: "3%", fontFamily: "fantasy" }}>
        GREATEST BATTERS AND BOWLERS
      </h1>

      {/* Four Great Batters */}
      <Row>
        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/sachin.jpg"
              title="Sachin Tendulkar"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Sachin Tendulkar
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', }}>
                Widely regarded as one of the greatest batters in cricket history.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/virat.jpg"
              title="Virat Kohli"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Virat Kohli
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Known for his consistency, aggressive batting style, and leadership.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/brian.jpg"
              title="Brian Lara"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Brian Lara
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Holder of the highest individual score in Test cricket (400*).
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/ricky.jpg"
              title="Ricky Ponting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Ricky Ponting
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                One of the most successful captains and batters in cricket history.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>
      </Row>

      {/* Four Great Bowlers */}
      <Row style={{ marginTop: "50px" }}>
        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/warne.jpg"
              title="Shane Warne"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Shane Warne
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Legendary leg spinner with over 700 Test wickets.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/murali.jpg"
              title="Muttiah Muralitharan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Muttiah Muralitharan
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Holds the record for the most wickets in Test cricket.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/mcgrath.jpg"
              title="Glenn McGrath"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Glenn McGrath
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Known for his accuracy and ability to move the ball in the air.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>

        <Col>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image="/assets/akram.jpg"
              title="Wasim Akram"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Montserrat"}}>
                Wasim Akram
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Pioneer of reverse swing bowling and one of the best left-arm bowlers.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" style={{ width: "100%" }}>Know More</Button>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}
