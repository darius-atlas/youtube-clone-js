import { API_KEY, CLIENT_ID } from'./API.js';
import { gloAcademy, trending, music } from './temp_obj.js';
import { VideoList } from './components/videoList.js';
import { TrendsList } from './components/trendsList.js';
import { MusicList } from './components/musicList.js';


const videoList = document.querySelector('.glo-academy-list');
const trendsList = document.querySelector('.trending-list');
const musicList = document.querySelector('.music-list');

VideoList(videoList, gloAcademy);
TrendsList(trendsList, trending);
MusicList(musicList, music);

const authBtn = document.querySelector('.auth-btn');
const userAvatar = document.querySelector('.user-avatar');

const handleSuccess = (data) => {
    console.log(data);
    authBtn.classList.add('hide');
    userAvatar.classList.remove('hide');
    userAvatar.src = data.getImageUrl();
    userAvatar.alt = data.getName();
    getChanel();
};

const handleNoAuth = () => {
    authBtn.classList.remove('hide');
    userAvatar.classList.add('hide');
    userAvatar.src = '';
    userAvatar.alt = '';
};

const handleAuth = () => {
    gapi.auth2.getAuthInstance().signIn();
};

const handleSignout = () => {
    gapi.auth2.getAuthInstance().signOut();
};

const updateStatusAuth = data => {
    data.isSignedIn.listen(() => {
        updateStatusAuth(data);
    });

    if(data.isSignedIn.get()) {
        const userData = data.currentUser.get().getBasicProfile();
        handleSuccess(userData);
    } else {
        handleNoAuth();
    }
}

function initClient() {
    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': 'https://www.googleapis.com/auth/youtube.readonly',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    }).then(() => {
        updateStatusAuth(gapi.auth2.getAuthInstance());
    }).catch(() => {
        authBtn.removeEventListener('click', handleAuth);
        userAvatar.removeEventListener('click', handleSignout);
        alert('Auth Error!');
    })
}

gapi.load('client:auth2', initClient);

authBtn.addEventListener('click', handleAuth);
userAvatar.addEventListener('click', handleSignout);

const getChanel = () => {
    gapi.client.youtube.channels.list({
        part: 'snippet, statistics',
        id: 'NASAtelevision',
    }).execute((response) => {
        console.log(response);
    });
}