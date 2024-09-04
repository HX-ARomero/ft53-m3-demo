import useToogle from '../hooks/useToogle';

export default function Navbar() {

  const [isLogged, setIsLogged] = useToogle(false);

  return (
    <div>
      <button onClick={setIsLogged}>{isLogged ? "Logout" : "Login"}</button>
    </div>
  )
}
