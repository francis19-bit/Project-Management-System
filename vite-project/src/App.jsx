import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./ROUTING/MAIN SIDEBAR ROUTING/Home";
import RentPage from "./ROUTING/SIDEBAR ROUTING/RentPage";
import CommunicationPage from "./ROUTING/SIDEBAR ROUTING/CommunicationPage";
import Leasingpage from "./ROUTING/SIDEBAR ROUTING/Leasingpage";
import PeoplePage from "./ROUTING/SIDEBAR ROUTING/PeoplePage";
import AccountingPage from "./ROUTING/SIDEBAR ROUTING/AccountingPage";
import Properties from "./ROUTING/MAIN SIDEBAR ROUTING/Properties";
import Tasks from "./ROUTING/MAIN SIDEBAR ROUTING/Tasks";
import RentalApplication from "./ROUTING/MAIN SIDEBAR ROUTING/RentalApplication";
import Tenats from "./ROUTING/MAIN SIDEBAR ROUTING/Tenants";
import Leases from "./ROUTING/MAIN SIDEBAR ROUTING/Leases";
import Units from "./ROUTING/MAIN SIDEBAR ROUTING/Units";
import Reports from "./ROUTING/MAIN SIDEBAR ROUTING/Reports";
import LeaseBalancePage from "./ROUTING/SIDEBAR ROUTING/LeaseBalancePage";
import Settings from "./ROUTING/MAIN SIDEBAR ROUTING/Settings";
import TaskPage from "./ROUTING/SIDEBAR ROUTING/TaskPage";
import AllTasks from "./ROUTING/MAIN SIDEBAR ROUTING/AllTasks";
import ChartofAccounting from "./ROUTING/MAIN SIDEBAR ROUTING/ChartOfAccounting";
import ActiveLeases from "./ROUTING/MAIN SIDEBAR ROUTING/ActiveLeases";
import Rent from "./ROUTING/MAIN SIDEBAR ROUTING/Rent";
import Property2 from "./ROUTING/MAIN SIDEBAR ROUTING/Property2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/rentalapplication"
          element={<RentalApplication />}
        ></Route>
        <Route
          path="/chartofaccounting"
          element={<ChartofAccounting />}
        ></Route>
        <Route path="/prop" element={<Property2 />}></Route>
        <Route path="/rent" element={<Rent />}></Route>
        <Route path="/activeLeases" element={<ActiveLeases />}></Route>
        <Route path="/alltask" element={<AllTasks />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/leasebalance" element={<LeaseBalancePage />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/units" element={<Units />}></Route>
        <Route path="/leases" element={<Leases />}></Route>
        <Route path="/tenants" element={<Tenats />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/properties" element={<Properties />}></Route>
        <Route path="/rentpage" element={<RentPage />}></Route>
        <Route path="/compage" element={<CommunicationPage />}></Route>
        <Route path="/leasing" element={<Leasingpage />}></Route>
        <Route path="/people" element={<PeoplePage />}></Route>
        <Route path="/SidebarTasks" element={<TaskPage />}></Route>
        <Route path="/accounting" element={<AccountingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
