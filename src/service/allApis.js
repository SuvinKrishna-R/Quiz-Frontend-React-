import { BASE_URL } from "./baseUrl";
import { commonRequest } from "./commonRequest";


//get data(question and answers)
 export const getDatas=async()=>{
    return await commonRequest("GET",`${BASE_URL}/quiz`,"")
}

// export const getAllVideo=async()=>{
//     return await commonRequest("GET",`${BASE_URL}/videos`,"")
// }