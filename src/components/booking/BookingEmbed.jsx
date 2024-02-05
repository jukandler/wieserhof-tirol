import { useEffect, useRef } from "react";

function BookingEmbed() {

    const bookingEmbedRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://badge.hotelstatic.com/embed.js";
        script.async = true;
        script.setAttribute("data-url", "https://www.booking.com/hotel/at/wieserhof-tirol.html")
        script.setAttribute("data-size", "80")
        script.setAttribute("data-position", "inline")
        script.setAttribute("data-clickable", "true")

        bookingEmbedRef.current.appendChild(script);

        return () => {
            if (bookingEmbedRef.current) {
                bookingEmbedRef.current.removeChild(script);
            }
        }

    }, []);

    return <div ref={bookingEmbedRef}></div>
}

export default BookingEmbed;