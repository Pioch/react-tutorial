import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);
 
  //items = [];
  //const message = items.length == 0 ? <p>Brak</p> : null;

  const getMessage = () => {
    return items.length == 0 ? <p>Brak</p> : null;
  }

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    //<Fragment>
    <>
      <h1>{heading}</h1>
      {/*getMessage()*/}
      {items.length == 0 && <p>Brak</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            key={item} 
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
            onClick={() => { setSelectedIndex(index); }}>
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
