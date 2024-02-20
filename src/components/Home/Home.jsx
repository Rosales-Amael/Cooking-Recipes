import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.scss';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Routes>
        <Route path="/creer-une-recette" element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
}

export default Home;
