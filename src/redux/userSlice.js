import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Hao",
    age: "20",
    about: "i'm a software engineer",
    avatar: "https://cdn-media.sforum.vn/storage/app/media/THANHAN/avartar-anime-91.jpg",
    color:"#ff9051"
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.color = action.payload.color;
    }
  }
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
