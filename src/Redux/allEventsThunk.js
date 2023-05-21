import { setAllEvents } from "./allEventsSlice";

export const allEventsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/88f16e2fd7dc384c482696a16414147e/raw/952d7a042d41c3645a7ad48e8da4fc5219b4992c/testEA")
    .then(r => r.ok ? r.json() : alert('Error download data'))
    .then(d => dispatch(setAllEvents(d)))
    .catch(e => alert(`${e}`))
}