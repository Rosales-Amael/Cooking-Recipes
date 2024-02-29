import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import Profil from '../Profil/Profil';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import Home from '../Home/Home';
import Search from '../Search/Search';
import RecipeType from '../RecipeType/RecipeType';
import AuthLayout from '../../layouts/AuthLayout';
import GuestLayout from '../../layouts/GuestLayout';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<Search />} />
        <Route path="/entrees" element={<RecipeType title="Entrées" />} />
        <Route path="/plats" element={<RecipeType title="Plats" />} />
        <Route path="/desserts" element={<RecipeType title="Desserts" />} />
        <Route path="/details-recette/1" element={<RecipeDetails />} />

        <Route element={<AuthLayout />}>
          <Route path="/profil" element={<Profil />} />
          <Route
            path="/creer-une-recette"
            element={<AddRecipeForm isFormIsEdit={false} />}
          />
          <Route
            path="/modifier/pancakes/2"
            element={<AddRecipeForm isFormIsEdit />}
          />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/connexion" element={<LoginForm to="/connexion" />} />
          <Route
            path="/cree-mon-compte"
            element={<RegisterForm to="/creer-mon-compte" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
