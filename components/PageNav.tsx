import { useEffect, useState, useRef } from 'react';
import {
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Icon,
  Grid
} from '@mui/material';

const listItemSx = {
  '&:hover': {
    '& .MuiTypography-root': {
      fontWeight: '700',
      textDecoration: 'underline',
    }
  },
};

export default function PageHeader({ navLinks }) {
  const [sliderSx, setSliderSx] = useState({
    mt: undefined,
    height: undefined
  })
  const sliderSxRef = useRef({
    mt: undefined,
    height: undefined
  });
  sliderSxRef.current = sliderSx;
  const [topAndBottom, setTopAndBottom] = useState({
    top: 0,
    bottom: 0
  })
  const topAndBottomRef = useRef({
    top: 0,
    bottom: 0
  });
  topAndBottomRef.current = topAndBottom;

  const handleResize = () => {
    let totalHeight = 0
    let topPosition = 0
    let bottomPosition = 0

    navLinks.forEach((link: { link: string, position: number }) => {
      const element = document.getElementById(link.link);
      totalHeight += element.getBoundingClientRect().height
      const thisTop = element.offsetTop - 85
      link.position = thisTop
      const thisBottom = link.position + element.getBoundingClientRect().height

      if ((thisTop < topPosition) || topPosition === 0) {
        topPosition = thisTop
      }
      if ((bottomPosition < thisBottom)) {
        bottomPosition = thisBottom
      }
    })

    const visibleHeight = window.innerHeight
    const barElement = document.getElementById('navPositionBar')
    const barHeight = barElement.getBoundingClientRect().height
    const sliderHeight = visibleHeight / totalHeight * barHeight

    setSliderSx({
      ...sliderSx,
      height: sliderHeight
    })

    setTopAndBottom(prevState => ({ ...prevState, top: topPosition, bottom: bottomPosition }))
    handleScroll()
  }

  const handleScroll = () => {
    const position = window.scrollY;
    const barElement = document.getElementById('navPositionBar')
    const barHeight = barElement.getBoundingClientRect().height

    if (position <= topAndBottomRef.current.top) {
      setSliderSx(prevState => ({ ...prevState, mt: 0 }))
    }
    if (
      (position > topAndBottomRef.current.top) // position is below the first element top
      && (position < (topAndBottomRef.current.bottom - window.innerHeight)) // above the bottom element bottom
    ) {
      const pageHeight = topAndBottomRef.current.bottom - topAndBottomRef.current.top
      const distanceDown = (position - topAndBottomRef.current.top) / pageHeight * barHeight - 2

      setSliderSx(prevState => ({
        ...prevState,
        mt: distanceDown.toString() + 'px'
      }))
    }
    if (position > (topAndBottomRef.current.bottom - window.innerHeight)) {
      const distanceDown = barHeight - sliderSxRef.current.height 
      setSliderSx(prevState => ({
        ...prevState,
        mt: distanceDown.toString() + 'px'
      }))
    }
  };

  const scrollToHeading = (position: number): void => {
    scrollTo({
      top: (position),
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const navBarList = (
    <List sx={{ p: 0 }}>
      {navLinks.map(({ icon, name, position }, i: number) => (
        <ListItem
          key={i}
          button
          sx={listItemSx}
          onClick={() => scrollToHeading(position)}
        >
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={name} sx={{
            '& .MuiTypography-root': {
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: '400',
              fontSize: '20px',
            }
          }} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 100,
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        borderRadius: '12px',
        zIndex: 3,
        p: '12px',
      }}
    >
      <Grid container>
        <Grid item sx={{ width: '3px', background: '#F8F8F8' }} id="navPositionBar">
          <Box sx={{ background: '#ED7E21', zIndex: '2', ...sliderSx }}></Box>
        </Grid>
        <Grid item>
          {navBarList}
        </Grid>
      </Grid>

    </Box>
  )
};