export default function HooverCross({size}) {
    return (
        <span>
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="24" y1="24" x2="75" y2="75" stroke="#1b92ed" stroke-width="12.2" stroke-linecap="round"/>
                <line x1="75" y1="24" x2="24" y2="75" stroke="#1b92ed" stroke-width="12.2" stroke-linecap="round"/>

                <line x1="24" y1="24" x2="75" y2="75" stroke="#19152c" stroke-width="8" stroke-linecap="round"/>
                <line x1="75" y1="24" x2="24" y2="75" stroke="#19152c" stroke-width="8" stroke-linecap="round"/>
            </svg>
        </span>
    )
}

