import "./App.css";
import Timeline from "./components/Timeline/component";
import { Camera, Calendar } from 'lucide-react';


function App() {
  return <div>Hello
    <div>
      <Timeline data={[
        {
          id: 'event1',
          date: 'Jan 15, 2023',
          title: 'Single Event',
          description: 'This is a standalone event.',
          detailedDescription: 'More details about this standalone event.',
          icon: <Calendar size={16} />,
        },
        {
          id: 'group1',
          title: '2023 Events',
          events: [
            {
              id: 'event2',
              date: 'Mar 1, 2023',
              title: 'Project Milestone',
              description: 'Completed the first phase.',
              detailedDescription: 'Detailed information about the first project phase completion.',
              icon: <Camera size={16} />,
            },
            // More events...
          ],
        },
        // More events or groups...
      ]
      } />
    </div>
  </div>;

}

export default App;
