import axios from "axios";

const URL='https://api.instantwebtools.net/v1/airlines';
class AirlineService
{
    getAllAirlines()
    {
        return axios.get(URL);
    }

    findAirlineById(id)
    {
        return axios.get(URL+"/"+id);
    }

    addAirline(airline)
    {
        return axios.post(URL,airline);
    }
}
export default new AirlineService();