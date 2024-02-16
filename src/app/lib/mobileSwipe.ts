export const mobileSwipe = (
  moveRight: () => void,
  moveLeft: () => void,
  moveUp: () => void,
  moveDown: () => void
) => {
  let startX: number;
  let startY: number;
  let endX: number;
  let endY: number;

  const handleTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      deltaX > 0 ? moveLeft() : moveRight();
    } else {
      deltaY > 0 ? moveUp() : moveDown();
    }
  };

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  document.addEventListener("touchend", handleTouchEnd, false);
};
