import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [posterperImage,setPosterperImage] = useState(10);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const posts = await response.json();
        setData(posts);
        setLoading(false); 
      } catch (error) {
        console.log(error);
        setLoading(false); 
      }
    };
    fetchdata();
  }, []);

  const indexofLastpost = currentPage * posterperImage;
  const indexofFirstpost = indexofLastpost - posterperImage;

  const currentPost = data.slice(indexofFirstpost,indexofLastpost);

  const totalPages = Math.ceil(data.length/posterperImage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>; 

  return (
    <>
      <h1 className='mx-5'>Paginations</h1>
    <div className="container m-5 d-flex flex-column   justify-content-start align-items-start flex-direction-column">
    { currentPost.map((post) => (
        <div className='p-2' key={post.id}>
          {post.id}.{post.title}
        </div>
      ))}
    </div>

      <div  className="container">
      <button className='btn btn-success m-1' onClick={()=>paginate(1)}>First</button>
      <button className='btn btn-primary m-2' disabled={currentPage===1} onClick={()=>paginate(currentPage-1)}>Previous</button>
      {new Array(totalPages).fill(0).map((_,index)=>{
        return (
          <button key={index+1} onClick={()=>paginate(index+1)} className={currentPage===index+1?'btn btn-info m-1':'btn btn-light m-1'}>{index+1}</button>
        )
      })}
      <button className='btn btn-primary m-1 ' disabled={currentPage===totalPages} onClick={()=>paginate(currentPage+1)}>Next</button>
      <button  className='btn btn-success m-2' onClick={()=>paginate(10)}>Last</button>
      </div>

    </>
  );
}

export default App;
