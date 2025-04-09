import React from "react"

export default function State() {
    const [myFavouriteThings, setMyFavouriteThings] = React.useState([])

    const allFavouriteThings = ["Egg", "Fat"]

    const thingsElements = myFavouriteThings.map(thing => <p key={thing}>{thing}</p>)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("thing")
    }


    return (
        <main>
            <button onSubmit={handleSubmit}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}