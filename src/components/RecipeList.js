import React, { useState } from 'react';
import './Style/RecipeList.css';

const RecipeList = ({ recipes }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleShowIngredients = (recipe) => {
        console.log("Selected recipe:", recipe); // Debug: Vérifiez les données reçues
        setSelectedRecipe(recipe);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
    };

    return (
        <>
            <div className='recipe-cards'>
                {recipes.map((r, index) => (
                    <div className="card" key={index} style={{ width: "18rem", margin: "1rem" }}>
                        <img className="card-img-top" src={r.recipe.image} alt={r.recipe.label} />
                        <div className="card-body">
                            <h5 className='card-title'>{r.recipe.label}</h5>
                            <p className="card-text">
                                <strong>Calories:</strong> {Math.round(r.recipe.calories)} kcal <br />
                                <strong>Cuisine:</strong> {r.recipe.cuisineType?.join(", ")} <br />
                                <strong>Diet Labels:</strong> {r.recipe.dietLabels?.join(", ")}
                            </p>
                            <button
                                className='commonButton'
                                onClick={() => handleShowIngredients(r.recipe)}
                            >
                                Show Ingredients
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal pour afficher les ingrédients */}
            {selectedRecipe && (
                <div className='modal-content'>
                    <span className='close-button' onClick={closeModal}>
                        &times;
                    </span>
                    <h2>{selectedRecipe.label}</h2>
                    <ul>
                        {selectedRecipe.ingredientLines?.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default RecipeList;
