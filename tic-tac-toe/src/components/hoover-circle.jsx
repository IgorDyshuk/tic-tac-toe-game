export default function HooverCircle({size}) {
    return (
        <span>
            <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none"
                 stroke="#a437ff"
                 stroke-width="2">
                <circle cx="49.5" cy="49.4" r="36.12"/>
                <circle cx="49.5" cy="49.5" r="26.48"/>
            </svg>
        </span>
    )
}

