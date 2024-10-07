import NavMenu from "./NavMenu.jsx"
const Header = () => {
    return (
        <Header>
            <div className ="flex py-5 px-3">
                <div className="flex-grow flex items-center z-20"><NavMenu/></div>
                <div className="flex items-center"></div>
                
                     <a href="#">
                         <img 
                             className="block lg:hidden" 
                              src="img\icon-menu.png" 
                              alt="Navigation"
                            />
                         </a>
                       </div>
             </Header>
        );
};