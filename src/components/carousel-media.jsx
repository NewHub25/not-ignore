import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  buttonVariants,
  selectVariants,
  imgVariants,
} from "../animation/variants";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

export const CarouselMedia = ({ images, sx }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  const toggleTheme = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handleSelectClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        width: "90dvw",
        ...(matches
          ? { height: "90vh", margin: "0 auto 3rem" }
          : { height: "70vh", margin: "3rem auto" }),
        position: "relative",
        overflow: "hidden",
        ...sx,
      }}
    >
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            position: "absolute",
            top: 0,
            objectFit: "cover",
          }}
          variants={imgVariants}
          initial={direction === "left" ? "hiddenLeft" : "hiddenRight"}
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          padding: 5,
        }}
      >
        <ArrowButtons dir="left" handle={handlePrevious} />
        <ArrowButtons dir="right" handle={handleNext} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          height: 20,
          width: "100%",
          boxSizing: "border-box",
          padding: "0 3rem",
        }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            variants={selectVariants}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            style={{
              height: 10,
              flexGrow: 1,
              flexShrink: 1,
              backgroundColor:
                currentIndex === index ? toggleTheme.principal : "#eee7",
              cursor: "pointer",
              borderRadius: 5,
            }}
            onClick={() => handleSelectClick(index)}
          ></motion.div>
        ))}
      </div>
      <p
        style={{
          position: "absolute",
          fontSize: "calc(3rem + 5vw)",
          fontWeight: "bolder",
          top: 0,
          bottom: 0,
          margin: "auto 0",
          height: 200,
          padding: 50,
          textWrap: "balance",
          pointerEvents: "none",
          color: toggleTheme.principal,
          textShadow: `3px 3px 2px ${toggleTheme.body}`,
        }}
      >
        Aprende y crea
      </p>
    </div>
  );
};

const ArrowButtons = ({ dir, handle }) => {
  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      style={{
        cursor: "pointer",
      }}
      onClick={handle}
    >
      {dir === "left" ? (
        <ArrowBackIosNew
          color="inherit"
          fontSize="large"
          sx={{ filter: "drop-shadow(1px 1px 2px #002afc)" }}
        />
      ) : (
        <ArrowForwardIos
          color="inherit"
          fontSize="large"
          sx={{ filter: "drop-shadow(1px 1px 2px #002afc)" }}
        />
      )}
    </motion.div>
  );
};
