import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage, SearchPageCodigo } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="motos" element={<MarvelPage />} />
                <Route path="autos" element={<DcPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:nombre" element={<HeroPage />} />
                <Route path="searchC" element={<SearchPageCodigo />} />

                <Route path="/" element={<Navigate to="/motos" />} />

            </Routes>
        </div>


    </>
  )
}
