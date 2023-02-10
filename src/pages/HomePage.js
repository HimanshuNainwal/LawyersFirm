import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import FirmCard from '../components/CustomCard'
import GridLayout from '../components/Layout/GridLayout'



function HomePage() {

  const [firms,setFirms] = useState([])
  const navigate = useNavigate()

    useEffect(() => {
      const getFirms = async() => {
        try{
          const response = await axios('http://localhost:3000/firms')
          
          if(response.status === 200){
            setFirms(response.data)
          }
        }catch(err){
          // some task when data failed to load
        }
      }
      getFirms()
    },[])
    
  return (
    <>


<GridLayout>
      {firms.length > 0 && firms.map((el,i) => {
        return <FirmCard data={el} key={i} buttonText="View Firm" btnCta={() => navigate(`/${el.id}`)}>
          <p> {el.about}</p>  
        </FirmCard> 
      })
      
      }
      </GridLayout>
  

  </>

  )
}

export default HomePage