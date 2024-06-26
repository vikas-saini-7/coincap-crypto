import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getTopCoins = createAsyncThunk(
    'coins/getAllCoins',
    async (pageNumber) => {
      const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: {
          vs_currency: 'inr',
          page: pageNumber, // Use the provided page number
          per_page: '100',
          order: 'market_cap_desc'
        },
        headers: {
          'X-RapidAPI-Key': '532b0802c2mshc3f49408396792fp1f9c19jsn12cc247443d6',
          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  );