import React, { useState, useEffect } from "react";
import Glider from "react-glider";

import "glider-js/glider.min.css";
import './App.css';

interface SlideProps {
  images: string[],
  id: number,
}

interface MiniatureProps {
  image: string,
  id: number,
  handleClick?: any
}

const Slide = (props: SlideProps) => {
  const [clicked, setClicked] = useState<null | number>(null);

  return (
    <div className="image-mosaic">
      {props.images.map((image: string, i: number) => {
        if (clicked !== null) {
          if (i === 0) {
            if (clicked < 3) {
              return (
                <>
                  <div className="card card-tall card-wide" key={`${props.id}${i}`} style={{backgroundImage: `url('${props.images[clicked]}')`}} onClick={() => setClicked(clicked)}></div>
                  <div className="card" key={`${props.id}3`} style={{backgroundImage: `url('${props.images[3]}')`}} onClick={() => setClicked(3)}></div>
                </>
              )
            } else {
              return (
                <div className="card card-tall card-wide" key={`${props.id}${i}`} style={{backgroundImage: `url('${props.images[clicked]}')`}} onClick={() => setClicked(clicked)}></div>
              )
            }
          } else if (i < 3 && i !== clicked) {
            return (
              <div className="card" key={`${props.id}${i}`} style={{backgroundImage: `url('${image}')`}} onClick={() => setClicked(i)}></div>
            )
          } else {
            return '';
          }
        } else {
          return (
            <div className="card" key={`${props.id}${i}`} style={{backgroundImage: `url('${image}')`}} onClick={() => setClicked(i)}></div>
          )
        }
      })}
    </div>
  );
}

const Miniature = (props: MiniatureProps) => {
  const handleClick = (number: number) => {
    console.log(number);
    props.handleClick(number);
  }

  return (
    <div style={{marginRight: '5px', cursor: 'pointer'}} onClick={() => handleClick(props.id)}>
      <img src={props.image} alt={props.image} style={{width: '70px'}} />
    </div>
  );
}

const App = () => {
  const [snumber, setSnumber] = useState(0);
  const [images, setImages] = useState([]);

  const gliderRef = React.useRef<any>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/api/images');
      const responseJson = await response.json();

      setImages(responseJson);

      console.log(responseJson);
    })();
  }, []);

  const handleClick = (number: number) => {
    setSnumber(number);
    gliderRef.current?.scrollItem(number);
  }

  return (
    <div style={{maxWidth: '980px', margin: 'auto', marginTop: '20px'}}>
      <Glider
        ref={gliderRef}
        draggable
        hasArrows
        slidesToShow={1}
        slidesToScroll={1}
        scrollToSlide={snumber + 1}
        className="gradient-outline"
      >
        {images.map((images2, i) => {
          if (i === snumber) {
            return <Slide images={images2} id={i} key={i} />
          } else {
            return "";
          }
        })}
      </Glider>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        {images.map((images2, i) => {
          return <Miniature image={images2[0]} id={i} handleClick={() => handleClick(i)} key={i} />
        })}
      </div>
    </div>
  );
}

export default App;
