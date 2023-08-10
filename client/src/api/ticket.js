import { ENV } from "../utils";

export class Ticket {
  baseApi = ENV.BASE_API;

  async createTicket(accessToken, data, role) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.TICKET}`;
      data.status = "open";
      data.responsible = "To be assigned";

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

  async getTickets(accessToken, role = undefined) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.TICKETS}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      console.log(result);
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteTicket(accessToken, idCountry) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.TICKET}/${idCountry}`;
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
