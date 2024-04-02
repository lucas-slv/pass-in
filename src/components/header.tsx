import Logo from "../assets/Frame 7108.svg";

export function Header() {
  return (
    <header className='flex items-center gap-5 py-2'>
      <img src={Logo} alt='logo' />
      <nav className='flex gap-5'>
        <a href='' className='font-medium text-sm text-zinc-300'>
          Eventos
        </a>
        <a href='' className='font-medium text-sm'>
          Participantes
        </a>
      </nav>
    </header>
  );
}
