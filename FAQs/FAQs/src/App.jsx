import { useState } from 'react'
import './App.css'

const Faqitem = ({question,answer})=>{
  const [show,setShow]=useState(false);

  const handleClick = ()=>{
    setShow(!show);
  }

  return (
    <div className={`faq-item ${show?"active":"" }`}>
    <div className="faq-item-header" onClick={handleClick}> {question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
         {answer}
        </div>
      </div>
 
    </div>
  )
}

const FaqAccordian = ({data})=>{
  return (<div className="faq-accordian">
<h2>FAQs</h2>
{data.map((item)=>(
    <Faqitem key={item.id} question={item.question}
    answer={item.answer}/>

))}
  </div>
  );
}

const data = [
  {id:1,question:"What is react?",answer:"React is a JavaScript library that helps developers to build user interfaces – the things you interact with on websites. It has become popular because of its simplicity and flexibility and is used by companies like Facebook, Instagram and Airbnb."},
  {
    id:2,question:"Why is React famous?",answer:"One of the primary reasons for React's popularity is its ease of use. React uses a component-based architecture, which makes it easy to break down complex user interfaces into smaller, reusable parts. Developers can easily build and maintain these components, which saves time and reduces the risk of errors."
  },
  {
    id:3,question:"Is React easy to learn?",answer:"React has a steeper learning curve compared to other libraries like Vue. js. However, it's still a good choice for beginners due to its extensive community, abundant resources, and wide industry adoption."
  },
  {
    id:4,question:"What tool is React?",answer:"Known for its versatility, React simplifies building apps and websites, creating UI test cases, reusing existing website code on mobile counterparts, and improving UI and web application performances. React developers, in turn, use ReactJS to design and launch user-friendly features in websites and applications"
  }
];

function App() {

  return (
    <>
     <div className="App">
      <FaqAccordian data={data}/>
     </div>
    </>
  )
}

export default App
