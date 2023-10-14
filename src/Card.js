import React from 'react'
import './card.css'
import Tic from './assest/icon.svg';
import Dot from './assest/dot.svg';
import dotimg from './assest/dotimg.svg'
import high from './assest/high.svg'






const fontcolor = (id) => {
    if (id === 'usr-1') {
        return "#FF8080";
    }

    else if (id === 'usr-2') {
        return "#952323";
    }
    else if (id === 'usr-3') {
        return "#232D3F";
    }
    else if (id === 'usr-4') {
        return "#618264";
    }
    else if (id === 'usr-5') {
        return "#E55604";
    }
    else {
        return "#FF3FA4";
    }
}
const Profile = (id) => {
    if (id === 'usr-1') {
        return "A";
    }
    
    else if (id === 'usr-2') {
        return "Y";
    }
    else if(id === 'usr-3') {
        return "S";
    }
    else if(id === 'usr-4') {
        return "R";
    }
    else if(id === 'usr-5') {
        return "S";
    }
    else {
        return "P";
    }
}


const priority_logo = (Value) => {
    if (Value === "Todo") {
        return "   https://cdn-icons-png.flaticon.com/512/808/808569.png "
    }
    else if (Value === "Done") {
        return "   https://cdn-icons-png.flaticon.com/512/10327/10327211.png "
    }
    else if (Value === "In progress") {
        return "   https://cdn-icons-png.flaticon.com/512/7154/7154465.png "
    }   
}

const Card = ({ title, arr }) => {
    return (
        <div className='len_wid'>
              <div className='upper'>
                  <div className='cam'>{title.id}</div>
                  <div className='profile' style={{"backgroundColor":fontcolor(title.userId)}}>
                    <div className='text'>
                        {Profile(title.userId)}
                    </div>
                    <div className='empty'></div>
                     
                </div>
              </div> 
              <div className='mid'>
                  <div className='title_name'>{title.title}</div>
            </div>
            <div className='dis-flex'>
                 
                <div className='lower'>
                    <img src={Dot} alt="dot" />
                    <div className='low_title'>{title.tag[0]}</div>
                </div>
             </div>
             
            </div>
        
  )
}

export default Card