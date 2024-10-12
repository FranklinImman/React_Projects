import './pagination.css'
function Page({ currentPage, totalPages=10, onPageChange }) {
    function generatePageNumber() {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      
      return pages;

    }

    generatePageNumber();
  
    return (
      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
        {generatePageNumber().map((pageno) => (
          <button
            className={`pagination-btn ${currentPage === pageno?'active':''}`}
            key={pageno}
            onClick={() => onPageChange(pageno)}
          >  
            {pageno}
          </button>
        ))}
  
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  }
  
  export default Page;
  