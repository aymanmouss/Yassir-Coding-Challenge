import "./App.css";
import TopBar from "./conponents/TopBar";
import SideBar from "./conponents/SideBar";
import SearchSection from "./conponents/SearchSection";
import FilterSection from "./conponents/FilterSection";

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <SideBar />
        <div className='columnSide'>
          <TopBar />
          <SearchSection />
          <FilterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
