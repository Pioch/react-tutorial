import ListGroup from "./components/ListGropu";

function App() {
  let items = [
    'Kot', 'Pies', 'Kaczka', 'Krowa', 'Kurczak'
  ];

  return <div><ListGroup items={items} heading="Zwierzęta"></ListGroup></div>;
}

export default App;