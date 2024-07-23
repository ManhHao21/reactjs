import { useState } from "react";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/Edit";

function App() {
  const [isEdit, setEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
    </div>
  );
}

export default App;
