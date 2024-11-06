import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import EnFlagPng from '@/assets/icons/flags/enFlag.png'
import EnFlagWebp from '@/assets/icons/flags/enFlag.webp'
import RuFlagPng from '@/assets/icons/flags/ruFlag.png'
import RuFlagWebp from '@/assets/icons/flags/ruFlag.webp'

import { Header, HeaderProps } from './Header'

const meta: Meta<HeaderProps> = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
}

export default meta
type Story = StoryObj<HeaderProps>

/* Чтобы управлять состоянием кнопки для истории => создана компонента-обертка */

const HeaderWrapper = (
  args: Omit<
    HeaderProps,
    'changeLanguageBtn' | 'changeLanguageBtnCurrentValue' | 'changeLanguageBtnOptions'
  >
) => {
  const languageSelectOptions = [
    { icon: { png: EnFlagPng, webp: EnFlagWebp }, label: 'English', value: 'en' },
    { icon: { png: RuFlagPng, webp: RuFlagWebp }, label: 'Русский', value: 'ru' },
  ]

  const [changeLanguageCurrentValue, setChangeLanguageCurrentValue] = useState(
    languageSelectOptions[0].value
  )

  return (
    <Header
      {...args}
      changeLanguageBtn={setChangeLanguageCurrentValue}
      changeLanguageBtnCurrentValue={changeLanguageCurrentValue}
      changeLanguageBtnOptions={languageSelectOptions}
    />
  )
}

export const HeaderWithNotifications: Story = {
  render: () => <HeaderWrapper withNotifications />,
}

export const HeaderWithAuthButtons: Story = {
  render: () => <HeaderWrapper withAuthButtons />,
}

export const HeaderWithAdditionalText: Story = {
  render: () => <HeaderWrapper additionalLogoText={'Super'} additionalLogoTextBold={'Admin'} />,
}
