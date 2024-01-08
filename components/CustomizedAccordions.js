import { useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const CustomizedAccordions = (props) => {
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  console.log('data accor: ', props?.users)

  return (
    <>
      {props?.users?.map((user, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              <Typography>{user.email}</Typography>
              {/* green circle if isAdmin true */}
              {user.isAdmin && (
                <span className="flex-shrink-0 inline-block px-2 py-0.5 ml-2 text-xs font-medium leading-4 text-green-800 bg-green-100 rounded-full">
                  Admin
                </span>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col gap-3">
                <Typography>
                  Last Update: {new Date(user.updatedAt).toLocaleString()}
                </Typography>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                  >
                    Update User
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

export default CustomizedAccordions
