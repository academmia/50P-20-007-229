
import React, { useState } from 'react';

function initState() {
  console.log('initState run...');
  return 1;
}

const PageNav = props => {

  const [currentPage, setCurrentPage] = useState(initState);

  const [info, setInfo] = useState({ userId: 10, currentBook: 'One' });

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const firstPage = () => setCurrentPage(0);
  const lastPage = () => setCurrentPage(10);

  return (
    <>
      <div>
        <button onClick={firstPage}> First </button>
        <button onClick={prevPage} className="ml-1"> Prev </button>
        <span> Current page: {currentPage} </span>
        <button onClick={nextPage}> Next </button>
        <button onClick={lastPage} className="ml-1"> Last </button>
      </div>
      <div>
        <p> userId: {info.userId} </p>
        <p> currentBook: {info.currentBook} </p>

        <button onClick={() => setInfo(prevState => ({ ...prevState, currentBook: 'Two' }))}>
          Read book 'Two' </button>
      </div>
    </>
  )
}

export default PageNav;

