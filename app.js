// Dish Dish Data Structure 
// Developers: Mehrdad Jokari, Tara Tavangar , Aye Mozaffari


// Selecting From HTML
// بادی رو سلکت کردم
let body = document.querySelector('body')
// فضایی که توپ میتواند جابجا شود
let ballContainer = document.querySelector('#ballContainer')
// توپ رو سلکت کردم
let ball = document.querySelector('#ball')
// اسپن جون رو سلکت کردم
let lives = document.querySelector('#lives')
// اینپوت جون رو سلکت کردم
let speed = document.querySelector('#speed')
// دیو ارور رو سلکت کردم
let error = document.querySelector('#error')
// اسپن ارور
let exit = document.querySelector('#exit')
// بمب انجار در صفحه
let bomb = document.querySelector('#bomb')


// Moving The Ball
// Adding Event Listener To Use KeyDown 
//بادی رو صدا زدم و گفتم اگه توی بادی دکمه ای از 
// کیبورد کلیک شد برام فانکشن رو اجراکن
body.addEventListener('keydown', (e) => {
    // اگه فانکشن اجرا شد بیا ایف رو برام اجرا کن
    // برابر بود با نام کلید  ،  key اگه 
    // کیبورد پایین عملیاتی که گفتم رو اجرا کن
    if (e.key === 'ArrowDown') {
        // توپ رو صدا زدم و بهش استایل مارجین بالا رو دادم
        // و گفتم از هر جایی که هستی برو پایین
        ball.style.marginTop = '350px'
    }
})

//بادی رو صدا زدم و گفتم اگه توی بادی دکمه ای از 
// کیبورد کلیک شد برام فانکشن رو اجراکن
body.addEventListener('keydown', (e) => {
    // اگه فانکشن اجرا شد بیا ایف رو برام اجرا کن
    // برابر بود با نام کلید  ،  key اگه 
    // کیبورد بالا عملیاتی که گفتم رو اجرا کن
    if (e.key === 'ArrowUp') {
        // توپ رو صدا زدم و بهش استایل مارجین دادم 
        // چون که توپ در مرحله اول بالا صفحه قرار داره 
        // بهش گفتم از هر جایی که هست به سمت بالا حرکت کن
        ball.style.marginTop = '20px'
    }
})

//بادی رو صدا زدم و گفتم اگه توی بادی دکمه ای از 
// کیبورد کلیک شد برام فانکشن رو اجراکن
body.addEventListener('keydown', (e) => {
    // اگه فانکشن اجرا شد بیا ایف رو برام اجرا کن
    // برابر بود با نام کلید  ،  key اگه 
    // کیبورد چپ عملیاتی که گفتم رو اجرا کن
    if (e.key === 'ArrowLeft') {
        // توپ رو صدا زدم و بهش استایل مارجین دادم 
        // و گفتم از هر جایی که هستی به سمت چپ حرکت کن
        ball.style.marginRight = '85%'
        ball.style.transform = 'rotate(-360deg)   matrix(1, 2, 3)'
        // ball.style.transform='scale(1.2)'
    }
})

//بادی رو صدا زدم و گفتم اگه توی بادی دکمه ای از 
// کیبورد کلیک شد برام فانکشن رو اجراکن
body.addEventListener('keydown', (e) => {
    // اگه فانکشن اجرا شد بیا ایف رو برام اجرا کن
    // برابر بود با نام کلید  ،  key اگه 
    // کیبورد راست عملیاتی که گفتم رو اجرا کن
    if (e.key === 'ArrowRight') {
        // توپ رو صدا زدم و بهش استایل مارجین دادم 
        // چون که توپ در مرحله اول سمت راست صفحه قرار داره 
        // بهش گفتم از هر جایی گه هست به سمت راست بره
        ball.style.marginRight = '20px'
        ball.style.transform = 'rotate(0deg)'
    }
})

// اینپوت سرعت رو صدا زدم و گفتم هر وقت که روت کلیک شد 
// بیا فانکشن رو اجرا کن
sorat.addEventListener('click', () => {
    //  مقدار اینپوت سرعت ریختم توی یه متغیر که کار برام آسون بشه
    let x = speed.value
    // اگه متغیر برابر بود با 1 عملایت رو انجام بده
    if (x == 1) {
        // سرعت توپ رو خیلی زیاد کن
        ball.style.transitionDuration = '10s'
    }
    // اگه متغیر برابر بود با 2 عملایت رو انجام بده
    if (x == 2) {
        // سرعت توپ رو زیاد کن
        ball.style.transitionDuration = '7s'
    }
    // اگه متغیر برابر بود با 3 عملایت رو انجام بده
    if (x == 3) {
        // سرعت توپ رو به حد نرمال بیار 
        ball.style.transitionDuration = '5s'
    }
    // اگه متغیر برابر بود با 4 عملایت رو انجام بده
    if (x == 4) {
        // سرعت توپ رو کم کن
        ball.style.transitionDuration = '3s'
    }
    // اگه متغیر برابر بود با 5 عملایت رو انجام بده
    if (x == 5) {
        // سرعت توپ رو خیلی کم کن
        ball.style.transitionDuration = '1s'
    }
})

// اگه رو توپ کلیک شد فانکشن رو برام اجرا کن
ball.addEventListener('click', () => {
    // یکی از مقدار جون کم کن
    lives.innerHTML -= 1
    // اگه جونش 0 شد عملیات رو اجرا کن
    if (lives.innerHTML == 0) {
        // دیود ارور رو برا ظاهر کن
        error.style.display = 'block'
        // جون رو به مقدار اولی (5) برگردون
        jon.innerHTML = 5
    }
})
// اگه روی ایکون خروج دیو ارور کلیک شد عملیات رو اجرا کن
error.addEventListener('click', () => {
    // دیو ارور رو مهو کن
    error.style.display = 'none'
    // ------------------------------------------------------------------
    bomb.style.display = 'none'
})

// اگه توی فضای کانتینر کلیک شد عملیات رو اجرا کن
ballContainer.addEventListener('click', (e) => {
    // مقدار عرض رو ریختم توی متغیر
    let left = e.x
    // مقدار ارتفاع رو ریختم توی متغیر
    let top = e.y
    // مقدار رو دریافت کردم و 20 تا  top از متغیر 
    // ازش کم کردم تا بیاد هموون جایی که موس قرار داره
    // و گفتم به همون مقدار مارجین بالا بگیر
    bomb.style.marginTop = top -20 + 'px'
    // مقدار رو دریافت کردم و 20 تا  left از متغیر 
    // ازش کم کردم تا بیاد هموون جایی که موس قرار داره
    // و گفتم به همون مقدار مارجین چپ بگیر
    bomb.style.marginLeft = left -20 + 'px'
    // بمب رو نمایش بده
    bomb.style.display = 'block'
})