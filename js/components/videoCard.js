

export function Card(dataVideo) {
    const imgUrl = dataVideo.snippet.thumbnails.high.url;
    const videoId = typeof dataVideo.id === 'string' ? dataVideo.id : dataVideo.id.videoId;
    const titleVideo = dataVideo.snippet.title;

    const viewCount = dataVideo.statistics?.viewCount;

    const dateVideo = dataVideo.snippet.publishedAt;
    const channelTitle = dataVideo.snippet.channelTitle;

    const card = document.createElement("div");
    card.classList.add('video-card');

    card.innerHTML = `
            <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
              </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter">
              ${
                viewCount ? `<span class="video-views">${viewCount} views</span>` : ''
              }
                <span class="video-date">${dateVideo} days ago</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>
    `;

    return card;
}

