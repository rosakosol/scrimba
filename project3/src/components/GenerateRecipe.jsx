export default function GenerateRecipe() {
    function handleClick() {
        console.log("Clicked")
      }

    return (
        
        <div className="generate-recipe">
            <div>
                <h4>Ready for a recipe?</h4>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={handleClick}>Get a recipe</button>
        </div>
    )
}