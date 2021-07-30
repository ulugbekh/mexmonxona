import "./main.scss"


const SidebarLinks = ({onClick, icon, title, active}) => {
    return ( 
        <div className="sidebar-links">
          <button className={`button-item ${active ? 'active' : ''}`} onClick={onClick}>
                <span className="icon-span">{icon}</span>
                <span className="button-span">{title}</span>
            </button>
        </div>
     );
}
 
export default SidebarLinks;