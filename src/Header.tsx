import logo from './logobowling.png'
function Header(){
    return (
      <header className="row header navbar navbar-dark bg-dark">
        <div className="col-4">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col subtitle"></div>
        <h1 className='text-white'>Welcome to our Bowling Crew!</h1>
      </header>
    );
}

export default Header;