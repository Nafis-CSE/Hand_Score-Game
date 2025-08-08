import { useEffect, useState } from "react";
import "./Custom.css"; // CSS নিচে

const OrientationWarning = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    window.addEventListener("resize", handleOrientationChange);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <>
      {isPortrait && (
        <div className="orientation-overlay">
          <div className="phone-animation">
            <div className="phone-body"></div>
            <div className="rotate-icon">🔄</div>
          </div>
          <h2>Please rotate your phone</h2>
        </div>
      )}
    </>
  );
};

export default OrientationWarning;
