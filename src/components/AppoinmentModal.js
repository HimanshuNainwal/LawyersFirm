
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import classes from './AppoinmentModal.module.css'

function AppoinmentModal(props) {
// for now usigin static timings 
  const appoinmentTiming = ["10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM"]
  const [loader, setLoader] = useState(false)

  const [lawyerdata, setlawyerdata] = useState(props.lawyerdata)

  const bookSlot = async (time, id) => {

    try {

      if (lawyerdata.Bookings && lawyerdata.Bookings.includes(time)) {
        return
      }

      setLoader(true)
      const Bookings = { Bookings: [...lawyerdata.Bookings, time] }
      const response = await axios.patch(`http://localhost:3000/laywers/${id}`, Bookings)
      if (response.status === 200) {

        setlawyerdata(response.data)
      }
      setTimeout(() => {

        setLoader(false)
      }, 500)

    } catch (err) {
      console.log(err)
    }
  }

  return (


    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {lawyerdata.name}
        </Modal.Title>
      </Modal.Header>

      {loader ? <Spinner animation="border" className={classes.LoaderSpinner} variant="primary" /> :
        <Modal.Body>
          <h4>Book An Appoinment</h4>
          <div className={`${classes.appoinmentContainer}`}>
            {appoinmentTiming.length > 0 && appoinmentTiming.map((el, i) => {
              return <span className={`${classes.slot} ${lawyerdata.Bookings.includes(el) ? classes.disabled : ''} `} onClick={bookSlot.bind(null, el, lawyerdata.id)} key={i}>{el}</span>
            })
            }

          </div>

        </Modal.Body>}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppoinmentModal
