import { SVGProps, memo } from 'react'
export const CloseIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'currentColor'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29A1 1 0 0 0 7 18.01a1 1 0 0 0 .71-.3l4.29-4.3 4.29 4.3a1 1 0 1 0 1.42-1.42L13.41 12Z'
      }
      fill={'currentColor'}
    />
  </svg>
))
