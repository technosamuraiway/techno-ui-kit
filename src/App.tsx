import s from './styles/Home.module.scss'

import { SelectBox, TextField } from './components'
import { Button } from './components/ui/button'
import { MyDatePicker } from './components/ui/calendar'
import { Header } from './components/ui/header'
import { TextArea } from './components/ui/textArea'
export default function App() {
  return (
    <>
      <Header withAuthButtons withNotifications />
      <div className={s.body}>
        <TextField className={s.input} />
        <Button variant={'primary'}>Click me</Button>
        <SelectBox className={s.select} options={[{ name: 'option1' }, { name: 'option2' }]} />
        <div className={s.area}>
          <TextArea />
        </div>
        <MyDatePicker />
        <MyDatePicker mode={'single'} />
      </div>
    </>
  )
}
