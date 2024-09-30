import { useState } from 'react'

import EnFlagPng from '@/assets/icons/flags/enFlag.png'
import EnFlagWebp from '@/assets/icons/flags/enFlag.webp'
import RuFlagPng from '@/assets/icons/flags/ruFlag.png'
import RuFlagWebp from '@/assets/icons/flags/ruFlag.webp'
import { Button, Header, MyDatePicker, TextArea } from '@/components'

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
  const checkAge = (birthDate: Date) => {
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1
    }

    return age
  }
  const [errorMessage, setErrorMessage] = useState('')
  const handleDateChange = ({ start }: { start?: Date }) => {
    if (!start) {
      return
    } // Если start не указан, выходим из функции

    // Проверка возраста
    if (checkAge(start) < 13) {
      setErrorMessage('A user under 13 cannot create a profile. Privacy Policy')

      return
    }
    setErrorMessage('') // Сбрасываем сообщение об ошибке
  }

  const languageSelectOptions = [
    { icon: { png: EnFlagPng, webp: EnFlagWebp }, label: 'English', value: 'en' },
    { icon: { png: RuFlagPng, webp: RuFlagWebp }, label: 'Русский', value: 'ru' },
  ]

  const [changeLanguageCurrentValue, setChangeLanguageCurrentValue] = useState(
    languageSelectOptions[0].value
  )

  return (
    <>
      <Header
        changeLanguageBtn={setChangeLanguageCurrentValue}
        changeLanguageBtnCurrentValue={changeLanguageCurrentValue}
        changeLanguageBtnOptions={languageSelectOptions}
        withAuthButtons
        withNotifications
      />
      <div className={s.body}>
        <div className={s.container}>
          <TextField className={s.input} />
          <Button variant={'primary'}>Click me</Button>
          <SelectBox className={s.select} options={[{ name: 'option1' }, { name: 'option2' }]} />
          <div className={s.area}>
            <TextArea />
          </div>
          <MyDatePicker locale={'en'} />
          <MyDatePicker locale={'en'} mode={'single'} onDateChange={handleDateChange} />
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
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
