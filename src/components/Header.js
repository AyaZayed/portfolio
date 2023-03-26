import React from 'react'

export default function Header({ text }) {
    return (
        <svg className='header' viewBox="0 0 1360 250">
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="80%">{text}</text>
                {/* <text text-anchor="middle" x="51%" y="80%">{text}</text> */}

            </symbol>

            <g class="g-ants">
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy" ></use >
            </g >
        </svg >
    )
}
