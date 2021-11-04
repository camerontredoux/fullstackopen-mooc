import { Input, Typography } from "@mui/material"
import "@fontsource/roboto"

const Form = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <Typography fontFamily="Roboto" variant="body" color="text.primary" align="center">
        {'Filter Countries: '}
      </Typography>
      <Input fontFamily="Roboto" onChange={props.handleFormChange} placeholder="Country Name" />
    </form>
  )
}

export default Form
