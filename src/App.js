import './App.css';
import { Sidebar } from './screens/SidebarScreen/SideBar';
import { AppRoute } from './Route/Route';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-container">
        <AppRoute />
      </div>
    </div>
  );
}

export default App;
