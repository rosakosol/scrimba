import { useState } from 'react'
import Header from "./components/Header.jsx"
import Input from "./components/Input.jsx"
import GenerateRecipe from './components/GenerateRecipe.jsx'



function App() {
  return (
    <>
      <Header />
      <Input />
      <GenerateRecipe/>
    </>
  )
}

export default App
