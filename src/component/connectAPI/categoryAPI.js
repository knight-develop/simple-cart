import axiosClient from "./axiosClient";

const categoryAPI = {
    getAll: (params) => {
        const url = '/Categories';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/Categories/${id}`;
        return axiosClient.get(url);
    },

}
export default categoryAPI;