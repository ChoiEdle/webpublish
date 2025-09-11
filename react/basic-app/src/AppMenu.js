import "./css/Menu.css";
import { Menu } from "./components/commons/Menu.jsx";
import { HeaderLeft } from "./components/menus/HeaderLeft.jsx";

export default function App() {
    return (
        <>
            <HeaderLeft />
            <div style={{display:"flex"}}>
                <Menu href="#" name="Menu1" isIcon="true" icon="🚨" style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}} />
                <Menu href="#" name="Menu2" style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}} />
                <Menu href="#" name="Menu3" style={{"w":"100px", "h":"50px", "bg":"#777", "color":"#fff"}} />
            </div>
        </>
    );
}