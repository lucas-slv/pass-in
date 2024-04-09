import Logo from "../assets/Frame 7108.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className='flex items-center gap-5 py-2'>
      <img src={Logo} alt='logo' />
      <nav className='flex gap-5'>
        <NavLink href='/eventos'>Eventos</NavLink>
        <NavLink href='/participantes'>Participantes</NavLink>
      </nav>
    </header>
  );
}
