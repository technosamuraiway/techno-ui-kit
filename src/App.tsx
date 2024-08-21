import s from './styles/Home.module.scss'

import { SelectBox } from './components'
import { Button } from './components/ui/button'
import { Header } from './components/ui/header'
export default function App() {
  return (
    <>
      <Header withAuthButtons withNotifications />
      <div className={s.body}>
        <Button variant={'primary'}>Click me</Button>
        <SelectBox className={s.select} options={[{ name: 'option1' }, { name: 'option2' }]} />
      </div>
    </>
  )
}
