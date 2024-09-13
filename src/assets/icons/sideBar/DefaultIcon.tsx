import { SVGProps, memo } from 'react'
export const DefaultIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'currentColor'} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g>
      <path
        d={
          'M12 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.57 7.58 4 12 4C16.42 4 20 7.57 20 12C20 16.42 16.42 20 12 20Z'
        }
      />
    </g>
  </svg>
))
