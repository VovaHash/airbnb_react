import Header from "./components/Header"
import PhotoGrid from "./components/PhotoGrid"
import Card from './components/Card'
// import KatieImage from "./images/katie-zaferes.png";
import data from './data'

function App() {
  const cardElements = data.map((card)=>{
    return(
      <Card 
      id={card.id}
      img={card.coverImg} 
      rating={card.stats.rating} 
      reviewCount={card.stats.reviewCount} 
      location={card.location}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
      />
    )
  })
  return (
    <>
   <Header/>
   <PhotoGrid/>
   {cardElements}
   </>
  );
}

export default App;
