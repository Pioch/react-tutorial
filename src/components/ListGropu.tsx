//import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = [
    'Kot', 'Pies', 'Kaczka', 'Krowa', 'Kurczak'
  ];

  //items = [];
  //const message = items.length == 0 ? <p>Brak</p> : null;

  const getMessage = () => {
    return items.length == 0 ? <p>Brak</p> : null;
  }

  return (
    //<Fragment>
    <>
      <h1>List</h1>
      {/*getMessage()*/}
      {items.length == 0 && <p>Brak</p>}
      <ul className="list-group">
        {items.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
