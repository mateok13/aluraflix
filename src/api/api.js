import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
});

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
};

export const agregar = async (videoNuevo) => {
    const respuesta = await api.get('/videos');
    const videos = respuesta.data;
    const nuevoId = videos.length + 1;
    videoNuevo.id = nuevoId+"";
    const respuestaAgregar = await api.post('/videos', videoNuevo);
    return respuestaAgregar.data;
};


export const borrar = async (id) => {
    const respuesta = await api.delete(`videos/${id}`);
    return respuesta.data;
};

export const editar = async (id, videoActualizado) => {
    const respuesta = await api.put(`/videos/${id}`, videoActualizado);
    return respuesta.data;
};