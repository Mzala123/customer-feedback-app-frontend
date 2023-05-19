import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    //userId: null,
    userId: localStorage.getItem('userId') || null,
    userDetails: {},
  }),
  getters: {
    getUserId() {
      return this.userId;
    },
    getUserDetails() {
      return this.userDetails;
    },
  },
  actions: {
    async fetchUserDetails() {
      // Make an API call to retrieve user details based on the userId
      const userDetails = await api.getUserDetails(this.userId);
      this.userDetails = userDetails;
    },
    persistUserId() {
        localStorage.setItem('userId', this.userId);
      },
      clearUserId() {
        localStorage.removeItem('userId');
      },
  },
 
});


