import { ComponentPropsWithoutRef } from 'react'

import * as S from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './Slider.module.scss'

type SliderProps = {
  isSingle?: boolean
  rangeCN?: string
  thumbCN?: string
  trackCN?: string
  wrapperCN?: string
} & ComponentPropsWithoutRef<typeof S.Root>

export const Slider = ({
  className,
  defaultValue,
  isSingle = true,
  max,
  min,
  minStepsBetweenThumbs,
  onValueChange,
  rangeCN,
  thumbCN,
  trackCN,
  value,
  wrapperCN,
  ...rest
}: SliderProps) => {
  return (
    <div className={clsx(s.sliderWrapper, wrapperCN)}>
      <S.Root
        className={clsx(s.sliderRoot, className)}
        defaultValue={defaultValue}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        <S.Track className={clsx(s.sliderTrack, trackCN)}>
          <S.Range className={clsx(s.sliderRange, rangeCN)} />
        </S.Track>

        {!isSingle && <S.Thumb className={clsx(s.sliderThumb, thumbCN)} />}
        <S.Thumb className={clsx(s.sliderThumb, thumbCN)} />
      </S.Root>
    </div>
  )
}
