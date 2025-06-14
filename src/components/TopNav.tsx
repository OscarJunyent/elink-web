
import { Link, useLocation } from "react-router-dom";

const menu = [
  { to: "/", label: "Inici" },
  { to: "/about", label: "Qui som" },
  { to: "/serveis", label: "Serveis" },
];

const TopNav = () => {
  const location = useLocation();
  return (
    <nav className="w-full flex justify-center items-center py-3 px-4 bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-40">
      <ul className="flex gap-4 md:gap-8">
        {menu.map((item) => {
          const active = location.pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`font-semibold text-base px-3 py-1 rounded-md transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-accent hover:bg-accent/30 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TopNav;
