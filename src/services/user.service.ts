import { IUserInfo } from "../types/User";
import api from "./api.service";

async function postInfo(data: IUserInfo): Promise<any> {
    return (await api.post(`/user/info`, data)).data;
}

const user = {postInfo}
export default user;