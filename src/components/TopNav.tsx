import { Link, useLocation } from "react-router-dom";
const menu = [{
  to: "/",
  label: "Inici"
}, {
  to: "/about",
  label: "Qui som"
}, {
  to: "/serveis",
  label: "Serveis"
}, {
  to: "/formacio",
  label: "Formació"
}];
const TopNav = () => {
  const location = useLocation();
  return <nav className="w-full flex items-center justify-center py-2 px-3 bg-white/95 backdrop-blur border-b border-gray-200 sticky top-0 z-40 shadow-circular">
      {/* Logo only, no title */}
      <div className="flex items-center flex-shrink-0 mr-4" style={{
      flexBasis: "15%",
      maxWidth: "15%"
    }}>
        <Link to="/" className="flex items-center group w-full">
          <img alt="Elink.cat logo" style={{
          background: "#fff",
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxWidth: "125px",
          // increased by 25%
          minWidth: "40px"
        }} src="https://elink.cat/wp-content/uploads/2024/01/elinkcat-default-light-bg.png" className="w-full max-w-[250px] min-w-[40px] h-auto transition-all" />
        </Link>
      </div>
      {/* Separator for mobile/desktop */}
      <div className="flex-1" />
      {/* Menu */}
      <ul className="flex gap-1 md:gap-3 xl:gap-8 items-center font-sans select-none">
        {menu.map(item => {
        const active = location.pathname === item.to;
        return <li key={item.to}>
              <Link to={item.to} className={`text-base md:text-lg px-3 py-1 rounded-full font-medium transition-all duration-150
                  ${active ? "bg-[#ff881a] text-white shadow" : "text-[#222c38] hover:bg-[#fde5d3] hover:text-[#ff881a]"}`} style={{
            fontFamily: 'Montserrat, Inter, sans-serif'
          }}>
                {item.label}
              </Link>
            </li>;
      })}
      </ul>
    </nav>;
};
export default TopNav;