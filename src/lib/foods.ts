import axios, { AxiosResponse } from "axios";
import { ProductType } from "../types/foods";

const api = axios.create({
	baseURL: "http://localhost:5000",
	headers: {
		"Content-Type": "application/json",
	},
});

const getFoods = async () => {
	const response = await api.get("/foods");
	// console.log(response.data);
	return response.data;
};

export { getFoods };
