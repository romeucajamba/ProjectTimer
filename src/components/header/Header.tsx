import {HeaderContainer} from './styles';
import { NavLink } from 'react-router-dom';
import Icon from '../../assets/icon.png';
import Timer from '../../assets/timer.png';
import History from '../../assets/history.png';


export function Header(){
    return(
        <HeaderContainer>
            <img src={Icon} alt="Logo" />
<nav>
    <NavLink to="/" title='Timer'>
        <img src={Timer} alt="Contador/Timer" />
    </NavLink>
    <NavLink to="/history" title='Historico'>
        <img src={History} alt="tarefas/History"/>
    </NavLink>
</nav>
        </HeaderContainer>
    )
}