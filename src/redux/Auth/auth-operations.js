import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3002/api/auth/';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async creditals => {
    try {
        const { data } = await axios.post('/register', creditals)
        token.set(data.token)
        return data
    } catch (error) {
        console.log(error);
    }
});

const logIn = createAsyncThunk('auth/login', async creditals => {
    try {
        const { data } = await axios.post('/login', creditals)
        token.set(data.token)
        return data
    } catch (error) {
        console.log(error);
    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/logout')
        token.unset()
    } catch (error) {
        console.log(error);
    }
});

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/current');
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
}

export default authOperations;