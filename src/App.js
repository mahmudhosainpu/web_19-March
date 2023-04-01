import React from "react";
import { useScroll } from "./utils";
import { Header, Landing, Introduction, AboutPartner, Footer, OrderItem,} from './components';
import ByeAndSell from "./components/ByeAndSell";




function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">

      <Introduction/>


      <Header />
      <ByeAndSell/>
     
      <Footer/>





    </div>
  );
}

export default App;
