import { Eye, Info } from "lucide-react";
import "./App.css";
import TextInput from "./components/TextInput/component";
import {
  InputSize,
  InputType,
  PopoverProps,
} from "./components/TextInput/types";

function App() {
  const testPopover: PopoverProps = {
    icon: <Info />,
    active: false,
    content: "test popover content here",
  };

  return (
    <TextInput
      // prefix={<Eye />}
      // suffix={<Eye />}
      popover={testPopover}
      size={InputSize.Large}
      placeholder="text here guy"
      type={InputType.Password}
    />
  );
}

export default App;
