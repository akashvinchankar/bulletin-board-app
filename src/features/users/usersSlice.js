import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Akash Vinchankar" },
  { id: "1", name: "Fyodyor Doskyoresky" },
  { id: "2", name: "Nagarjun Ujade" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
