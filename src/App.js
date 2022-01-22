import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Menu from './components/Menu'
import Contact from './pages/Contact';

const  App = ()=> {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
        <Route path="/" element={<Homepage />} exact>      
        </Route>
        <Route path="/projects" element={<Projects />}>       
        </Route>
        <Route path="/contact" element={<Contact />}>       
        </Route>
        <Route path ="*" element={<Error />}>
        </Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App;

