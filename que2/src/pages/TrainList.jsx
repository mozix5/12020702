import React from 'react'
import Train from './Train'

const TrainList = (props) => {
  return (
    <div>
        {
            props.data.map((item,index)=>{
                {/* console.log(item.trainName) */}
                
                 return(

                <Train name={item.trainName} no={item.trainNumber} slPrice={item.price.sleeper} acPrice={item.price.AC} key={index} slAvl={item.seatsAvailable.sleeper} acAvl={item.seatsAvailable.AC} hours={item.departureTime.Hours} minutes={item.departureTime.Minutes} />
                 )
            })
        }
    </div>
  )
}

export default TrainList