import "./menu.css";

function MenuToCloseIcon({ color = "#6A5744", isOpen}) {
    return (
        <div className="menu-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>menu to close</title>
                <g strokeMiterlimit="10" fill="none" stroke={color} className="nc-icon-wrapper">
                    <g className={`js-nc-int-icon nc-int-menu-to-close ${isOpen ? "nc-int-icon-state-b" : ""}`}>
                <line strokeLinecap="square" strokeWidth="2" x1="2" x2="30" y1="9" y2="9" strokeLinejoin="miter"></line>
                <line stroke={color} strokeLinecap="square" strokeWidth="2" x1="30" x2="2" y1="23" y2="23" strokeLinejoin="miter"></line>
                <line strokeLinecap="square" strokeWidth="2" x1="30" x2="2" y1="16" y2="16" strokeLinejoin="miter"></line>
                <line stroke={color} strokeLinecap="square" strokeWidth="2" x1="30" x2="2" y1="16" y2="16" strokeLinejoin="miter"></line></g>
                </g>
            </svg>
        </div>
    )
}

export default MenuToCloseIcon;