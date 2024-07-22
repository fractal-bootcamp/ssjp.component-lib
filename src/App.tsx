import "./App.css";
import TextInput from "./components/TextInput/component";
import { InputSize, InputType } from "./components/TextInput/types";

function App() {
  return (
    <TextInput
      size={InputSize.Medium}
      placeholder="text here guy"
      type={InputType.Text}
    />
  );
}

export default App;
