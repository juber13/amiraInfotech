const Header = () => {
  return (
    <header className="w-full bg-slate-200 p-3">
      <nav className="flex justify-between">
        <div className="logo">
          <h1 className="text-2xl text-red-500">AI</h1>
        </div>
        <div className="nev-items">
          <ul className="flex gap-4 text-blue-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header