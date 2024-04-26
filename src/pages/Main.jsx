import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardActionArea, Typography, CardContent, Link } from '@mui/material';
import logopic from './toolpic/boyu.jpg';

function About() {
  const navigate = useNavigate();

  const go2about = () => {
    navigate('/about');
  };

  const go2pictures = () => {
    navigate('/pictures');
  };

  const go2contact = () => {
    navigate('/contact');
  };

  return (
    <div className="About">
      <img src={logopic} alt='BOYU hostel' style={{ width: '100%', height: 'auto', maxHeight: '60%' }}/>
      <Grid container spacing={2} className='content'>
      <Grid item xs={12} sm={4}>
      <Card className='card' onClick={go2about} elevation={0} sx={{ border: 'none', boxShadow: 'none' }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  About Us
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  To know more about BOYU
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className='card' onClick={go2pictures} elevation={0} sx={{ border: 'none', boxShadow: 'none' }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Room Introduction
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  To see the beauty of BOYU
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className='card' elevation={0} sx={{ border: 'none', boxShadow: 'none' }}>
            <CardActionArea>
              <Link href="https://lin.ee/Yu6BLGE" target="_blank" underline="none" color="inherit" style={{ textDecoration: 'none' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Contact us
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    To know more detail or booking
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
