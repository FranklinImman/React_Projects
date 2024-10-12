import { useState } from "react";
import Page from ".";

function PaginationTest() {

    const dummyData = Array.from({length:100},(_,index)=>({
        id : index + 1,
        name : `Product ${index}`
    }));
    // console.log(dummyData);

    function onPageChange(currentPage){
        setCurrentPage(currentPage);
    }

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    return ( 
        <div>
            <h1>Pagination</h1>
            <ul className="list-items">
                {currentItems.map((item)=>(
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
         <Page currentPage={currentPage}  onPageChange={onPageChange}/>
        </div>
     );
}

export default PaginationTest;