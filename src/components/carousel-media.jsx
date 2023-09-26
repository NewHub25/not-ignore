import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CarouselMedia = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ width: 400, position: "relative" }}>
      <img
        key={currentIndex}
        src={images[currentIndex]}
        style={{
          width: "100%",
          aspectRatio: "4/3",
          borderRadius: 10,
          border: `1px solid #0090de`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 300,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: 0,
          boxSizing: "border-box",
          padding: 5,
        }}
      >
        <ArrowButtons dir="left" handle={handlePrevious} />
        <ArrowButtons dir="right" handle={handleNext} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          marginTop: 7,
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            // className={`dot ${currentIndex === index ? "active" : ""}`}
            style={{
              width: 15,
              aspectRatio: 1,
              backgroundColor: currentIndex === index ? "#eee5" : "#0090de",
              borderRadius: "50%",
            }}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const ArrowButtons = ({ dir, handle }) => {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#0090de",
        padding: "10px 8px 8px 13px",
      }}
      onClick={handle}
    >
      {dir === "left" ? (
        <svg height="20" viewBox="0 96 960 960" width="20">
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      ) : (
        <svg height="20" viewBox="0 96 960 960" width="20">
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      )}
    </div>
  );
};
