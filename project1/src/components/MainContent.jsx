import reactLogo from '../assets/react.svg'


export default function MainContent() {
  return (
    <div className="content">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={reactLogo} className="background-logo" alt="React logo" />
    </div>
  )
}