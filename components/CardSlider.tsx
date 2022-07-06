import React, { FC, useEffect, useState, useRef } from "react";
import { Button, Container, Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SliderProps {
  buttonTop?: boolean;
  uniqueId: string;
  addMargin?: number;
  contained?: boolean;
}

const CardSlider: FC<SliderProps> = ({ children, buttonTop, uniqueId, addMargin, contained }) => {
  const [marginLeftCalc, setMarginLeftCalc] = useState({ px: '0px' })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [leftDisabled, setLeftDisabled] = useState(false)
  const [rightDisabled, setRightDisabled] = useState(false)
  const [slideDistance, setSlideDistance] = useState(460)

  const handleScroll = () => {
    const scroll = document.getElementById(uniqueId + "pnProductNav").scrollLeft
    setScrollPosition(scroll)
  };

  const determineOverflow = (content: any, container: any) => {
    const containerMetrics = container.getBoundingClientRect();
    const containerMetricsRight = Math.floor(containerMetrics.right);
    const containerMetricsLeft = Math.floor(containerMetrics.left);
    const contentMetrics = content.getBoundingClientRect();
    const contentMetricsRight = Math.floor(contentMetrics.right);
    const contentMetricsLeft = Math.floor(contentMetrics.left);

    if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
      setLeftDisabled(false)
      setRightDisabled(false)
    } else if (contentMetricsLeft < containerMetricsLeft) {
      setRightDisabled(true)
    } else if (contentMetricsRight > containerMetricsRight) {
      setLeftDisabled(true)
    } else {
      setLeftDisabled(true)
      setRightDisabled(true)
    }
  }

  const marginFunction = () => {
    const pnArrowContainer = document.getElementById(uniqueId + "pnArrowContainer");
    let margin = 24;
    if (!contained) {
      margin = (pnArrowContainer.getBoundingClientRect().left + (addMargin ? addMargin : 0))
    }
    setMarginLeftCalc({ ...marginLeftCalc, px: (margin.toString() + 'px' )})
    const containerWidth = document.getElementById("setWidth").offsetWidth
    setSlideDistance(containerWidth - margin)
  }

  useEffect(() => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav");
    pnProductNav.addEventListener("scroll", handleScroll);
    return () => {
      pnProductNav.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav");
    const pnProductNavContents = document.getElementById(uniqueId + "pnProductNavContents");
    determineOverflow(pnProductNavContents, pnProductNav)
  }, [scrollPosition]);

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", marginFunction);
    // Call handler right away so state gets updated with initial window size
    marginFunction()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", marginFunction);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      marginFunction()
    }, 1000);
  }, []);

  const [pos, setPos] = useState({
    left: undefined,
    x: undefined,
  })

  const posRef = useRef({
    left: undefined,
    x: undefined,
  })
  posRef.current = pos

  const mouseMoveHandler = (e: any) => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav");
    pnProductNav.scrollLeft = posRef.current.left - (e.clientX - posRef.current.x);
  }

  const mouseUpHandler = (e: any) => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav");
    pnProductNav.style.cursor = 'grab';
    pnProductNav.style.userSelect = 'none';
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  const handleMouseDown = (e: any) => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav");
    pnProductNav.style.cursor = 'grabbing';
    pnProductNav.style.userSelect = 'none';

    setPos({
      // The current scroll
      left: scrollPosition,
      // Get the current mouse position
      x: e.clientX,
    })

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  const clickLeft = () => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav")
    pnProductNav.scrollTo({ left: (scrollPosition - slideDistance), behavior: 'smooth' });
  }

  const clickRight = () => {
    const pnProductNav = document.getElementById(uniqueId + "pnProductNav")
    pnProductNav.scrollTo({ left: (scrollPosition + slideDistance), behavior: 'smooth' });
  }

  const ButtonBox = () => {
    return (
      <Container id={uniqueId + "pnArrowContainer"} maxWidth="lg" sx={{ my: '32px' }}>
        <Box sx={buttonTop ? { display: 'flex', justifyContent: 'flex-end' } : null}>
          <Button onClick={clickLeft} disabled={leftDisabled}>
            <ArrowBackIosIcon />
          </Button>
          <Button onClick={clickRight} disabled={rightDisabled}>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Container>
    )
  }

  return (
    <>
      <Container maxWidth="lg" id="setWidth" sx={{ zIndex: '1', width: '100vw' }}></Container>
      {buttonTop ? (
        <ButtonBox />
      ) : null}
      <Box sx={{
        /* Make this scrollable when needed */
        overflowX: 'auto',
        /* We don't want vertical scrolling */
        overflowY: 'hidden',
        cursor: 'grab',
        /* Make an auto-hiding scroller for the 3 people using a IE */
        msOverflowStyle: '-ms-autohiding-scrollbar',
        /* For WebKit implementations, provide inertia scrolling */
        WebkitOverflowScrolling: 'touch',
        /* We don't want internal inline elements to wrap */
        whiteSpace: 'nowrap',
        /* Remove the default scrollbar for WebKit implementations */
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        maxWidth: '100vw',
        ml: contained ? '-24px' : '0',
      }}
        id={uniqueId + "pnProductNav"}
        onMouseDown={(e) => handleMouseDown(e)}
      >
        <Box
          id={uniqueId + "pnProductNavContents"}
          display="flex"
          sx={{
            width: 'min-content',
            gap: '24px',
            ...marginLeftCalc
          }}
        >
          {children}
        </Box>
      </Box>
      {buttonTop ? null : (
        <ButtonBox />
      )}
    </>
  )
}

export default CardSlider