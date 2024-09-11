import { useState } from 'react'

import { languageSelectOptions } from '@/components/ui/header/ui/languageSelectOptions'
import { Select } from '@/components/ui/select/Select'

interface iProps {
  changeLangHandler: (locale: string) => void
}

export const ChangeLanguageSelect = ({ changeLangHandler }: iProps) => {
  const [currentValue, setCurrentValue] = useState('en')

  function changeLanguageSelectHandler(value: string) {
    setCurrentValue(value)
    changeLangHandler(currentValue)
  }

  return (
    <Select
      currentValue={currentValue}
      onValueChange={changeLanguageSelectHandler}
      options={languageSelectOptions}
    />
  )
}
