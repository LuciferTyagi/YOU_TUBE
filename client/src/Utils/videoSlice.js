import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoId: null,
  },
  reducers: {
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    resetVideoId: (state) => {
        state.videoId = null;
      },
  },
});

export const{setVideoId ,resetVideoId} = videoSlice.actions;
export default videoSlice.reducer;