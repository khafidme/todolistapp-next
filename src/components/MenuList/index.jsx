import Header from "./Header";
import Item from "./Item";

const MenuList = ({ data, headerTitle }) => {
  const menus = data;

  return (
    <div className="py-4">
      {headerTitle ? <Header title={headerTitle}/> : null}
        <ul>
          {menus.map((menu) => (
            <Item key={menu.name} value={menu.name} linkHref={menu.href} icon={menu.icon} important={menu.important} color={menu.color} />
          ))}
        </ul>
    </div>
  );
};

export default MenuList;
