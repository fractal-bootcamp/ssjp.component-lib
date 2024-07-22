import { Eye } from "lucide-react";
import "./App.css";
import TextInput from "./components/TextInput/component";
import { InputSize, InputType } from "./components/TextInput/types";

function App() {
  return (
    <TextInput
      // prefix={<Eye />}
      // suffix={<Eye />}
      size={InputSize.Large}
      placeholder="text here guy"
      type={InputType.Password}
    />
  );
}

export default App;
