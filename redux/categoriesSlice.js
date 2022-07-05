import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
      value: ['Развлечения', 'Афиша', 'Еда', 'Шопинг', 'Здоровье']
    },
    reducers: {
      open: state => {
        state.value.push('Обучение', 'Услуги', 'Туризм и отдых', 'Детский праздник', 'Беременным', 'Туризм и отдых')
      },
      close: state => {
        state.value.splice(5)
      }

    }
});
  
export const { open, close } = categoriesSlice.actions;
  
export default categoriesSlice.reducer;