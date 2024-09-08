import ListGroup from "./components/ListGropu";

function App() {
  let items = [
    'Kot', 'Pies', 'Kaczka', 'Krowa', 'Kurczak'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Zwierzęta" onSelectItem={handleSelectItem}></ListGroup></div>;
}

export default App;