import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Initial } from './pages/Initial';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { Home } from './pages/Home';
import { MyHome } from './pages/MyHome';
import { NotFound } from './pages/NotFound';
import { Palette } from './pages/Palette';

export const App: FC = () => (
  <Routes>
    <Route path="/" element={<Initial />} />
    <Route path="/create" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/:username" element={<MyHome />} />
    <Route path="/:username/palette/:paletteId" element={<Palette />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
