

const button = document.getElementById('button')




class CalculareDate {
    
    
    constructor(year,month,day){
        
       
        this.day = document.getElementById(day);
        this.month = document.getElementById(month);
        this.year = document.getElementById(year);
        this.showYear = document.getElementById('showYear')
        this.showDay = document.getElementById('showDay')
        this.showMonth = document.getElementById('showMonth')
        
    }
    
    
    getMilisecons() {
        
        
       const Dayvalue = this.day.value;
       const monthvalue = this.month.value;
       const Yearvalue = this.year.value;
        
        
       const Pastdate = new Date(Yearvalue,monthvalue,Dayvalue)
       const today = new Date()

       const diference = today.getTime() - Pastdate.getTime()  ;


       const minutes =  Math.floor(diference/60000)
       const years = minutes/525600;
       const yearNumber = Math.floor(years)


       this.showYear.innerText=yearNumber

       const decimal = years - Math.floor(years)
       
       const monthsMinutes =  decimal*12
       const months = monthsMinutes
       const monthNumber = Math.floor(months)


        this.showMonth.innerText= monthNumber;


       const daysMinutos = months - Math.floor(months)
       const days = Math.floor(daysMinutos*30)

       this.showDay.innerText=days;


    
       console.log({
        yearNumber,monthNumber,days
       })
    

    }
    
    
    
}


const get  = new CalculareDate('year','month','day')



button.addEventListener('click',get.getMilisecons.bind(get))