import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { lawyerAction } from '../store/lawyerSlice';


function ProfileCard(props) {

  const buttonAction = ()=>{
    if(props.btnCta){
      props.btnCta(props.data)
    }
  }
  
    return (
    <Card >
        <Card.Img variant="top" src={`/images/${props.data.image}.jpg`}  className={props.imageClassName}/>
        <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
                {props.children}     
            <Button variant="primary" onClick={buttonAction} >{props.buttonText}</Button>
        </Card.Body>
    </Card>
  )
}


export default ProfileCard