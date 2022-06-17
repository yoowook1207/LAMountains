import { NavBarHolder,NavBar,NavUl,NavLi1,NavLi2,NavLink } from "./ClimbNavBarElements";

const ClimbNavBar = ({currentPage, handlePageChange}) => {

    return (
    <NavBarHolder>
        <NavBar>
            <NavUl>
                <NavLi1 className={`${currentPage==='Mountain1' ? 'navActive' : ' '}`}>
                    <NavLink href="#Mountain1" onClick={() => handlePageChange('Mountain1')}>MOUNTAN 1</NavLink>
                </NavLi1>
                <NavLi2 className={`${currentPage==='Mountain2' ? 'navActive' : ' '}`}>
                    <NavLink href="#Mountain2" onClick={() => handlePageChange('Mountain2')}>MOUNTAN 2</NavLink>
                </NavLi2>
            </NavUl>
        
        </NavBar>
    </NavBarHolder>
    );
};

export default ClimbNavBar;