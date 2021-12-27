import React from 'react'
import Tick from './Tick'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import CardGroup  from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
const Design = () => {
  
function handleSubmit(e){
  alert('Your favorite fruit is:' + e.value)
  e.preventDefault();
}

    return (
        <div className='tick'>
         
            <h1 className='App-header'>Robo Friends</h1>

            <form  onSubmit={handleSubmit}>
  <div>
        
<br/>
        <label><h4>Pick your favorite fruit:  
          <select>
            onChange
            <option value="mango">Orange</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="apple">Apples</option>
          <option value="jacfruit">Jack Fruit</option>
          <option value="mango">Mango</option>
          <option value="mango">Bananas</option>
        </select>
        </h4>
        </label>
        <>
        
  <Button variant="outline-success" 
          input type="submit"
          value="Submit">Check</Button>{' '}
  </>
       
  </div>
  <br/><br/>
</form>
 
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/56/e0/dd/56e0dd140b85ebddb481ddccddcb04f4.jpg"
      
    />
    <Carousel.Caption>
      <h3>Bertie Yates</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.alumni.hbs.edu/PublishingImages/stories/bulletin/2021/june/impact/diversifying-th.jpg"
     
    />

    <Carousel.Caption>
      <h3>Robo Friends</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1556020636000/photosp/4683b7c9-f010-4875-9857-b6b4213ab936/stock-photo-africa-friendship-friends-children-kids-laughing-masai-kenya-laughter-friends-happiness-4683b7c9-f010-4875-9857-b6b4213ab936.jpg"
     
    />

    <Carousel.Caption>
      <h3>Robo Friends</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    
    />

    <Carousel.Caption>
      <h3>Franck Sikak</h3>
      <p>A friend from graben catholic Congo.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/f4/b5/e6/f4b5e6cbd240336a525ac050f91a3c90.jpg"
      
    />
    <Carousel.Caption>
      <h3>Shoot for the stars</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/2d/3a/33/2d3a3383d51ab600fcc33ff49fe049c2.jpg"
     
    />

    <Carousel.Caption>
      <h3>The Big Boys</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg" />
    <Card.Body>
      <Card.Title>African Lady</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" src="https://imgix.bustle.com/elite-daily/2017/07/24123230/Insecure-Issa-Molly-Friendship-Black-Women.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" />
    <Card.Body>
      <Card.Title>Mutual</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg" />
    
      <Card.Title>Benfait</Card.Title>
    
    
  </Card>
<br/><br/>

</CardGroup>
               

 

        </div>
    )
}

export default Design
