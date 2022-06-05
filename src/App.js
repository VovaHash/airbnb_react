import Header from "./components/Header"
import PhotoGrid from "./components/PhotoGrid"
import Card from './components/Card'
import KatieImage from "./images/katie-zaferes.png";

function App() {
  return (
    <>
   <Header/>
   <PhotoGrid/>
   <Card 
      img = {KatieImage}
      rating = "5.0"
      reviewCount = {6}
      country = "USA"
      title = "Life Lessons with Katie Zaferes"
      price = {136}
   />
   </>
  );
}

export default App;
