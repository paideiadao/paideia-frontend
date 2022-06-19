import React, { FC, useEffect, useState, useRef } from "react";
import { Button, Container, Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SETTINGS = {
  navBarTravelling: false,
  navBarDirection: "",
  navBarTravelDistance: 150
}

const CardSlider: FC = ({ children }) => {
  const [marginLeftCalc, setMarginLeftCalc] = useState({ mx: '0px' })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [leftDisabled, setLeftDisabled] = useState(false)
  const [rightDisabled, setRightDisabled] = useState(false)

  const handleScroll = () => {
    const scroll = document.getElementById("pnProductNav").scrollLeft
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
    const pnArrowContainer = document.getElementById("pnArrowContainer");
    const margin = (pnArrowContainer.getBoundingClientRect().left + 24).toString() + 'px'
    setMarginLeftCalc({ ...marginLeftCalc, mx: margin })
  }

  useEffect(() => {
    const pnProductNav = document.getElementById("pnProductNav");
    pnProductNav.addEventListener("scroll", handleScroll);
    return () => {
      pnProductNav.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const pnProductNav = document.getElementById("pnProductNav");
    const pnProductNavContents = document.getElementById("pnProductNavContents");
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

  const scrollRef = useRef(0)
  scrollRef.current = scrollPosition

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
    const pnProductNav = document.getElementById("pnProductNav");
    pnProductNav.scrollLeft = posRef.current.left - (e.clientX - posRef.current.x);
    console.log(posRef)
  console.log(scrollPosition)
  }

  const mouseUpHandler = (e: any) => {
    const pnProductNav = document.getElementById("pnProductNav");
    pnProductNav.style.cursor = 'grab';
    pnProductNav.style.userSelect = 'none';
    setPos({
      ...pos,
      left: scrollRef.current,
      x: e.clientX,
    })
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  const handleMouseDown = (e: any) => {
    const pnProductNav = document.getElementById("pnProductNav");
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
  

  return (
    <>
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
      }}
        id="pnProductNav"
        onMouseDown={(e) => handleMouseDown(e)}
      >
        <Box id="pnProductNavContents" display="flex" sx={{ width: 'min-content', gap: '24px', ...marginLeftCalc }}>
          {children}
        </Box>
      </Box>
      <Container id="pnArrowContainer" maxWidth="lg" sx={{ mt: '24px' }}>
        <Button onClick={() => null} disabled={leftDisabled}>
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={() => null} disabled={rightDisabled}>
          <ArrowForwardIosIcon />
        </Button>
      </Container>
    </>
  )
}

export default CardSlider