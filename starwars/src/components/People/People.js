import React from 'react';
import Person from './PersonCard.js';
import { Row } from 'reactstrap';

const People = props => {
  if (!props.people) {
    return <h3>Loading...</h3>;
  }
  console.log(props.people)
  return (
    props.people.map((person, index) => {
      return (
        <Row>
          <Person data={person} key={index} />
        </Row>);
    })
  )
}

export default People;
