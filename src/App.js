import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import { useState } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const handleSearch = async(query) =>{

    const id = "c3cd5924";
    const api_key = "70bca185ffcea74233e0b20c3bf2c884";

    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${api_key}
`)
      console.log('response', response)
      setRecipes(response.data.hits)
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <div className="App">
        <SearchForm onSearch={handleSearch}/>
        <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
