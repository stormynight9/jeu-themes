'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
const Cloud = (props: React.SVGProps<SVGSVGElement>) => (
    <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 200 200'
        {...props}
        animate={{
            x: [0, 100, 0],
            transition: {
                duration: 20,
                loop: Infinity,
                repeat: 'Infinity',
                ease: 'easeInOut',
            },
        }}
    >
        <path
            d='M259.899 380.6c-13.132 0-24.365 8.754-28.939 21.152-3.284-1.448-6.928-2.223-10.754-2.223-12.897 0-23.63 9.135-25.978 21.246a21.422 21.422 0 0 0-5.168-.618c-11.605 0-21.005 9.255-21.005 20.66 0 11.404 9.4 20.659 21.005 20.659 3.65 0 7.094-.924 10.084-2.533 5.162 5.176 13.55 8.554 23.017 8.554 7.625 0 14.534-2.19 19.637-5.743 4.385 4.595 10.522 7.442 17.319 7.442 8.83 0 16.549-4.819 20.754-12.013 2.895 1.629 6.166 2.563 9.609 2.563 12.035 0 21.788-11.17 21.788-24.951 0-13.272-9.055-24.107-20.475-24.89-1.934-16.53-15.034-29.306-30.894-29.306z'
            style={{
                fill: '#fff',
                fillOpacity: 1,
                stroke: '#00000030',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeOpacity: 1,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
            }}
            transform='translate(-167.055 -379.6)'
        />
    </motion.svg>
)
export default Cloud
