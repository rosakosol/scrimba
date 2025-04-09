import Logo from "../assets/chef.svg"

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Chef Logo" width="80"/>
            <h2 className="text-lg">Chef Claude</h2>
        </header>
    )
}