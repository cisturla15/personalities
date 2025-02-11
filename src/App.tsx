import { useState } from 'react';
import { artistList } from './data.tsx';
import './index.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < artistList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : artistList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const artist = artistList[index];

  return (
    <div className="gallery-container">
      <h1>CRISTOPHER IAN S. TURLA</h1>
      <p>BSIT - 3A</p>

      <h2>{artist.artist}</h2>
        <h3>- {index + 1} / {artistList.length} -</h3>

      <div className="card">
        <img className="artist" src={artist.url} alt={artist.artist} />
        
        <button onClick={handleMoreClick} className="details-button">
          {showMore ? 'Hide' : 'Show'} Details
        </button>

        {showMore && <p className="description">{artist.description}</p>}
      </div>

    

      <div className="buttons-container">
        <button onClick={handlePrevClick} disabled={!hasPrev} aria-label="Previous Artist">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button onClick={handleNextClick} aria-label="Next Artist">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
