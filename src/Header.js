import React from 'react'
import "./card.css"
import high from "./assest/high.svg"
import plus from "./assest/plus.svg"; 
import dotimg from "./assest/dotimg.svg"
import urgent from './assest/urgent.svg'
 



const Myfunction = (Value) => {
    if (Value === '0') {
        return "No Priority"; 
    }
    else if (Value === '4') {
        return "Low"; 
    }
    else if (Value === '3') {
        return "Medium";
    }
    else if (Value === '2') {
        return "High";
    }
    else if (Value === '1') {
        return "Urgent";
    }
    else {
        return Value;
    }
}


const priority_logo = (Value) => {
    if (Value === '0') {
        return dotimg;
    }
    else if (Value === '1') {
        return "https://cdn-icons-png.flaticon.com/512/5619/5619095.png";

    }
    else if (Value === '2') {
        return high;

    }
    else if (Value === '3') {
        return high;
    }
    else if (Value === '4') {
        return high;
    }
    else {
        if (Value === "Todo") {
            return "   https://cdn-icons-png.flaticon.com/512/808/808569.png "
        }
        else if (Value === "Done") {
            return "   https://cdn-icons-png.flaticon.com/512/10327/10327211.png "
        }
        else if (Value === "In progress") {
            return  "   https://cdn-icons-png.flaticon.com/512/7154/7154465.png "
        }
        else {
            return "   https://cdn-icons-png.flaticon.com/512/3870/3870822.png "
         }
    }   
}

const Header = ({Value, cnt}) => {
    return (
        <div className='hader_flex'>
            <div className='align'>
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <img className='dot_dot' src={priority_logo(Value)} alt="high"/>
                <h4 className='h4class'>
                
                    &nbsp;
                    {Myfunction(Value)}
                </h4>
                <p className='len' >{cnt}</p>
                 
        </div>
         <div>
            <img className='dot_dot' src={plus} alt="high"/>
            <img className='dot_dot' src={dotimg} alt="high"/>
        </div>
       </div> 
  )
}

export default Header