const input = Number('asdf') //'1451001600000'
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}
const date = new Date(input).toUTCString()
const result = {
  unix: input,
  utc: date
}
if (date === 'Invalid Date') console.log(date)
else console.log(result)