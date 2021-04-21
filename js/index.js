//import { API_KEY, CLIENT_ID } from'./API';
import { gloAcademy } from './temp_obj.js';
import { VideoList } from './components/videoList.js';


const gloAcademyList = document.querySelector('.glo-academy-list');

VideoList(gloAcademyList, gloAcademy);