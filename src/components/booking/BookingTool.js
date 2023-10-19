import "./bookingTool.css"

function BookingTool() {
    return (
        <div className="booking-tool grid-expanded">
            <div data-kbe-searchbar="BOOKINGWIDGET"></div> 
            <div data-kbe-rates="BOOKINGWIDGET"></div>
            <div data-kbe-offers="BOOKINGWIDGET"></div>
        </div>
    )
}

export default BookingTool;