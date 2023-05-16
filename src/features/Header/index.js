import ServicesGoogle from "./ServicesGoogle";
import { Nav } from "./styled";
import Weather from "./weather";

const Header = () => {
  return (
    <Nav>
      <Weather />
      <ServicesGoogle />
    </Nav>
  )
};

export default Header;