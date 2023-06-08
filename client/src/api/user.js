import { ENV } from "../utils";

export class User {
  baseApi = ENV.BASE_API;
  async getMe(accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUser(accessToken, idUser) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.ENGINEER}/${idUser}`;

      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createUser(accessToken, data) {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      formData.append("balance", 0);
      formData.append("active", true);
      formData.append("role", "technician");
      formData.append("password", 100);

      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`;

      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };
      console.log(params);
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getEngineers(accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USERS}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(accessToken, idUser, userData) {
    try {
      const data = userData;
      if (!data.password) {
        delete data.password;
      }
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const url = `${ENV.BASE_API}/${ENV.API_ROUTES.USER}/${idUser}`;
      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);

      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
