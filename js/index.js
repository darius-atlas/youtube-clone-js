import { gloAcademy, trending, music } from './temp_obj.js';
import { VideoList } from './components/videoList.js';
import { TrendsList } from './components/trendsList.js';
import { MusicList } from './components/musicList.js';
import { initClient } from './gAuth.js';


const videoList = document.querySelector('.glo-academy-list');
const trendsList = document.querySelector('.trending-list');
const musicList = document.querySelector('.music-list');

VideoList(videoList, gloAcademy);
TrendsList(trendsList, trending);
MusicList(musicList, music);

gapi.load('client:auth2', initClient);