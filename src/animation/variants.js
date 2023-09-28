export const imgVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.5,
  },
};
export const selectVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -1,
    scale: 1.1,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};
