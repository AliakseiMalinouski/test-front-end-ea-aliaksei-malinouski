import { setAllEvents } from "./allEventsSlice";

export const allEventsThunk = (dispatch) => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/88f16e2fd7dc384c482696a16414147e/raw/0147360bf95aad0c4749cd045d39f4d51dedcc26/testEA")
    .then(r => r.ok ? r.json() : alert('Error download data'))
    .then(d => dispatch(setAllEvents(d)))
    .catch(e => alert(`${e}`))
}