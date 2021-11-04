import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
// import { InboxIcon } from "@mui/icons-material"

const CapitalListItem = (props) => {
  return (
    <ListItem key={props.text} disablePadding>
      <ListItemButton>
        <ListItemText primary={props.text} />
      </ListItemButton>
    </ListItem>
  )
}

const Capitals = (props) => {
  if ("capital" in props.country) {
    const capitals = props.country.capital.map(capital => {
      return (
        <CapitalListItem key={capital} text={capital} />
      )
    })

    return (
      <>
        <Typography fontFamily="Roboto" variant="h6">
          {"Capital(s)"}
        </Typography>
        <List>
          {capitals}
        </List>
      </>
    )
  } else {
    return (
      <>
        <Typography fontFamily="Roboto" variant="h6">
          {"Capital(s)"}
        </Typography>
        <List>
          <CapitalListItem text="No capital city" />
        </List>
      </>
    )
  }
}

export default Capitals
