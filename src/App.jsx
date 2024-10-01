import './App.css'
import ProductCard from './Component/ProductCard'
import Slider from './Component/Slider/Slider'
import Button from './Component/Title/Button'
import Title from './Component/Title/Title'


function App() {

  return (
  <div>
      
     <Title title={'meet'} color={'blue'} fontsize={40} center={'center'}/>

     <Slider/>


   <div className="container">
    <ProductCard 
      price={15}
      quantity={21} 
      Name={'chiken'} 
      Description={'This is good chicken'} 
      bg={'red'}
      />

    <ProductCard
    price={30}
    quantity={41} 
    Name={'steak'} 
    Description={'This is a good steak'} 
    bg={'white'}
    />

    </div> 
 
    <Button text={'click my'} width={300} height={40} bg={'brown'} br={'10px'}  />
 
  </div>
  )
}

export default App
