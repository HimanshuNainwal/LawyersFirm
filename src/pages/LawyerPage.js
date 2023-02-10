import { useDispatch, useSelector } from 'react-redux'
import AppoinmentModal from '../components/AppoinmentModal'
import GridLayout from '../components/Layout/GridLayout'
import ProfileCard from '../components/CustomCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getLawyerData } from '../store/lawyerActions'

function LawyerPage() {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {lawyers} =  useSelector(state => state.lawyer)
    const [modalShow,setModalShow] = useState(false)
    const [modalData,setModalData] = useState('')
    


    
    const showAppoinmentModal = (data) => {
      // if(el.Bookings.length > 8){
        
      //   return 
      // }
          
      setModalShow(true)
      setModalData(data)
    }
    
    const closeModal = () => {
    
      setModalShow(false)
      setModalData('')
      dispatch(getLawyerData())
    }



    useEffect(() => {
      dispatch(getLawyerData())
    },[])

  return (
    <div>

    {modalShow && <AppoinmentModal show={modalShow} onHide={closeModal} lawyerdata={modalData}/>}
    
        <GridLayout>
            {lawyers && lawyers.length && lawyers.map((el,i) => {
              if(el.firmType == id){

            // return <ProfileCard data={el} key={i} btnCta={el.Bookings.length > 8?"":showAppoinmentModal} buttonText={el.Bookings.length > 8?"Appoinment Not Available":'Book Appoinment'} > 
            return <ProfileCard data={el} key={i} btnCta={showAppoinmentModal} buttonText={el.Bookings.length > 8?"Appoinment Not Available":'Book Appoinment'} > 
                <p className='m-1'>Age : {el.age}</p>
                <p className='m-1'>Speciality : {el.Speciality}</p>
                <p className='m-1' style={{fontWeight:600}}> Cost : {el.cost} </p>
            </ProfileCard>
              }

        })}

        </GridLayout>



    </div>
  )
}

export default LawyerPage






