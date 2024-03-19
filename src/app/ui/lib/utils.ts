const isTouchDevice = () => {
  return "ontouchstart" in window || !!navigator.maxTouchPoints;
};

export const isMobile = isTouchDevice();
