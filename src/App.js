import Accordion from "./components/Accordion";
import './assets/styles/_index.scss'

function App() {
  const items = [
    {
      id: "1",
      title: 'منوی کاربر ',  
      value: 'false'
    },
    {
      id: "2",
      title: 'اطلاعات حساب کاربری',
      value: 'true'
    },
    {
      id: "3",
      title: 'تغییر فونت',
      value: 'true'
    },
  ]
  return (
    <div className="App">
      <Accordion checkboxes={items}/>
    </div>
  );
}

export default App;