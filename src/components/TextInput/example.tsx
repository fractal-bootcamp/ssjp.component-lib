// this is an example of how to use the TextInput component

import { Search, Menu, Info } from "lucide-react";
import TextInput from "./component";
import { PopoverProps, InputValidation, InputSize, InputType } from "./types";

function App() {
  // for popover you must create a popover object
  const testPopover: PopoverProps = {
    icon: <Info />,
    active: false,
    content: "test popover content here",
  };

  return (
    <TextInput
      prefix={<Search />} // prefix is optional
      suffix={<Menu />} // suffix is optional
      validation={InputValidation.Error} // validation is optional
      popover={testPopover} // popover is optional
      size={InputSize.Large} // size is optional
      placeholder="text here guy" // placeholder is optional
      type={InputType.Password} // type is optional
      // other props are optional
    />
  );
}

export default App;
