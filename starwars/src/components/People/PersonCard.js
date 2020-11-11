import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, div } from 'reactstrap';
import '../StarWars.css';

const Person = props => {
  const person = props.data;
  return (
    <div >
      <div className='cardContainer'>
        <Card className='card'>
          <CardBody className='cardBody'>
            <CardTitle className='personName'>
              <span>{person.name}</span>
            </CardTitle>
            <CardText className='cardElement'>
              <span>Gender: </span>{person.gender}
            </CardText>
            <CardText className='cardElement'>
              <span>Height: </span>{person.height}
            </CardText>
            <CardText className='cardElement'>
              <span>Hair Color: </span>{person.hair_color}
            </CardText>
            <CardText className='cardElement'>
              <span>Eye Color: </span>{person.eye_color}
            </CardText>
            <CardText className='cardElement'>
              <span>Born: </span>{person.birth_year}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Person;
