import { ITreatment } from "../types/Treatment";
import { IUserInfo } from "../types/User";
import api from "./api.service";

async function postInfo(data: IUserInfo): Promise<any> {
    return (await api.post(`/user/info`, data)).data;
}

async function getTreatments(): Promise<ITreatment> {
    return (await api.get(`/user/medication_today`)).data
}

const user = {postInfo, getTreatments}
export default user;