import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar";

const shortText = "Khandker Sadia Rahman";
const longText =
  "Hi guys!"

function App() {
  return (
  <div>
    <Navbar />
    <img src={require("./Headshot.jpeg")} width="300" height="300" class="d-inline-block align-top" alt="" />
    <p>{shortText}</p>
    <p>{longText}</p>
  </div>
  
  );
}

export default App;

