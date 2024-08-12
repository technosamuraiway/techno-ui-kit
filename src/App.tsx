import { SelectBox } from './components/ui/selectbox'
// Adjust the path as needed

import { FlagRussiaIcon } from './assets/icons/flagRussia'
// Import flag icons
import { FlagUnitedIcon } from './assets/icons/flagUnited'
export function App() {
  return (
    <div>
      <h1>SelectBox Examples</h1>

      {/* Default SelectBox */}
      <h2>Default SelectBox</h2>
      <SelectBox
        disabled={false}
        options={[
          { name: 'Option 1' },
          { name: 'Option 2' },
          { name: 'Option 3' },
          { name: 'Option 4' },
        ]}
      />

      {/* Disabled SelectBox */}
      <h2>Disabled SelectBox</h2>
      <SelectBox
        disabled
        options={[
          { name: 'Option 1' },
          { name: 'Option 2' },
          { name: 'Option 3' },
          { name: 'Option 4' },
        ]}
      />

      {/* SelectBox with Flag Icons */}
      <h2>SelectBox with Flag Icons</h2>
      <SelectBox
        disabled={false}
        options={[
          { IconComponent: FlagUnitedIcon, name: 'English' },
          { IconComponent: FlagRussiaIcon, name: 'Russian' },
        ]}
      />
    </div>
  )
}
