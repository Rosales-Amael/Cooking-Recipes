import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import Profil from '../Profil/Profil';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/creer-une-recette" element={<AddRecipeForm />} />
        <Route path="/connexion" element={<LoginForm />} />
        <Route path="/cree-mon-compte" element={<RegisterForm />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/details-recette/1" element={<RecipeDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
