import { Button, Header, MyDatePicker, TextArea } from '@/components'

import s from './styles/Home.module.scss'

import { SelectBox, TextField } from './components'
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
        <MyDatePicker locale={'en'} />
      </div>
    </>
  )
}
