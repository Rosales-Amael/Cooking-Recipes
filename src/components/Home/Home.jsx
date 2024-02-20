import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.scss';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import LoginForm from '../LoginForm/LoginForm';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Routes>
        <Route path="/creer-une-recette" element={<AddRecipeForm />} />
        <Route path="/connexion" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default Home;
