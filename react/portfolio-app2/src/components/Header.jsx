import { Logo } from "./header/Logo.jsx";
import { MenuList } from "./header/Menu.jsx";
import { Toggle } from "./header/Toggle.jsx";

export function Header() {
    return (
    <header className="header">
        <Logo img="/images/favicon.ico" msg="header logo" name="Judy"/>
        <MenuList />
        <Toggle />
    </header>
    );
}