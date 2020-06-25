import axios from 'axios';
const axiosWithAuthSpotify = () => {
    return axios.create({
        headers: {
            "authorization": "Bearer BQAgwLHT-EtaSMoTm2QrqVUscChwuWclE51U33oJx3uBJwpLMtRfPxy3mnRB18z89Va_LpHD3rPbgszhzD6HS9rrELOmArvzVGopvY8jsSF6uu1Kr2pYA4ysYMCGPOv8YLkaSAYEGf-xeq3bqbVYCVdl8pDwdjn3OXVzzka87VCSCs25f7xe6Zr1cC9ES9GgZNd7pG83iFSyC6TvFbDn9ffA844SYWTc7EAJrfOt7n2If3kS_1H8BtbPOkvJ98qX9UsqS9iXytWe5sbxM5rSLt6f4ANf3kEX",
            "www-authenticate": "Bearer BQAgwLHT-EtaSMoTm2QrqVUscChwuWclE51U33oJx3uBJwpLMtRfPxy3mnRB18z89Va_LpHD3rPbgszhzD6HS9rrELOmArvzVGopvY8jsSF6uu1Kr2pYA4ysYMCGPOv8YLkaSAYEGf-xeq3bqbVYCVdl8pDwdjn3OXVzzka87VCSCs25f7xe6Zr1cC9ES9GgZNd7pG83iFSyC6TvFbDn9ffA844SYWTc7EAJrfOt7n2If3kS_1H8BtbPOkvJ98qX9UsqS9iXytWe5sbxM5rSLt6f4ANf3kEX",
            "Content-Type": "application/json",
        },
        // baseURL: 'https://api.spotify.com/v1/'
    })
}
export default axiosWithAuthSpotify;