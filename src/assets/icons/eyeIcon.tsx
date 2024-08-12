import { SVGProps, memo } from 'react'
export const EyeIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'currentColor'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M21.9 11.5c-.7-1.1-4.2-6.7-10.2-6.5-5.5.1-8.7 5-9.6 6.5a1 1 0 0 0 0 1c.7 1 4 6.5 10 6.5h.2c5.5-.1 8.7-5 9.6-6.5a1 1 0 0 0 0-1ZM12.2 17c-4.3.1-7.1-3.6-8-5 1-1.6 3.6-4.9 7.6-5 4.3-.1 7.1 3.6 8 5-1 1.6-3.6 4.9-7.6 5Z'
      }
      fill={'currentColor'}
    />
    <path
      d={'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'}
      fill={'currentColor'}
    />
  </svg>
))
