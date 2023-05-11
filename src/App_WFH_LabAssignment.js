import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/WFH_LabAssignment/Layout';
import ContactUs from './components/WFH_LabAssignment/ContactUs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdmissionSchedule from './components/WFH_LabAssignment/AdmissionSchedule';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/AdmissionSchedule" element={<AdmissionSchedule/>} />
        </Route>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
