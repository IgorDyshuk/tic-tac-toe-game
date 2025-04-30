import {useEffect, useState} from "react";

export default function AdaptiveIcon({icon:Icon, strokeWidth, maxSize, minSize}) {
    const [size, setSize] = useState(
        window.innerWidth > 600 ? maxSize : minSize
    )

    useEffect(() => {
        function handleResize() {
            setSize(window.innerWidth > 600 ? maxSize : minSize)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [maxSize, minSize])

    return <Icon size={size} strokeWidth={strokeWidth}></Icon>
}