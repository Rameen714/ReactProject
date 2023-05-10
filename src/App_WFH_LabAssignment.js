import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<ContactUs/>} />
        </Route>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
