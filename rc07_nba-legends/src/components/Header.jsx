 
 import Container from "react-bootstrap/Container"
 import Image from "react-bootstrap/Image"
 import nbaLogo from "../assets/nba-logo.png"


 const Header =()=>{

    return(
<Container className="text-center mt-4" >

  <Image src={nbaLogo} width="200px" ></Image>
   <h1 className="my-2 font-monospace display-4 fw-bold" >NBA Legends</h1>
</Container>

    );
 };
 export default Header;