import { formatRFC3339 } from 'date-fns'
import 'node-fetch'

export default async (req, res) => {
    // get events from public google calendar
    const timeMin = formatRFC3339(new Date())
    const API_KEY = process.env.API_KEY
    const calendarId = "frc1991dragons@gmail.com"
    const reqUrl = encodeURI(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${API_KEY}&timeMin=${timeMin}`)
    const responseJSON = await fetch(reqUrl).then(response => response.json())
    res.status(200).send(responseJSON)
  }
  