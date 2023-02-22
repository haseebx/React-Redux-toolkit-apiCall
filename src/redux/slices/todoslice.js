import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchtodo = createAsyncThunk('fetchtodo', async () => {
  const response = await fetch(
     "https://jsonplaceholder.typicode.com/todos"
    );
    
    return response.json();
});

const todoSlice = createSlice({
  name: 'todo',
});

export default todoSlice.reducer;
