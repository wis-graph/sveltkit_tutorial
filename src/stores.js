import { writable } from "svelte/store";
import { browser } from "$app/env";


// 문자열 입력
export const userName = writable(browser && localStorage.getItem("userName") || "kogoome");
userName.subscribe(name => {
  browser && localStorage.setItem("userName", name);
})


// 배열이나 객체 입력도 가능
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const storedFruits = browser && (JSON.parse(localStorage.getItem("fruits")) || ["apple", "banana", "cherry"])
export const fruits = writable(storedFruits)
fruits.subscribe((fruit) => {
  browser && (localStorage.fruits = JSON.stringify(fruit))
})
