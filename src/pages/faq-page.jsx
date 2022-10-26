import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Header } from '../cmps/Header'
import { tokens } from '../theme'

export const FaqPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="frequently asked questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenC[500]} variant="h5">
            Important Question #1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dignissimos dicta nam, optio consectetur odio debitis illo? Minus,
            laborum eveniet deserunt libero veritatis harum. Tenetur sint unde
            inventore voluptas nam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenC[500]} variant="h5">
            Important Question #2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dignissimos dicta nam, optio consectetur odio debitis illo? Minus,
            laborum eveniet deserunt libero veritatis harum. Tenetur sint unde
            inventore voluptas nam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenC[500]} variant="h5">
            Important Question #3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dignissimos dicta nam, optio consectetur odio debitis illo? Minus,
            laborum eveniet deserunt libero veritatis harum. Tenetur sint unde
            inventore voluptas nam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenC[500]} variant="h5">
            Important Question #4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dignissimos dicta nam, optio consectetur odio debitis illo? Minus,
            laborum eveniet deserunt libero veritatis harum. Tenetur sint unde
            inventore voluptas nam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenC[500]} variant="h5">
            Important Question #6
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dignissimos dicta nam, optio consectetur odio debitis illo? Minus,
            laborum eveniet deserunt libero veritatis harum. Tenetur sint unde
            inventore voluptas nam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
