import { useState } from 'react'

function App() {
  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email)
    console.log(password)
  }


  return (
    <>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" placeholder="email"/>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" name="password" placeholder="password"/>

      <button>Submit</button>

      </form>
    </>
  )
}

export default App
