import { useState } from 'react'

import { Header } from '@/components'

import EnFlagPng from './assets/icons/flags/enFlag.png'
import EnFlagWebp from './assets/icons/flags/enFlag.webp'
import RuFlagPng from './assets/icons/flags/ruFlag.png'
import RuFlagWebp from './assets/icons/flags/ruFlag.webp'
// import { Select, SelectBox, TextField } from './components'
export default function App() {
  // const formattedCityOptions = allCities.map(city => ({
  //   label: city.name,
  //   value: city.name.toLowerCase().replace(/\s+/g, '-'), // Преобразуем в формат, подходящий для value
  // }))

  // const [currentValue, setCurrentValue] = useState(formattedCityOptions[0].value)

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

  const languageSelectOptions = [
    { icon: { png: EnFlagPng, webp: EnFlagWebp }, label: 'English', value: 'en' },
    { icon: { png: RuFlagPng, webp: RuFlagWebp }, label: 'Русский', value: 'ru' },
  ]

  const [languageValue, setLanguageValue] = useState(languageSelectOptions[0].value)

  return (
    <>
      <Header
        changeLanguageBtn={setLanguageValue}
        changeLanguageBtnCurrentValue={languageValue}
        changeLanguageBtnOptions={languageSelectOptions}
        withAuthButtons
      />
    </>
  )
}
