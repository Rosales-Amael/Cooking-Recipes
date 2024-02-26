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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/creer-une-recette"
          element={<AddRecipeForm isFormIsEdit={false} />}
        />
        <Route path="/connexion" element={<LoginForm />} />
        <Route path="/cree-mon-compte" element={<RegisterForm />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/details-recette/1" element={<RecipeDetails />} />
        <Route
          path="/modifier/pancakes/2"
          element={<AddRecipeForm isFormIsEdit />}
        />
        <Route path="/recherche" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/entrees" element={<RecipeType title="Entrées" />} />
        <Route path="/plats" element={<RecipeType title="Plats" />} />
        <Route path="/desserts" element={<RecipeType title="Desserts" />} />
      </Routes>
    </div>
  );
}

export default App;
