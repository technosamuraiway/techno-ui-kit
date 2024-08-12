import { SVGProps, memo } from 'react'
export const CheckboxIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'currentColor'} height={18} width={18} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M16 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7 14 2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9Z'
      }
      fill={'currentColor'}
    />
  </svg>
))
