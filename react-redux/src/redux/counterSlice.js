import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  loading: true,
  allCountries: [],
  filteredCountries:[],
  selectedCountry:null,
}

export const getCountries = createAsyncThunk("getCountry", async () => {
  // const response  = await axios.get("https://restcountries.com/v3.1/all");
  // return response.data;
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  console.log("the data is gotten from the api");
  let sortedData = data.sort((a, b) => {
    // If you are sure that all the chars are lowerCase or upperCase you can get rid of ".toLowerCase()" for below
    // if it's not a object, just a simple array, there is no need nameA,nameB, just use  return a.localeCompare(b);
    var nameA = a.name.common.toLowerCase();
    var nameB = b.name.common.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return sortedData;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload
    },
    filterCountries: (state, action) => {
      state.filteredCountries = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.allCountries = action.payload;
      state.filteredCountries = action.payload;
      state.loading = false;
    });
    // fulfilled gibi pending özelliğini de kullanabilirsin
    builder.addCase(getCountries.pending, (state) => {
      state.loading = true;
    });
  },
})

// reducers: {} içindeki fonksyonlar burada export ediliyor
export const { increment, decrement, incrementByAmount, selectCountry, filterCountries } = counterSlice.actions

export default counterSlice.reducer
