export const Navbar = () => {
  return (
    <nav className="bg-primary text-primary py-4 w-full mb-4">
      <div className="container mx-auto flex justify-between items-center w-full">
        <a href="/" className="font-semibold font-heading text-xl">
          Lumis
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
