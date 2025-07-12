import axios from "axios";

const api = axios.create({
    baseURL: "https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'f24bb39331msh352560683a055cep11bda5jsna534be2e8a78',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      },
});

export default api;