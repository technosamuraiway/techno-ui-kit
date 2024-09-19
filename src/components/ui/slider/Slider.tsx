import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components'
import * as S from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderProps = {} & ComponentPropsWithoutRef<typeof S.Root>

export const Slider = ({
  defaultValue,
  max,
  min,
  minStepsBetweenThumbs,
  onValueChange,
  value,
  ...rest
}: SliderProps) => {
  return (
    <div className={s.sliderWrapper}>
      <Typography className={s.sliderText} variant={'bold-text-14'}>
        {value?.[0]}
      </Typography>
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

        <S.Thumb className={s.sliderThumb} />
        <S.Thumb className={s.sliderThumb} />
      </S.Root>
      <Typography className={s.sliderText} variant={'bold-text-14'}>
        {value?.[1]}
      </Typography>
    </div>
  )
}
