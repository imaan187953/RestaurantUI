import MapCard from "./MapCard";

function MapView() {
  return (
    <div className="w-[30%] h-full relative">
      {/* Map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.123456789!2d24.935!3d60.169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789!2sSultan%27s%20Feast!5e0!3m2!1sen!2sfi!4v1680000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Floating Map Card at Top Left */}
      <MapCard />
    </div>
  );
}

export default MapView;