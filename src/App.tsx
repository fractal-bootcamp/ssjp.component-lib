import "./App.css";
import Accordion from "./components/Accordion/component";

const data = [
  {
    title: "Single Item",
    content: "Single Item content",
  },
  {
    title: "Nested Item",
    content: [
      {
        title: "Nested Item 1",
        content: "Nested Item 1 content",
      },
      {
        title: "Nested Item 2",
        content: [
          {
            title: "Nested Item 2.1",
            content: "Nested Item 2.1 content",
          },
          {
            title: "Nested Item 2.2",
            content: "Nested Item 2.2 content",
          },
        ],
      },
      {
        title: "Nested Item 3",
        content: "Nested Item 3 content",
      },
    ],
  },
  {
    title: "Single Item 2",
    content: "Single Item 2 content",
  },
];

function App() {
  return (
    <div className="container w-full m-auto p-auto">
      <Accordion data={data} expanded={true} />
    </div>
  );
}

export default App;
