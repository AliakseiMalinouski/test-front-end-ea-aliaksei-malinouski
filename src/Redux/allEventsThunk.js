import { setAllEvents } from "./allEventsSlice";

export const allEventsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/88f16e2fd7dc384c482696a16414147e/raw/1bdb8be56733216fc17f423350a7a8ceb02f97f5/testEA")
    .then(r => r.ok ? r.json() : alert('Error download data'))
    .then(d => dispatch(setAllEvents(d)))
    .catch(e => alert(`${e}`))
}