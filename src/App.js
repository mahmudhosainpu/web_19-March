import React from "react";
import { useScroll } from "./utils";
import { Header, Landing, Introduction, AboutPartner, Footer, OrderItem,} from './components';
import ByeAndSell from "./components/ByeAndSell";

import SignIn from "./components/SignIn";
import SignIn from "./components/SignUp";


function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">

      <Introduction/>


      <Header />
      <ByeAndSell/>
      <SignIn/>
      <SignUp/>
      <Footer/>





    </div>
  );
}

export default App;
