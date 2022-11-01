// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






// 3...>>>-----------------------------------------------------------------------------------------------------------------------------------------------------------
// vazifaa telifon class ichida 3 ta odekt







// let text = "qaeoifwev.weprosweefwefalomsalomisthebestwepwefwefroisthebwfwefestwepweprokvwisthebestwsalomsawepro is the bestlomepro is the bestwepro is the bestwepro is the bestwepro WEEHTYRerherhis the bestwepro is the bestro is the best wwweeeeppprrroooiiiissssttthhheeeebbbbeessstttA"

// let sanoq = text.split('');

// let w = 0;
// let e = 0;
// let p = 0;
// let r = 0;
// let o = 0;

// let i1 = 0;
// let s = 0;

// let t = 0;
// let h = 0;
// let e1 = 0;

// let b = 0;
// let e2 = 0;
// let s1 = 0;
// let t1 = 0;

// for (let i = 0; i < sanoq.length; i++) {
//     if (sanoq[i] === 'w') {
//         w++
//     } else if(sanoq[i] === 'e'){
//         e++
//     }else if(sanoq[i] === 'p'){
//         p++
//     }else if(sanoq[i] === 'r'){
//         r++
//     }else if(sanoq[i] === 'o'){
//         o++
//     }
// }

// for (let i = 0; i < sanoq.length; i++){
//     if (sanoq[i] === 'i') {
//         i1++
//     } else if(sanoq[i] === 's'){
//         s++
//     } else if(sanoq[i] === 't'){
//         t++
//     } else if(sanoq[i] === 'h'){
//         h++
//     } else if(sanoq[i] === 'e'){
//         e1++
//     }
// }

// for (let i = 0; i < sanoq.length; i++){
//     if (sanoq[i] === 'b') {
//         b++
//     } else if(sanoq[i] === 'e'){
//         e2++
//     } else if(sanoq[i] === 's'){
//         s1++
//     } else if(sanoq[i] === 't'){
//         t1++
//     }
// }

// console.log(Math.min(w, e, p, r, o, i1, s, t, h, e1, b, e2, s1, t1 ) +  "ta bor" + "ta bor" );


// 2...>>>---------------------------------------------------------------------------------------------------------------------------------------------------
// 2vazifa Array uzgaruvchisini yaratib olish

// let arr = [
//     {
//     id: 1,
//     name: 'Malibu',
//     year: 2022,
//     model: 3,
//     color: 'black',
//     madiIn: 'Uzbekistan'
//     },
//     {
//     id: 2,    
//     name: 'Damas',
//     year: 2010,
//     model:1,
//     color: 'blue',
//     madiIn: 'Uzbekistan'
//     },
//     {
//     id: 3,
//     name: 'Lasetti',
//     year: 2022,
//     model: 2,
//     color: 'red',
//     madiIn: 'Uzbekistan'
//     },
//     {
//     id: 4,
//     name: 'Cobalt',
//     year: 2019,
//     model: 1,
//     color: 'white',
//     madiIn: 'Uzbekistan'
//     },
//     {
//     id: 5,
//     name: 'Nexia',
//     year: 2022,
//     model: 3,
//     color: 'black',
//     madiIn: 'Uzbekistan'
//     },

// ];
    
//         let Malibu = []
//         let Damas = []
//         let Lasetti = []
//         let Cobalt = []
//         let Nexia = []

// for(let item of arr){
//     if(item.id == '1'){
//         Malibu.push(item.name)
//         Malibu.push(item.year)
//         Malibu.push(item.model)
//         Malibu.push(item.color)
//         Malibu.push(item.madiIn)
//     }else if(item.id == '2'){
//         Damas.push(item.name)
//         Damas.push(item.year)
//         Damas.push(item.model)
//         Damas.push(item.color)
//         Damas.push(item.madiIn)
//     }else if(item.id == '3'){
//         Lasetti.push(item.name)
//         Lasetti.push(item.year)
//         Lasetti.push(item.model)
//         Lasetti.push(item.color)
//         Lasetti.push(item.madiIn)
//     }else if(item.id == '4'){
//         Cobalt.push(item.name)
//         Cobalt.push(item.year)
//         Cobalt.push(item.model)
//         Cobalt.push(item.color)
//         Cobalt.push(item.madiIn)
//     }else if(item.id == '5'){
//         Nexia.push(item.name)
//         Nexia.push(item.year)
//         Nexia.push(item.model)
//         Nexia.push(item.color)
//         Nexia.push(item.madiIn)
//     }
// }
// console.log(Malibu);
// console.log(Damas);
// console.log(Lasetti);
// console.log(Cobalt);
// console.log(Nexia);



// 3...>>>-------------------------------------------------------------------------------------------------------------------------------------------
// vazifaa telifon class ichida 3 ta odekt


// class Telifon{

//     Samsung = {
//         phone: '',
//         model: '',
//         year: '',
//         name: '',
//     }

//     Apple = {
//         phone: '',
//         model: '',
//         year: '',
//         name: '',
//     }

//     BlackBerry = {
//         phone: '',
//         model: '',
//         year: '',
//         name: '',
//     }

//     constructor(
        
//         phone, model, year, name,
        
//         phone1, model1, year1, name1,

//         phone2, model2, year2, name2

//         ){
//         this.Samsung.phone = phone
//         this.Samsung.model = model
//         this.Samsung.year = year
//         this.Samsung.name = name

//         this.Apple.phone = phone1
//         this.Apple.model = model1
//         this.Apple.year = year1
//         this.Apple.name = name1

//         this.BlackBerry.phone = phone2
//         this.BlackBerry.model = model2
//         this.BlackBerry.year = year2
//         this.BlackBerry.name = name2

//     }

// }

// let a = new Telifon( 

//     'Andriod', 'A20', 2018, 'Samsung',

//     'iPhone', '13ProMax', 2021, 'Apple',

//     'Android', 'Venice 5G', 2021, 'BlackBerry'

//     );

// console.log(a.Samsung);
// console.log(a.Apple);
// console.log(a.BlackBerry);



// 4...>>>--------------------------------------------------------------------------------------------------------------------------------------
// vazifaa class ichida 4 ta odekt


// class Texnika{

//     Asus = {
//         marka: "",
//         model: "",
//         cdcard: "",
//         mause: "",
//         monitor: "",
//         keyboard: "",
//     }

//     Lenovo = {
//         marka: '',
//         model: '',
//         cdcard: '',
//         mause: '',
//         monitor: '',
//         keyboard: '',
//     }

//     MacBook = {
//         marka: '',
//         model: '',
//         cdcard: '',
//         mause: '',
//         monitor: '',
//         keyboard: '',
//     }

//     constructor(
        
//         marka, model, cdcard, mause, monitor, keyboard,
        
//         marka1, model1, cdcard1, mause1, monitor1, keyboard1,
        
//         marka2, model2, cdcard2, mause2, monitor2, keyboard2,){
//         this.Asus.marka = marka
//         this.Asus.model = model
//         this.Asus.cdcard = cdcard
//         this.Asus.mause = mause
//         this.Asus.monitor = monitor
//         this.Asus.keyboard = keyboard 

//         this.Lenovo.marka = marka1
//         this.Lenovo.model = model1
//         this.Lenovo.cdcard = cdcard1
//         this.Lenovo.mause = mause1
//         this.Lenovo.monitor = monitor1
//         this.Lenovo.keyboard = keyboard1

//         this.MacBook.marka = marka2
//         this.MacBook.model = model2
//         this.MacBook.cdcard = cdcard2
//         this.MacBook.mause = mause2
//         this.MacBook.monitor = monitor2
//         this.MacBook.keyboard = keyboard2
//     }

// }

// let b = new Texnika (
//      'Asus', 'E36SW', '1TB', 'sensor', 'nanoMonitorS6', 'mexanico',
     
//      ' Lenova ',  'S6', '250GB', 'mega', 'ultra 8w ', 'classico',

//      'MacBook', 'Pro 6', '1TB',  'sensor', 'super', 'mexanico',
     
//      );

// console.log(b.Asus);
// console.log(b.Lenovo);
// console.log(b.MacBook);



// 5...>>>---------------------------------------------------------------------------------------------------------------------
// vazifaa class ichida 5 ta odekt


class Telifon{

    Samsung = {
        phone: '',
        turi: '',
        year: '',
        name: '',
    }

    Apple = {
        phone: '',
        turi: '',
        year: '',
        name: '',
    }

    BlackBerry = {
        phone: '',
        turi: '',
        year: '',
        name: '',
    }

    constructor(
        
        phone, turi, year, name,
        
        phone1, turi1, year1, name1,

        phone2, turi2, year2, name2

        ){
        this.Samsung.phone = phone
        this.Samsung.turi = turi
        this.Samsung.year = year
        this.Samsung.name = name

        this.Apple.phone = phone1
        this.Apple.turi = turi1
        this.Apple.year = year1
        this.Apple.name = name1

        this.BlackBerry.phone = phone2
        this.BlackBerry.turi = turi2
        this.BlackBerry.year = year2
        this.BlackBerry.name = name2

    }

}


class Texnika extends Telifon{

    Asus = {
        marka: "",
        model: "",
        cdcard: "",
        mause: "",
        monitor: "",
        keyboard: "",
    }

    Lenovo = {
        marka: '',
        model: '',
        cdcard: '',
        mause: '',
        monitor: '',
        keyboard: '',
    }

    MacBook = {
        marka: '',
        model: '',
        cdcard: '',
        mause: '',
        monitor: '',
        keyboard: '',
    }

    constructor(
        
        marka, model, cdcard, mause, monitor, keyboard,
        
        marka1, model1, cdcard1, mause1, monitor1, keyboard1,
        
        marka2, model2, cdcard2, mause2, monitor2, keyboard2,

        phone, turi, year, name,
        
        phone1, turi1, year1, name1,

        phone2, turi2, year2, name2

        ){
            super(
                phone, turi, year, name,
        
                phone1, turi1, year1, name1,
        
                phone2, turi2, year2, name2
            )
        this.Asus.marka = marka
        this.Asus.model = model
        this.Asus.cdcard = cdcard
        this.Asus.mause = mause
        this.Asus.monitor = monitor
        this.Asus.keyboard = keyboard 

        this.Lenovo.marka = marka1
        this.Lenovo.model = model1
        this.Lenovo.cdcard = cdcard1
        this.Lenovo.mause = mause1
        this.Lenovo.monitor = monitor1
        this.Lenovo.keyboard = keyboard1

        this.MacBook.marka = marka2
        this.MacBook.model = model2
        this.MacBook.cdcard = cdcard2
        this.MacBook.mause = mause2
        this.MacBook.monitor = monitor2
        this.MacBook.keyboard = keyboard2
    }

}

class Magazin extends Texnika {
    adres = ''
    locatin = ''
    nameMagazen = ''
    products = ''

    constructor(
        
        adres, locatin, nameMagazen, products,

        marka, model, cdcard, mause, monitor, keyboard,
        
        marka1, model1, cdcard1, mause1, monitor1, keyboard1,
        
        marka2, model2, cdcard2, mause2, monitor2, keyboard2,

        phone, turi, year, name,
        
        phone1, turi1, year1, name1,

        phone2, turi2, year2, name2
        
        ){
            super(
                adres, locatin, nameMagazen, products,

                marka, model, cdcard, mause, monitor, keyboard,
                
                marka1, model1, cdcard1, mause1, monitor1, keyboard1,
                
                marka2, model2, cdcard2, mause2, monitor2, keyboard2,
        
                phone, turi, year, name,
                
                phone1, turi1, year1, name1,
        
                phone2, turi2, year2, name2
            )
        this.adres = adres
        this.locatin = locatin
        this.nameMagazen = nameMagazen
        this.products = products
    }
    info(){
        return this
    }
}

let a = new Magazin (
    
    'Samarqand', 'Marhabo', 'S.W.A.T texno', 'Maishiy texnnikalar',

    'Asus', 'E36SW', '1TB', 'sensor', 'nanoMonitorS6', 'mexanico',
     
    ' Lenova ',  'S6', '250GB', 'mega', 'ultra 8w ', 'classico',

    'MacBook', 'Pro 6', '1TB',  'sensor', 'super', 'mexanico',

    'Andriod', 'A20', 2018, 'Samsung',

    'iPhone', '13ProMax', 2021, 'Apple',

    'Android', 'Venice 5G', 2021, 'BlackBerry'

);

console.log(a);





// ------------------------------------------------------------------------------------------------------------------------------------------------------