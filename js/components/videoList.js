
import { Card } from './videoCard.js';

function VideoList(wrapper, listVideo) {
    wrapper.textContent = '';
    listVideo.forEach(item => wrapper.append(Card(item)));
}

export { VideoList };