//CACULATOR

// function topla(a,b){
//     return a+b
// }

// function cixma(a,b){
//     return a-b
// }

// function vurma(a,b){
//     return a*b
// }

// function bolme(a,b){
//     return a/b
// }

// function hesabla(say1,say2,gelenDeyer){
//    return gelenDeyer(say1,say2)
// }

// console.log(hesabla(2,7,topla))

// ---------------------------------------------------------------------------


// function topla(...nums){
//     return nums.reduce((a,b)=> a+b,0)

// }

// function cixma(...nums){
//     // return nums.reduce((a,b)=> a-b,0)
//     let arr=[...nums]

//     let cixma = arr [0]

//     for (let i = 1; i < arr.length; i++) {
//         cixma -=arr[i]
//     }

//     return cixma
// }

// function vurma(...nums){
//     return  nums.reduce((a,b)=> a*b,1)

// }

// function bolme(...nums){
//     // return nums.reduce((a,b)=> a/b,1)

//     let arr=[...nums] // gelen deyeri arraye elave et

//     let bolme = arr [0] // arrayin ilkin yeni 0 indexdeki deyeri bolmeye menimsedierem

//     for (let i = 1; i < arr.length; i++) {
//         bolme /=arr[i]
//     }

//     return bolme
// }

// function hesabla(callback , ...nums){
//    return callback(...nums)
// }

// console.log(hesabla (bolme, 8,2))





// --------------------------------
// const arr = [
//   {
//     id: 4,
//     supplierId: 2,
//     categoryId: 3,
//     quantityPerUnit: "48 - 6 oz jars",
//     unitPrice: 22,
//     unitsInStock: 53,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Chef Anton's Cajun Seasoning",
//     supplier: {
//       id: 2,
//       companyName: "New Orleans Cajun Delights",
//       contactName: "Shelley Burke",
//       contactTitle: "Order Administrator",
//       address: {
//         street: "P.O. Box 78934",
//         city: "New Orleans",
//         region: "LA",
//         postalCode: 70117,
//         country: "USA",
//         phone: "(100) 555-4822",
//       },
//     },
//     category: {
//       id: 3,
//       description: "Desserts candies and sweet breads",
//       name: "Confections",
//     },
//   },
//   {
//     id: 5,
//     supplierId: 2,
//     categoryId: 2,
//     quantityPerUnit: "36 boxes",
//     unitPrice: 21.35,
//     unitsInStock: 0,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Chef Anton's Gumbo Mix",
//   },
//   {
//     id: 6,
//     supplierId: 3,
//     categoryId: 2,
//     quantityPerUnit: "12 - 8 oz jars",
//     unitPrice: 25,
//     unitsInStock: 120,
//     unitsOnOrder: 0,
//     reorderLevel: 25,
//     discontinued: false,
//     name: "Grandma's Boysenberry Spread",
//   },
//   {
//     id: 7,
//     supplierId: 3,
//     categoryId: 7,
//     quantityPerUnit: "12 - 1 lb pkgs.",
//     unitPrice: 30,
//     unitsInStock: 15,
//     unitsOnOrder: 0,
//     reorderLevel: 10,
//     discontinued: false,
//     name: "Uncle Bob's Organic Dried Pears",
//   },
//   {
//     id: 8,
//     supplierId: 3,
//     categoryId: 2,
//     quantityPerUnit: "12 - 12 oz jars",
//     unitPrice: 40,
//     unitsInStock: 6,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: false,
//     name: "Northwoods Cranberry Sauce",
//   },
//   {
//     id: 9,
//     supplierId: 4,
//     categoryId: 6,
//     quantityPerUnit: "18 - 500 g pkgs.",
//     unitPrice: 97,
//     unitsInStock: 29,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Mishi Kobe Niku",
//   },
//   {
//     id: 10,
//     supplierId: 4,
//     categoryId: 8,
//     quantityPerUnit: "12 - 200 ml jars",
//     unitPrice: 31,
//     unitsInStock: 31,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: false,
//     name: "Ikura",
//   },
// ];



// const arr1=arr.filter((x)=> x.unitPrice > 20 && x.unitPrice < 40  && x.categoryId > 4)

// console.log(arr1)

// arr.forEach(i => {
//     if (i.name === 'Ikura') {
//         console.log(i)
//     }
// });


// arr.forEach(i => {
//     if (i.id > 5 && i.id < 10) {
//         console.log(i)
//     } 
// });


