import {configureStore,createSlice} from '@reduxjs/toolkit';
const load=()=>{try{return JSON.parse(localStorage.getItem('foodie_cart'))||[]}catch{return []}};
const cart=createSlice({name:'cart',initialState:load(),reducers:{add:(s,a)=>{const item=s.find(x=>x.id===a.payload.id);if(item)item.qty++;else s.push({...a.payload,qty:1})},remove:(s,a)=>s.filter(x=>x.id!==a.payload),quantity:(s,a)=>{const item=s.find(x=>x.id===a.payload.id);if(item)item.qty=Math.max(1,a.payload.qty)},clear:()=>[]}});
export const {add,remove,quantity,clear}=cart.actions;export const store=configureStore({reducer:{cart:cart.reducer}});store.subscribe(()=>localStorage.setItem('foodie_cart',JSON.stringify(store.getState().cart)));
