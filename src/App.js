import "./App.css";
import Navbars from "./components/Layout/Navbars";
import { Container } from "react-bootstrap";
import Users from "./components/Content/users/Users";

function App() {
  return (
    <Container fluid>
      <Navbars titel = {"github"} />
      <Users />
    </Container>
  );
}

export default App;
