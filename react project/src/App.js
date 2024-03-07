import React, { useState } from 'react';
import './App.css';

function ImageRow({ setMainImage }) {
  let urls = [];
  for (let i = 0; i < 10; i++) {
    urls.push(`https://picsum.photos/200/300?random=${i * 10 + i}`);
  }

  const handleImageHover = (url) => {
    setMainImage(url);
  };

  const gallery = urls.map((url, index) => (
    <img
      key={index}
      src={url}
      alt=""
      style={{ margin: '5px', width: '100px', height: '100px' }}
      onMouseEnter={() => handleImageHover(url)}
    />
  ));
  
  return (
    <div>{gallery}</div>
  );
}

function App() {
  const [mainImage, setMainImage] = useState('');

  return (

        <div className="app-container">
          <div className="main-image-container">
            {mainImage && <img alt="" src={mainImage} style={{ width: '200px', height: '200px' }} />}
          </div>
          <div className="image-row-container">
            <ImageRow setMainImage={setMainImage} />
          </div>
        </div>  

  );
}


export default App;
