import axios from 'axios'
import RNEventSource from 'react-native-event-source'

axios.defaults.baseURL = 'https://oneboard.iscottrichardson.com/api'

export const getRandomDisplayname = async () => {
    return await axios.get('/displayname/');
}

export const createNewPost = async (post) => {
    return await axios.post('/post/', post)
}

export const getAllPosts = async () => {
    return await axios.get('/post/')
}

export const setupPostListener = (displayname, listenerCallback) => {
    let listener = new EventSource(`/api/stream?displayname=${displayname}`)
    listener.addEventListener('message', listenerCallback)
    return listener
}

export const getInfoFromLatLong = async (lat, long) => {
    return await axios.get(`/displayname/resolve?lat=${lat}&long=${long}`)
}

export const newEventSource = (displayname) => {
    let listener = new RNEventSource(`https://oneboard.iscottrichardson.com/api/stream?displayname=${displayname}`)
    return listener
}
