export const mobileSwipe = (
  right: () => void,
  left: () => void,
  up: () => void,
  down: () => void
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
      deltaX > 0 ? left() : right();
    } else {
      deltaY > 0 ? up() : down();
    }
  };

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  document.addEventListener("touchend", handleTouchEnd, false);
};
