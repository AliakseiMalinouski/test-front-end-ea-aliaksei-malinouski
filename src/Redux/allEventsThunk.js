import { setAllEvents } from "./allEventsSlice";

export const allEventsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/88f16e2fd7dc384c482696a16414147e/raw/aee67080a775c7aefec7aee8b4ecfd63a507aacc/testEA")
    .then(r => r.ok ? r.json() : alert('Error download data'))
    .then(d => dispatch(setAllEvents(d)))
    .catch(e => alert(`${e}`))
}