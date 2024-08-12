import { SVGProps, memo } from 'react'
export const SearchIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'currentColor'} height={18} width={18} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm17.71 16.29-3.4-3.39a7.92 7.92 0 0 0 .34-9.34A8 8 0 1 0 12.9 14.3l3.39 3.4a1 1 0 1 0 1.42-1.42ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z'
      }
      fill={'currentColor'}
    />
  </svg>
))
