import React from 'react'
import PropTypes from 'prop-types'

const userData=[
  {
  name:"Jennifer",
  city:"New York",
  description:"Backend Developer",
  skills:["Python","Java","Html","Css","Database","Spring"],
  online:true,
  profile:"img2.jpeg",
},

{
  name:"James",
  city:"America",
  description:"FullStack Developer",
  skills:["Python","Java","Html","Css","Database","Spring"],
  online:false,
  profile:"img1.jpeg",
},

{
  name:"Franklin Immanuel",
  city:"Coimbatore",
  description:"FullStack Developer",
  skills:["Python","Java","Html","Css","Database","Spring","MERN"],
  online:true,
  profile:"img3.jpg",
}

];
function User(props){
    return(
    <div className='card-container'>
        <span className= {props.online?"pro online":" pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src= {props.profile} className="img"alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
          <button className='primary'>Message</button>
          <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill,index)=>(
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
    </div>
    )
};
export const UserCard = () => {
  return (
    // <User name="James" city="America" description="Full Stack Developer"
    // skills={["Html","Css","Java","C","C++","Python","Javascript","React"]}
    // online={true} profile="img1.jpeg"
    // />
    <>
    {userData.map((data,index)=>(
      <User key={index} name={data.name} city={data.city}
      description={data.description} skills={data.skills}
      online={data.online} profile={data.profile}
      />
    ))}
    </>
  ) 
}
User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired,
}