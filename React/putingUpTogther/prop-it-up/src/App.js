import './App.css';
import PersonCard from './components/PersonCard';
var peopleArr = [
  { "firstName": "Yazan", "lastName": "Kayed", "age": 24, "hairColor": "Blonde" },
  { "firstName": "Kareem", "lastName": "Taha", "age": 25, "hairColor": "Blonde" },
  { "firstName": "Lotfi", "lastName": "Haj", "age": 21, "hairColor": "Brown" },
  { ":firstName": "Ayman", "lastName": "Shamali", "age": 26, "hairColor": "Black" }
]

const cx = {

  ":firstName": "sdfsdf"
}

console.log(cx.firstName);

function App() {
  return (
    <div className="App">

      {/* <PersonCard firstName={ "Yazan" } lastName={ "Kayed" } age={24} hairColor ={"Blonde"} />
      <PersonCard firstName={ "Kareem" } lastName={ "Taha" } age={25} hairColor ={"Blonde"} />
      <PersonCard firstName={ "Lotfi" } lastName={ "Haj" } age={21} hairColor ={"Brown"} />
      <PersonCard firstName={ "Ayman" } lastName={ "Shamali" } age={26} hairColor ={"Black"} /> */}
      {

        peopleArr.map(person => {

          return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
        }
        )
      }
      <div>

      </div>
    </div>

  );
}
export default App;