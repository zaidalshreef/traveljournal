import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import data from "./data";
function App() {
  let cards = data.map((card,index) => {
    return <Card key={index} {...card} />;
  });
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        {cards}
      </main>
    </div>
  );
}

export default App;
