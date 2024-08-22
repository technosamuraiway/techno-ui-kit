import s from './styles/Home.module.scss'

import { SelectBox, TextField } from './components'
import { Button } from './components/ui/button'
import { Header } from './components/ui/header'
export default function App() {
  return (
    <>
      <Header
        changeLangHandler={function (): void {
          throw new Error('Function not implemented.')
        }}
        withAuthButtons
        withNotifications
      />
      <div className={s.body}>
        <TextField />
        <Button variant={'primary'}>Click me</Button>
        <SelectBox className={s.select} options={[{ name: 'option1' }, { name: 'option2' }]} />
      </div>
    </>
  )
}
