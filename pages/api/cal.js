import {getUnixTime, format, formatRFC3339 } from 'date-fns'
import 'node-fetch'

export default async (req, res) => {
    // get events from public google calendar
    // const timeMin = formatRFC3339(new Date())
    const timeMin = '2021-06-10T18:20:00-04:00'
    const API_KEY = process.env.API_KEY
    const calendarId = "frc1991dragons@gmail.com"
    const reqUrl = encodeURI(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${API_KEY}&timeMin=${timeMin}`)
    const responseJSON = await fetch(reqUrl).then(response => response.json())
    const events = responseJSON.items
    // var eventString = '';
    // events.forEach( (event) => {
    //     const startDateString = getUnixTime(new Date(event.start.dateTime))
    //     const endDateString = getUnixTime(new Date(event.end.dateTime))
    //     eventString += `Title: ${event.summary}\nStart Time: ${startDateString} \nEnd Time: ${endDateString}\n\n\n`
    // })
    const eventArray = []
    events.forEach( (event) => {
      const startDate = new Date(event.start.dateTime)
      const endDate = new Date(event.end.dateTime)
      const body = `Calendar event named ${event.summary} starting at ${format(startDate, 'p \'on\' PPP')} and ending at ${format(endDate, 'p \'on\' PPP')}`
      const description = 'Google Calendar Event'
      const author = 'Google Calendar'

      eventArray.push( {
        content: body,
        data: {
          title: event.summary,
          date: getUnixTime(startDate),
          description: description,
          author: author
        }
      }
      )
    })
    res.status(200).send(eventArray)
  }
  