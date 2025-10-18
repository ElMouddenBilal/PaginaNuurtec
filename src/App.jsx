// src/App.jsx
import './App.css';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Future from './components/Future';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import ProblemSolution from './components/ProblemSolution';
import SeccionCTA from './components/SeccionCTA';

// 🔽 React Router para manejar las rutas
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// 🔽 Importamos las páginas legales
import AvisoLegal from "./pages/legal/AvisoLegal";
import Privacidad from "./pages/legal/Privacidad";
import Cookies from "./pages/legal/Cookies";
import Terminos from "./pages/legal/Terminos";

// 🔹 Layout general: Navbar y Footer visibles en todas las páginas
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se carga el contenido de cada ruta */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Todas las rutas usan el layout común con Navbar y Footer */}
        <Route element={<MainLayout />}>
          
          {/* 🔸 Landing principal */}
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <section id="problem-solution">
                  <ProblemSolution />
                </section>

                <section id="how-it-works">
                  <HowItWorks />  
                </section>

                <section id="benefits">
                  <Benefits />
                </section>

                <section id="apply">
                  <SeccionCTA />
                </section>

                <section id="faq">
                  <FAQ />
                </section>
              </>
            }
          />

          {/* 🔸 Páginas legales (se abren aparte con Navbar + Footer) */}
          <Route path="/legal/aviso-legal" element={<AvisoLegal />} />
          <Route path="/legal/privacidad" element={<Privacidad />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/legal/terminos" element={<Terminos />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
