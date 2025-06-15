
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const menu = [
  { to: "/", label: "Inici" },
  { to: "/serveis", label: "Serveis" },
  { to: "/formacio", label: "Formació" },
  { to: "/about", label: "Qui som" },
  { to: "/contacte", label: "Contacte" },
];
const blogMenu = {
  href: "https://blog.elink.cat",
  label: "Blog",
};

const TopNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Fer focus al menú i tancar-lo després de navegar en mòbil
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="w-full flex items-center justify-between py-2 px-3 bg-white/95 backdrop-blur border-b border-gray-200 sticky top-0 z-40 shadow-circular">
      {/* Logo */}
      <div
        className="flex items-center flex-shrink-0"
        style={{
          flexBasis: "15%",
          maxWidth: "15%",
        }}
      >
        <Link to="/" className="flex items-center group w-full">
          <img
            alt="Elink.cat logo"
            style={{
              background: "#fff",
              objectFit: "contain",
              width: "100%",
              height: "auto",
              maxWidth: "125px",
              minWidth: "40px",
            }}
            src="https://elink.cat/wp-content/uploads/2024/01/elinkcat-default-light-bg.png"
            className="w-full max-w-[250px] min-w-[40px] h-auto transition-all"
          />
        </Link>
      </div>

      {/* Botó menú hamburger (mòbil) */}
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Obrir el menú"
              className="p-2 rounded-md text-[#222c38] hover:bg-[#f7d7db] focus-visible:ring-2 focus-visible:ring-primary transition-all"
              onClick={() => setOpen(true)}
            >
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="pt-8 px-0 w-64">
            <nav>
              <ul className="flex flex-col gap-1 px-4">
                {menu.map((item) => {
                  const active = location.pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={handleLinkClick}
                        className={`block w-full text-lg px-4 py-3 rounded font-medium transition-all duration-150 ${
                          active
                            ? "bg-[#c92637] text-white shadow"
                            : "text-[#222c38] hover:bg-[#f7d7db] hover:text-[#c92637]"
                        }`}
                        style={{
                          fontFamily: "Montserrat, Inter, sans-serif",
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                {/* Blog last item as external link */}
                <li key="blog">
                  <a
                    href={blogMenu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className={`block w-full text-lg px-4 py-3 rounded font-medium transition-all duration-150 text-[#222c38] hover:bg-[#f7d7db] hover:text-[#c92637]`}
                    style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
                  >
                    {blogMenu.label}
                  </a>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Menú principal només visible en md+ */}
      <ul className="hidden md:flex gap-1 md:gap-3 xl:gap-8 items-center font-sans select-none">
        {menu.map((item) => {
          const active = location.pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`text-base md:text-lg px-3 py-1 rounded-full font-medium transition-all duration-150 ${
                  active
                    ? "bg-[#c92637] text-white shadow"
                    : "text-[#222c38] hover:bg-[#f7d7db] hover:text-[#c92637]"
                }`}
                style={{
                  fontFamily: "Montserrat, Inter, sans-serif",
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        {/* Blog last item as external link */}
        <li key="blog">
          <a
            href={blogMenu.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg px-3 py-1 rounded-full font-medium transition-all duration-150 text-[#222c38] hover:bg-[#f7d7db] hover:text-[#c92637]"
            style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
          >
            {blogMenu.label}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;

