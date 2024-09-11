import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import * as S from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './Scrallbar.module.scss'

interface iProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  className?: string
  /** maxHeight viewport in pixels */
  maxHeight?: number | string
  /** maxWidth viewport in pixels */
  maxWidth?: number | string
  type?: S.ScrollAreaProps['type']
}

export const Scrollbar = forwardRef<HTMLDivElement, iProps>(
  ({ children, className, maxHeight = '100%', maxWidth = '100%', type = 'auto', ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
      scrollbar: s.scrollbar,
      thumb: s.thumb,
      viewport: s.viewport,
    }

    const maxHeightConverted = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
    const maxWidthConverted = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth

    const viewportStyles = { maxHeight: maxHeightConverted, maxWidth: maxWidthConverted }

    return (
      <S.Root asChild ref={ref} type={type}>
        <div className={classNames.root} {...rest}>
          <S.Viewport className={classNames.viewport} style={viewportStyles}>
            {children}
          </S.Viewport>
          <S.Scrollbar className={classNames.scrollbar} orientation={'vertical'}>
            <S.Thumb className={classNames.thumb} />
          </S.Scrollbar>
          <S.Scrollbar className={classNames.scrollbar} orientation={'horizontal'}>
            <S.Thumb className={classNames.thumb} />
          </S.Scrollbar>
        </div>
      </S.Root>
    )
  }
)

/* displayName для более понятной отладки в React DevTools */
Scrollbar.displayName = 'CustomVerticalScrollBar'
