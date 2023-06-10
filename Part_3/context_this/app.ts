{
    class Payment {
        private date: Date = new Date();

        // Аргумент работает иначе. Он сообщает TS, что функцию обязательно нужно вызывать в контексте класса
        getDateSelf(this: Payment) {
            return this.date
        }

        getDate() {
            return this.date
        }

        sumNumbersSelf(this: Payment, first: number, second: number) {
            return first+second
        }

        // В стрелочных функциях контекст не передаётся
         getDateArrow = ()=>{
            return this.date;
        }
        getDateArrow2(){
            return this.date;
        }
    }

    const p = new Payment();
    const user = {
        id: 123,
        paymentDate: p.getDate,
        paymentDateSelf: p.getDateSelf.bind(p,),
        paymentSumNumbersSelf:p.sumNumbersSelf.bind(p),
    }

    console.log("1user::paymentData::user context", user.paymentDate()); // => undefined

    // console.log("user::paymentData::self context:error",user.getDateSelf()); // => ERROR! TS видит, что метод должен вызываться в контексте класса
    console.log("user::paymentDateSelf::self context", user.paymentDateSelf()); // => Текущая дата
    console.log("user::paymentDateSelf::self context:args", user.paymentSumNumbersSelf(1,5)); // => 6

    console.log(p.sumNumbersSelf(1, 2));


    class PaymentPersistent extends Payment {
        save(){
            return super.getDateArrow(); // => error, контекст потерялся из-за стрелочной функции
        }
        save2(){
            return this.getDateArrow(); // => normal
        }
        save3(){
            return super.getDateArrow2(); // => normal
            // && return this.getDateArrow2(); // => normal
        }
    }
    const paymentPersistent = new PaymentPersistent();
    console.log("paymentPersistent.save3()::",paymentPersistent.save2(),paymentPersistent.save3());
}