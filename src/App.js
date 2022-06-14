import Header from "./components/Header"
import PhotoGrid from "./components/PhotoGrid"
import Card from './components/Card'
// import KatieImage from "./images/katie-zaferes.png";
import data from './data'

function App() {
  const cardElements = data.map((card)=>{
    return(
      <Card 
      key={card.id}
      {...card}
      />
    )
  })
  return (
    <>
   <Header/>
   <PhotoGrid/>
   <section className="card--wrapper">
       {cardElements}
    </section>
  
   </>
  );
}

export default App;
