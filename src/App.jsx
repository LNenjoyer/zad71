import List from "./List"
 
const App = () => { 
  return ( 
      <div> 
          <List heading="Miasta" items={["Nowy Jork", "Londyn", "Paryż"]} /> 
          <List heading="Imiona" items={["Anna", "Kamil", "Ola"]} /> 
          <List heading="Kolory"  /> 
      </div> 
  ); 
}; 

export default App

