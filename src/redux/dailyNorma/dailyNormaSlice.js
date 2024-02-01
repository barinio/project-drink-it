// // dailyNormaSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import { getDailyNorma, updateDailyNorma } from './dailyNormaThunk';

// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// const dailyNormaSlice = createSlice({
//   name: 'dailyNorma',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(getDailyNorma.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getDailyNorma.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(getDailyNorma.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateDailyNorma.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       // .addCase(updateDailyNorma.fulfilled, (state, action) => {
//       //   state.loading = false;
//       //   state.data = action.payload;
//       //   //
//       // })
//       .addCase(updateDailyNorma.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedData = action.payload;
//         // Update the relevant state properties
//         state.weight = updatedData.weight;
//         state.gender = updatedData.gender;
//         state.activityTime = updatedData.activityTime;
//         state.willDrink = updatedData.willDrink;
//         state.dailyNorma = updatedData.dailyNorma;
//       })
//       .addCase(updateDailyNorma.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const dailyNormaReducer = dailyNormaSlice.reducer;

// dailyNormaSlice.js
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getDailyNorma, updateDailyNorma } from './dailyNormaThunk';

const initialState = {
  gender: 0,
  weight: 0,
  activityTime: 0,
  willDrink: 0,
  dailyNorma: 0,
  isLoading: false,
};

const dailyNormaSlice = createSlice({
  name: 'dailyNorma',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          getDailyNorma.pending,
          updateDailyNorma.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getDailyNorma.fulfilled,
          updateDailyNorma.fulfilled
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state = { ...state, ...payload };
        }
      )
      .addMatcher(
        isAnyOf(
          getDailyNorma.rejected,
          updateDailyNorma.rejected
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const dailyNormaReducer = dailyNormaSlice.reducer;