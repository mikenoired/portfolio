const isTouchDevice = () => {
  if (typeof window !== "undefined") {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
};

export const isMobile = isTouchDevice();
