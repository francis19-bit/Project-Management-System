import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RentPage from "./Components/RentPage";
import CommunicationPage from "./Components/CommunicationPage";
import Leasingpage from "./Components/Leasingpage";
import PeoplePage from "./Components/PeoplePage";
import AccountingPage from "./Components/AccountingPage";
import Properties from "./Compo2/Properties";
import Tasks from "./Compo3/Tasks";
import RentalApplication from "./Compo3/RentalApplication";
import Tenats from "./Compo3/Tenants";
import Leases from "./Compo3/Leases";
import Units from "./Compo3/Units";
import Reports from "./Compo3/Reports";
import LeaseBalancePage from "./Lease Balance Page/LeaseBalancePage";
import Settings from "./Compo3/Settings";
import TaskPage from "./Components/TaskPage";
import AllTasks from "./Compo4/AllTasks";
import ChartofAccounting from "./Accounting/ChartOfAccounting";
import ActiveLeases from "./Active Leases/ActiveLeases";
import Rent from "./Compo3/Rent";
import Property2 from "./Compo2/Property2";

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
