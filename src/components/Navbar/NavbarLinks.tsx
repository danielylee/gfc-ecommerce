function NavbarLinks({ direction = "inline" }) {
  return (
    <ul
      className={`flex ${direction === "stacked" && "flex-col"} gap-4 px-12 py-4 text-sm text-black sm:text-base md:text-lg`}
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
