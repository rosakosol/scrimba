import React from "react"

export default function Input() {
    const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientListItems = ingredients.map((ingredient, index) => (
        <li key={ingredient || index}>{ingredient}</li>  // Use index as a fallback key
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>  
                <input type="text" name="ingredient" placeholder="e.g. oregano" />
                <button type="submit">+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}
