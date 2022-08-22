import "./App.css";
import TopBar from "./conponents/TopBar";
import SideBar from "./conponents/SideBar";
import SearchSection from "./conponents/SearchSection";
import FilterSection from "./conponents/FilterSection";
import Table from "./conponents/Table";

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <SideBar />
        <div className='columnSide'>
          <TopBar />
          <SearchSection />
          <FilterSection />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
