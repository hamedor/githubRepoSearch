"use strict";
(self["webpackChunkcommentslist"] = self["webpackChunkcommentslist"] || []).push([["index"],{

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderItems */ "./src/renderItems.js");



const getData = async (searched) => {

        let url = `https://api.github.com/search/repositories?q=+${searched}&sort=stars&per_page=10`

        try{
            const response = await fetch(url);
            const result = await response.json()

            if(response.ok){
                return (0,_renderItems__WEBPACK_IMPORTED_MODULE_0__["default"])(result) 
            }
        } catch(err){
            console.log(err)
        }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const button = document.querySelector('.button');
const input = document.querySelector('.input');
const form = document.querySelector('.form');
const error = document.querySelector('.error');
let searched = '';
let data;

input.addEventListener('input', (e)=>{
    const target = e.target;
    searched = target.value;

    
    error.innerHTML = '';
})

button.addEventListener('click', (e)=>{
    e.preventDefault();

    if(searched.length < 3){
       error.innerHTML = 'Ошибка! Введите минимум 3 символа.';
    }else{
        data = (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(searched);
        input.value='';
    }

})



/***/ }),

/***/ "./src/renderItems.js":
/*!****************************!*\
  !*** ./src/renderItems.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderItems = (data) =>{

    const list = document.querySelector('.list');
    list.innerHTML = '';

    if(data.items.length>0){
        data.items.map(e=>{
            let template = 
            `
            <div class = 'item'>
                <div class='flex'>
                <a href="${e.html_url}" target="_blank"> <p class="name">${e.name}</p></a>
                <p class='text'> by </p>
                <p class="owner text">${e.owner.login}</p>
                </div>
               
                <p class="description">${e.description}</p>
               
          
    
            </div>
            `
            list.insertAdjacentHTML('afterbegin', template);
        })
    }else{
        list.insertAdjacentHTML('afterbegin',`<p>ничего не найдено</p>`)
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItems);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBVztBQUNsQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7QUNuQlU7QUFDVjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLG9EQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVyxxQ0FBcUMsT0FBTztBQUNsRjtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL3JlbmRlckl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCByZW5kZXJJdGVtcyBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xyXG5cclxuXHJcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoc2VhcmNoZWQpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT0rJHtzZWFyY2hlZH0mc29ydD1zdGFycyZwZXJfcGFnZT0xMGBcclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckl0ZW1zKHJlc3VsdCkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vZ2V0RGF0YVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XHJcbmxldCBzZWFyY2hlZCA9ICcnO1xyXG5sZXQgZGF0YTtcclxuXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpPT57XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHNlYXJjaGVkID0gdGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIFxyXG4gICAgZXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcbn0pXHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZihzZWFyY2hlZC5sZW5ndGggPCAzKXtcclxuICAgICAgIGVycm9yLmlubmVySFRNTCA9ICfQntGI0LjQsdC60LAhINCS0LLQtdC00LjRgtC1INC80LjQvdC40LzRg9C8IDMg0YHQuNC80LLQvtC70LAuJztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGRhdGEgPSBnZXREYXRhKHNlYXJjaGVkKTtcclxuICAgICAgICBpbnB1dC52YWx1ZT0nJztcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4iLCJjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PntcclxuXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgaWYoZGF0YS5pdGVtcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgZGF0YS5pdGVtcy5tYXAoZT0+e1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gJ2l0ZW0nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtlLmh0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiA8cCBjbGFzcz1cIm5hbWVcIj4ke2UubmFtZX08L3A+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9J3RleHQnPiBieSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm93bmVyIHRleHRcIj4ke2Uub3duZXIubG9naW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgbGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxgPHA+0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L48L3A+YClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckl0ZW1zOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==