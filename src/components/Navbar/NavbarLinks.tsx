function NavbarLinks({ direction = "row" }) {
  return (
    <ul
      className={`flex flex-${direction} gap-4 px-8 py-4 text-sm text-black sm:text-base md:text-lg`}
    >
      <li>
        <a>Shop all</a>
      </li>
      <li>
        <a>Latest arrivals</a>
      </li>
    </ul>
  );
}

export default NavbarLinks;
