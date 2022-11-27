import ServicesGoogle from "./ServicesGoogle";
import { Nav } from "./styled";
import Weather from "./weather";

const Navigation = () => {
  return (
    <Nav>
      <Weather />
      <ServicesGoogle />
    </Nav>
  )
};

export default Navigation;