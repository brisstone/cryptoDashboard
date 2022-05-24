import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-access-token': 'coinranking5860dde7914eb44099ba4780ad6d474303369f28fc823a66',
  'x-rapidapi-host': 'https://api.coinranking.com',
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints using redux pattern, 'use+definedName+query'
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
