'use client'

import { SVGProps } from 'react'

const Sun = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' {...props}>
            <path
                fill='#ff9800'
                d='m37 29 5-5-5-5v-8h-8l-5-5-5 5h-8v8l-5 5 5 5v8h8l5 5 5-5h8z'
            />
            <path
                fill='#ffeb3b'
                d='M13 24c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11-11 4.9-11 11'
            />
        </svg>
    )
}
export default Sun
