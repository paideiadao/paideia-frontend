import React, { FC, useEffect, useState, useRef } from 'react';
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

interface IPageNav {
  navLinks: any[],
}

const PageNav: FC<IPageNav> = ({ navLinks }) => {

  const [sliderSx, setSliderSx] = useState({
    mt: undefined,
    height: undefined
  })
  const sliderSxRef = useRef({
    mt: undefined,
    height: undefined
  });
  sliderSxRef.current = sliderSx;

  // This is the top of the area which contains content. This is defined rather than using the top
  // and bottom of the page, because we don't want the scroll animation to start moving until after
  // the header, and it should reach the bottom once it hits the top of the footer. 
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
    const element = document.getElementById('navContainer')
    const topPosition = element.offsetTop
    const totalHeight = element.getBoundingClientRect().height
    const thisBottom = topPosition + totalHeight

    navLinks.forEach((link: { link: string, position: number }) => {
      const linkElement = document.getElementById(link.link)
      const thisTop = linkElement.offsetTop - 85
      link.position = thisTop
    })

    const visibleHeight = window.innerHeight
    const barElement = document.getElementById('navPositionBar')
    const barHeight = barElement.getBoundingClientRect().height
    const sliderHeight = visibleHeight / totalHeight * barHeight

    setSliderSx({
      ...sliderSx,
      height: sliderHeight
    })

    setTopAndBottom(prevState => ({ ...prevState, top: topPosition, bottom: thisBottom }))
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
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleResize()
    }, 200);
  
    return () => clearInterval(interval);
  }, []);

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

export default PageNav