import axios, {CancelToken} from 'axios'
import {CANCEL} from 'redux-saga'

export default function fetch(url) {
    const source = CancelToken.source();
    const request = axios
        .get(url, {cancelToken: source.token})
        .then(response => ({response}))
        .catch(error => ({error}));

    request[CANCEL] = () => source.cancel();

    return request;
}
