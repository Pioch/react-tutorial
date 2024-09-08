import Button from "./components/Button"

function App() {
  const handleClick = (text: number) => {
    console.log(text);
  }

  return (
    <div>
      <Button>Nazwa</Button>
    </div>
   
  )
}

export default App;