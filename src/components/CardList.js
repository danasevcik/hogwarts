import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div>
      {props.hogList.map(hog => {
        return <Card hog={hog}/>
      })}
    </div>
  )
}

export default CardList;
