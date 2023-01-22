function MenuIcon({ color = "#6A5744"}) {
    return (
        <div className="menu-logo">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9V11H48V9H2ZM2 24V26H48V24H2ZM2 39V41H48V39H2Z" fill={color}/>
            </svg>
        </div>
    )
}

export default MenuIcon;