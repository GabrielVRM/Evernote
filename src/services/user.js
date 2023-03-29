import { useParams } from "react-router-dom";
import Api from "./api";

const UserService = {
    register: (params) => Api.post('/users/register', params)
}

export default UserService