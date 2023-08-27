import { ITreatment } from "../types/Treatment";
import { IUserInfo } from "../types/User";
import { IMessage } from "../types/IMessage";
import api from "./api.service";

async function postInfo(data: IUserInfo): Promise<any> {
    return (await api.post(`/user/info`, data)).data;
}

async function getTreatments(): Promise<any> {
    return (await api.get(`/user/medication_today`)).data
}

async function message(data: IMessage): Promise<any> {
    return (await api.post(`/medisearch/message`, data)).data
}


const user = {postInfo, getTreatments, message}
export default user;