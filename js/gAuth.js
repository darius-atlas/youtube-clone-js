import { API_KEY, CLIENT_ID } from'./API.js';
import { getChanel } from './gYoutube.js';

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

authBtn.addEventListener('click', handleAuth);
userAvatar.addEventListener('click', handleSignout);

export { initClient };