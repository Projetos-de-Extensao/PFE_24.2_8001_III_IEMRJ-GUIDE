import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Begin from './components/begin.jsx';
import Map from './components/mapa.jsx';
import Teams from './components/times.jsx';
import SchedulePage from './components/programacao.jsx';
import Services from './components/servicos.jsx';
import FAQ from './components/faq.jsx';
import LoginPage from './components/login.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home" style={{ height: 'auto' }}>
                <Begin />
              </section>
              <section id="Map" style={{ height: 'auto' }}>
                <Map />
              </section>
              <section id="teams" style={{ height: 'auto' }}>
                <Teams />
              </section>
              <section id="schedule" style={{ height: 'auto' }}>
                <SchedulePage />
              </section>
              <section id="services" style={{ height: 'auto' }}>
                <Services />
              </section>
            </>
          }
        />
        <Route path='login' element={<LoginPage />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
