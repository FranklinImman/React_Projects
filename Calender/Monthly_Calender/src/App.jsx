import { useState } from 'react'
import left_arrow from '../public/arrow-left-solid.png';
import right_arrow from '../public/arrow-right-solid.png';
import './App.css'

function App() {

  const daysodWeek = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const [selectedDate,setSelectedDate] = useState(new Date());

  const dayInMonth = ()=>{
    const daysOfArray=[];
    const firstday = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
    const lastday = new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0);
    // console.log(firstday,lastday);

    for(let i=0;i<firstday.getDay();i++){
      daysOfArray.push(null);
    }

    // console.log(lastday.getDate())

    for(let i=1;i<=lastday.getDate();i++){
      daysOfArray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),i));
    }
    // console.log(daysOfArray)

    return daysOfArray;
  }

  const handlechangemonth=(e)=>{
    const newMonth = parseInt(e.target.value,10);
    setSelectedDate(new Date(selectedDate.getFullYear(),newMonth,1))
  }

  const handlechangeyear = (e)=>{
    const newyear = parseInt(e.target.value,10);
    setSelectedDate(new Date(newyear,selectedDate.getMonth(),1))
  }

  const isSameDay = (date1,date2)=>{
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }


  return (
    <>
     <div className="calender">
      <div className="header">
        <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth() -1,1))}}>
          <img src={left_arrow} style={{width:"18px"}} />
        </button>
        <select value={selectedDate.getMonth()}onChange={handlechangemonth}>
          {months.map((mon,index)=>(
            <option key={index} value={index}>{mon}</option>
          ))}
        </select>
        <select value={selectedDate.getFullYear()} onChange={handlechangeyear}>
          {Array.from({length:10},(_,i)=>selectedDate.getFullYear()- 5 + i).map((year)=>(
            <option key={year} value={year} >{year}</option>
          ))}
        </select>
        <button onClick={()=>{setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,1));
        }}>
          <img src={right_arrow}style={{width:"18px"}} />
        </button>
      </div>
      <div className="daysOfweek">
        {daysodWeek.map((day,index)=>(
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="days">
        {dayInMonth().map((day,index)=>(
          <div key={index}className={day?(isSameDay(day,new Date())?"day current":"day"):"empty"}>{day?day.getDate():""}</div>
        ))}
      </div>
     </div>
    </>
  )
}

export default App
