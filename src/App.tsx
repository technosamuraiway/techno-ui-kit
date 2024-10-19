import { useState } from 'react'

import { Button, TextArea } from '@/components'

import s from './styles/Home.module.scss'

import { Select, SelectBox, TextField } from './components'
export default function App() {
  const allCities = [
    { name: 'New York' },
    { name: 'Los Angeles' },
    { name: 'Toronto' },
    { name: 'London' },
    { name: 'Sydney' },
  ]

  const formattedCityOptions = allCities.map(city => ({
    label: city.name,
    value: city.name.toLowerCase().replace(/\s+/g, '-'), // Преобразуем в формат, подходящий для value
  }))

  const [currentValue, setCurrentValue] = useState(formattedCityOptions[0].value)

  // const checkAge = (birthDate: Date) => {
  //   const today = new Date()
  //   const age = today.getFullYear() - birthDate.getFullYear()
  //   const monthDiff = today.getMonth() - birthDate.getMonth()
  //
  //   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  //     return age - 1
  //   }
  //
  //   return age
  // }
  // const [errorMessage, setErrorMessage] = useState('')
  // const handleDateChange = ({ start }: { start?: Date | null }) => {
  //   if (!start) {
  //     return // Если start не указан, выходим из функции
  //   }
  //
  //   // Проверка возраста
  //   if (checkAge(start) < 13) {
  //     setErrorMessage('A user under 13 cannot create a profile. Privacy Policy')
  //   } else {
  //     setErrorMessage('') // Сбрасываем сообщение об ошибке
  //     // Установка значения даты в форму
  //   }
  // }

  // const languageSelectOptions = [
  //   { icon: { png: EnFlagPng, webp: EnFlagWebp }, label: 'English', value: 'en' },
  //   { icon: { png: RuFlagPng, webp: RuFlagWebp }, label: 'Русский', value: 'ru' },
  // ]

  // const [changeLanguageCurrentValue, setChangeLanguageCurrentValue] = useState(
  //   languageSelectOptions[0].value
  // )

  return (
    <>
      {/* <Header
        // changeLanguageBtn={setChangeLanguageCurrentValue}
        // changeLanguageBtnCurrentValue={changeLanguageCurrentValue}
        // changeLanguageBtnOptions={languageSelectOptions}
        withAuthButtons
        withNotifications
      /> */}
      <div className={s.body}>
        <div className={s.container}>
          <TextField className={s.input} />
          <Button variant={'primary'}>Click me</Button>
          <SelectBox className={s.select} options={[{ name: 'option1' }, { name: 'option2' }]} />
          <div className={s.area}>
            <TextArea />
          </div>
          {/*<Calendar locale={'en'} />*/}
          {/*<Calendar*/}
          {/*  errorMessage={errorMessage}*/}
          {/*  locale={'en'}*/}
          {/*  mode={'single'}*/}
          {/*  onDateChange={handleDateChange}*/}
          {/*/>*/}
          {/*{errorMessage && (*/}
          {/*  <Typography*/}
          {/*    className={s.errorMessage}*/}
          {/*    style={{ color: 'var(--Danger-500)', transition: 'none' }}*/}
          {/*    variant={'small-text'}*/}
          {/*  >*/}
          {/*    {errorMessage}*/}
          {/*  </Typography>*/}
          {/*)}*/}

          <div className={s.select}>
            <Select
              currentValue={currentValue}
              label={'Choose a city'}
              onValueChange={setCurrentValue}
              options={formattedCityOptions}
            />
          </div>
        </div>
      </div>
    </>
  )
}
