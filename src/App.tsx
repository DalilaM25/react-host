import { AppWrapper } from './AppWrapper.jsx';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './components/Home.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const ROUTES = {
  HOME: '/',
  CANBAN: '/canban/*',
} as const;

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen p-2 gap-2">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex flex-1">
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route
                path={ROUTES.CANBAN}
                element={<AppWrapper mfName="canban" />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
