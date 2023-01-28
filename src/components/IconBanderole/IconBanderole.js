import "./iconBanderole.css"

function IconBanderole({ items }) {
    return (
        <div className="icon-banderole">
            <div className="container grid-expanded">
                {items.map((item) => (<div className="item">
                    <div className="icon">
                        <img src={item.icon} alt="Icon"/>
                    </div>
                    <div className="text" dangerouslySetInnerHTML={{__html: item.text}}></div>
                </div>))}
            </div>
        </div>
    )
}

export default IconBanderole;