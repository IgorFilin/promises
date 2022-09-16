// // внутрь Promise передаем колбэк-функцию, которая собственно и есть та логика, которую промис обещает выполнить.
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(Math.random())
//     }, 2000)
// });
// console.log(myPromise)
// // ниже по коду мы можем подписаться, на промис, чтобы он (промис) вызвал нашу функцию, когда он (промис) зарезолвится. Для этого передаём в метод then колбэк-функцию)
// myPromise
//     .then((number) => {
//         console.log("myPromise зарезолвился, и я узнал об этом: " + number);
//         console.log(myPromise)
//     })
//     .then((number) => {
//         console.log("myPromise зарезолвился, и я узнал об этом: " + number);
//         console.log(myPromise)
//     })

//===================================================================================================================

// // промисификация
// function doAfter(valueTimeout) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let randomValue = Math.random()
//             if(randomValue > 0.1){
//                 resolve()
//             }else {
//                 reject()
//             }
//
//         }, valueTimeout * 1000)
//     })
// }

//
// doAfter(5).then( () => console.log('я сработал через 5 секунд') );
// doAfter(3).then( () => console.log('а я сработал через 3 секунд') );
// doAfter(10).then( () => console.log('я сработал через 10 секунд') );
//=====================================================================================================================
// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );
//======================================================================================================================
// let pr1 = doAfter(1)
//
// let pr2 = pr1.then(() => {
//      console.log(1)
//      return 1
// })
// let pr3 = pr2.then()
// let pr4 = pr3.then(()=> console.log(1))
// let pr5 = pr4.then()
// console.log(pr1,pr2,pr3,pr4,pr5)

//======================================================================================================================
// api.sendStudentsCountToItKamasutra(20)
//     .then(res => res.data)
//     .then(data => data.message)
//     .then(m => console.log(m))
//================================================================
// let pr1 = api.getVacanciesCountFromMicrosoft()
// let pr2 = api.getVacanciesCountFromGoogle()
//  Promise.all([pr1,pr2])
//      .then(res => {
//          return res.reduce((acc,curr)=> {
//            return acc + curr
//          },0)
//      })
//      .then(res => api.sendStudentsCountToItKamasutra(res))
//      .then(res => console.log(res))
// let count;
// api.getVacanciesCountFromMicrosoft()
//     .then(res => {
//         count = res
//         return api.getVacanciesCountFromGoogle()
//     })
//     .then(res =>{
//        return  api.sendStudentsCountToItKamasutra(res + count)
//     })
//     .then(res => console.log((res)))

// async function loadVacancies() {
//     try{
//         let a = await api.getVacanciesCountFromMicrosoft()
//         let b = await api.getVacanciesCountFromGoogle()
//         return  api.sendStudentsCountToItKamasutra(a + b)
//     } catch (error) {
//         return console.log(error)
//     } finally {
//
//     }
// }
// loadVacancies()
//     .then(res => console.log(res))

async function loadVacancies() {
    let a = api.getVacanciesCountFromMicrosoft()
    console.log(a)
    let b = api.getVacanciesCountFromGoogle()
    console.log(b)
    let res = await Promise.all([a, b])
    return api.sendStudentsCountToItKamasutra(res[0] + res[1])
}

loadVacancies()
    .then(res => console.log(res))



