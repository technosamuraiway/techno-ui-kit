import { SVGProps, memo } from 'react'
export const ChevronRight = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={36} width={36} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <rect fill={'#4C4C4C'} height={36} rx={18} width={36} />
    <mask
      height={20}
      id={'a'}
      maskUnits={'userSpaceOnUse'}
      style={{
        maskType: 'alpha',
      }}
      width={20}
      x={8}
      y={8}
    >
      <path d={'M8 8h20v20H8z'} fill={'#D9D9D9'} />
    </mask>
    <g mask={'url(#a)'}>
      <path d={'m16 23-1.062-1.062L18.875 18l-3.937-3.938L16 13l5 5-5 5Z'} fill={'#fff'} />
    </g>
  </svg>
))
