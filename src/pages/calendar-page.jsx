import { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Header } from '../cmps/Header'
import { tokens } from '../theme'

export const CalendarPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currEvents, setCurrEvents] = useState([])

  const handleDateClicked = (selected) => {
    const title = prompt('Please enter title for event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClicked = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete this event ${selected.event.title}?`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full calendar interactive" />

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">All Events</Typography>
          <List>
            {currEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenC[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClicked}
            eventClick={handleEventClicked}
            eventsSet={(events) => setCurrEvents(events)}
            initialEvents={[
              {
                id: '1001',
                title: 'Somthing special',
                date: '2022-10-30',
              },
              { id: '1002', title: 'All day event', date: '2022-10-29' },
              { id: '1003', title: 'More time event', date: '2022-11-05' },
              { id: '1004', title: 'Another time event', date: '2022-11-27' },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}
