//'2015/12/25'
//'1451001600000'

const input = '01 Jan 1970'
// const string = input.includes('-')
// console.log(input.includes('-'))
console.log(Date.parse(input), '<< Date.parse()')
console.log(new Date(input), '<< new Date()')

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