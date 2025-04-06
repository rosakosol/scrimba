import reactLogo from '../assets/react.svg'

export default function Header() {
    return (
      <header className="header">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <nav>
            <h2>ReactFacts</h2>
          </nav>
      </header>
    )
}