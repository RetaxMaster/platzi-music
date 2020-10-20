import platziMusicService from "./platzi-music";

const trackService = {};

trackService.search = q => {

    trackService.getToken();
    
    const type = "track";

    return platziMusicService.get("v1/search", {
        params: { q, type }
    }).then(res => res.data);

}

export default trackService;