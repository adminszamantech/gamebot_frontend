import axios from "@/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('useAuthStore',{
    state: ()=> ({
        user: null,
        isLoggedIn: false,
        message: null
    }),
    actions: {
        async login(form){
            try {
                const res = await axios.post('/user-login',form);
                if(res.status == 200){
                    this.user = res.data.user;
                    this.isLoggedIn = true;
                    this.message = res.data.message;
                    localStorage.setItem('token', res.data.token);
                }
            } catch (error) {
                throw error;
            }
        },
        async register(form){
            try {
                const res = await axios.post('/user-register',form);
                if(res.status == 200){
                    this.user = res.data.user;
                    this.isLoggedIn = true;
                    this.message = res.data.message;
                    localStorage.setItem('token', res.data.token);
                }
            } catch (error) {
                this.isLoggedIn = false;
                throw error;
            }
        },
        async authCheck(){
            try {
                const token = localStorage.getItem('token');
                if(token){
                    const res = await axios.get('/auth-check',{
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    if(res.status === 200 && res.data.isValid){
                        this.isLoggedIn = true;
                        this.user = res.data.user;
                        return true
                    }else{
                        this.isLoggedIn = false;
                        return false;
                    }
                }else{
                    this.isLoggedIn = false;
                    return false;
                }
            } catch (error) {
                this.isLoggedIn = false;
                throw error;
            }
        },
    }
});