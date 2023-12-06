import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()

    const handleChange = (event) => {
      const selectedMode = event.target.value
      setMode(selectedMode)
    }
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-light-dark-mode">Mode</InputLabel>
        <Select
          labelId="label-select-light-dark-mode"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value='light' ><LightModeIcon/></MenuItem>
          <MenuItem value='dark' ><DarkModeIcon/></MenuItem>
          <MenuItem value='system'><Brightness4OutlinedIcon/></MenuItem>
        </Select>
      </FormControl>
    )
}

export default ModeSelect