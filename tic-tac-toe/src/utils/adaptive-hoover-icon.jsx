import { useEffect, useState } from "react";

export default function AdaptiveHooverIcon({ icon: Icon, maxSize, minSize }) {
    const [size, setSize] = useState(
        typeof window !== "undefined" && window.innerWidth > 600 ? maxSize : minSize
    );

    useEffect(() => {
        function handleResize() {
            const newSize = window.innerWidth > 600 ? maxSize : minSize;
            setSize(newSize);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [maxSize, minSize]);

    return <Icon size={size} />;
}
