
import { Card } from './videoCard.js';

function TrendsList(wrapper, listVideo) {
    wrapper.textContent = '';
    listVideo.forEach(item => wrapper.append(Card(item)));
}

export { TrendsList };