import { ComponentPropsWithoutRef } from 'react'

import * as S from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderProps = {
  isSingle?: boolean
} & ComponentPropsWithoutRef<typeof S.Root>

export const Slider = ({
  defaultValue,
  isSingle = true,
  max,
  min,
  minStepsBetweenThumbs,
  onValueChange,
  value,
  ...rest
}: SliderProps) => {
  return (
    <div className={s.sliderWrapper}>
      <S.Root
        className={s.sliderRoot}
        defaultValue={defaultValue}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        <S.Track className={s.sliderTrack}>
          <S.Range className={s.sliderRange} />
        </S.Track>

        {!isSingle && <S.Thumb className={s.sliderThumb} />}
        <S.Thumb className={s.sliderThumb} />
      </S.Root>
    </div>
  )
}
