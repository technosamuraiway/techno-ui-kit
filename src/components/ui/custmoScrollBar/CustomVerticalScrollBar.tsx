import { ReactNode } from 'react'

import * as S from '@radix-ui/react-scroll-area'

import s from './CustomVerticalScrollBar.module.scss'

interface iProps {
  children: ReactNode
  isHide?: boolean
}

export const CustomVerticalScrollBar = ({ children, isHide }: iProps) => {
  return (
    <S.Root className={s.root} type={isHide ? 'hover' : 'always'}>
      <S.Viewport className={s.viewport}>{children}</S.Viewport>
      <S.Scrollbar className={s.scrollbar} orientation={'vertical'}>
        <S.Thumb className={s.thumb} />
      </S.Scrollbar>
    </S.Root>
  )
}
