import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import About from 'components/About';
import PageNotFound from 'components/PageNotFound';
import 'styles/index.scss';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default App;
