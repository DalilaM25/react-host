import { AppWrapper } from './AppWrapper';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { Footer } from './components/Footer.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen p-2 gap-2">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />

          <div className="flex flex-1">
            <Routes>
              <Route
                path="/dashboard/*"
                element={<AppWrapper mfName="dashboard" />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
