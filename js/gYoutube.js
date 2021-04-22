const getChanel = () => {
    gapi.client.youtube.channels.list({
        part: 'snippet, statistics',
        id: 'NASAtelevision',
    }).execute((response) => {
        console.log(response);
    });
}

export { getChanel };