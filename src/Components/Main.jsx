import react from "react";
import Header from "./Header.jsx";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Main;
