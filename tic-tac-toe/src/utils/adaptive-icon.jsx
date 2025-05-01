import { useEffect, useState } from "react";

export default function AdaptiveIcon({ icon: Icon, strokeWidth, maxSize, minSize }) {
    const [size, setSize] = useState(
        window.innerWidth > 600 ? maxSize : minSize
    );

    useEffect(() => {
        function handleResize() {
            const newSize = window.innerWidth > 600 ? maxSize : minSize;
            setSize(newSize);
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [maxSize, minSize]);

    return <Icon size={size} strokeWidth={strokeWidth} />;
}