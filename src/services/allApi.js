import { commonApi } from "./axoisConfig";
import {BASE_URL } from "./base_url";


export const Adminlogin = async (user) => {
    return await commonApi('POST', `${BASE_URL}/auth/login`, user, "")
}

export const addJobs = async (user) => {
    return await commonApi('POST', `${BASE_URL}/admin-jobs/add`, user)
}

export const getAllJobs = async () => {
    return await commonApi('GET', `${BASE_URL}/admin-jobs/jobs`, "", "")
}

export const editJobs=async(reqBody,id)=>{
    return await commonApi('PATCH', `${BASE_URL}/admin-jobs/jobs/edit/${id}`, reqBody )
}

export const deleteJobs=async(id)=>{
    return await commonApi('DELETE', `${BASE_URL}/admin-jobs/jobs/delete/${id}`, {},)
}

export const getAllusers = async () => {
    return await commonApi('GET', `${BASE_URL}/user-jobs/get/usersdts`, "")
}








