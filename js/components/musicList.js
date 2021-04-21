
import { Card } from './videoCard.js';

function MusicList(wrapper, listVideo) {
    wrapper.textContent = '';
    listVideo.forEach(item => wrapper.append(Card(item)));
}

export { MusicList };