import { CloseIcon, MenuIcon, ShoppingBagIcon } from ".";

interface ImageProps {
  name: string;
  size: number;
  fill: string;
  stroke: string;
  color: string;
}

function Icon({
  name,
  size = 24,
  color = "currentColor",
  fill = "none",
  stroke = "none",
}: ImageProps) {
  const iconMap: Record<string, string> = {
    close: CloseIcon,
    menu: MenuIcon,
    shoppingBag: ShoppingBagIcon,
  };
  const iconUrl = iconMap[name] || "";

  return (
    <img
      src={iconUrl}
      alt={name}
      style={{
        width: size,
        height: size,
        fill: fill,
        color: color,
        stroke: stroke,
      }}
    />
  );
}

export default Icon;
