import { APIStatus } from "../types";
import axios from 'axios';

interface Credentials {
    username: string;
    password: string;
}

export const AuthApi = {
    login: async ({ username, password }: Credentials): Promise<APIStatus> => {
        try {
             // Make a request to the server to login
             const response = await axios.post('https://workshop3-backend-9qwy.onrender.com/api/login', { username, password });
             if (response.status === 200) {
                 return APIStatus.Success;
             } else {
                 return handleError(response.status);
             }
        } catch (e) {
            return handleError(e);
        }
    },
    signUp: async ({ username, password }: Credentials): Promise<APIStatus> => {
        try {
            // Make a request to the server to sign up
            const response = await axios.post('https://workshop3-backend-9qwy.onrender.com/api/signup', { username, password });
            if (response.status === 201) {
                return APIStatus.Success;
            } else {
                return handleError(response.status);
            }
        } catch (e) {
            return handleError(e);
        }
    },
    logout: async (): Promise<APIStatus> => {
        try {
            // Make a request to the server to logout
            const response = await axios.post('https://workshop3-backend-9qwy.onrender.com/api/logout',{ withCredentials: true });
            if (response.status === 200) {
                return APIStatus.Success;
            } else {
                return handleError(response.status);
            }
        } catch (e) {
            return handleError(e);
        }
    },
    getUserName: async (): Promise<string | APIStatus> => {
        try {
            // Make a request to the server to get the username
            const response = await axios.get('https://workshop3-backend-9qwy.onrender.com/api/username',{ withCredentials: true });
            if (response.status === 200) {
                return response.data.username;
            } else {
                return handleError(response.status);
            }
        } catch (e) {
            return handleError(e);
        }
    },
};

const handleError = async (e: unknown | number): Promise<APIStatus> => {
    
    // Handle errors based on status code
    switch (e) {
        case 400:
            return APIStatus.BadRequest;
        case 401:
            return APIStatus.Unauthorized;
        // case 404:
        //     return APIStatus.NotFound;
        default:
            return APIStatus.ServerError;
    }
};