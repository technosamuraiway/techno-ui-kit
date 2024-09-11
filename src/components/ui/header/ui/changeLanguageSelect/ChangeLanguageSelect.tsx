import { useState } from 'react'

import { languageLocalStorage } from '@/components/ui/header/ui/changeLanguageSelect/languageLocalStorage'
import { languageSelectOptions } from '@/components/ui/header/ui/changeLanguageSelect/languageSelectOptions'
import { Select } from '@/components/ui/select/Select'

interface iProps {
  changeLangHandler: (langValue: string) => void
}

export const ChangeLanguageSelect = ({ changeLangHandler }: iProps) => {
  /* Если у пользователя нет установленного языка в localStorage => будем использовать первый элемент
     из options + засетат его в localStorage  */

  const [currentValue, setCurrentValue] = useState(
    languageLocalStorage.getInitialValue(languageSelectOptions[0].value)
  )

  function changeLanguageSelectHandler(value: string) {
    setCurrentValue(value)
    changeLangHandler(value)
    languageLocalStorage.set(value)
  }

  return (
    <Select
      currentValue={currentValue}
      onValueChange={changeLanguageSelectHandler}
      options={languageSelectOptions}
      selectWidth={'160px'}
    />
  )
}
