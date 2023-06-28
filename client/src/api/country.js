import { ENV } from "../utils";

export class Country {
  baseApi = ENV.BASE_API;

  async createCountry(accessToken, data, role) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.COUNTRY}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      };
      console.log(params.body);
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getCountries(accessToken, role = undefined) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.COUNTRIES}`;
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

  async deleteCountry(accessToken, idCountry) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.COUNTRY}/${idCountry}`;
      const params = {
        method: "DELETE",
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
}
