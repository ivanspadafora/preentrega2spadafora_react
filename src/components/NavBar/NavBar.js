import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navBar">
            <h3>PRIGS</h3>
            <div className="productos">
               <a>Mouse</a>
               <a>Teclados</a> 
               <a>Auriculares</a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;