let calc={
    'sum':function(){
          this.res=this.num1 + this.num2;
          console.log(this.res);     
    },
    'sub':function(){
        this.res=this.num1 - this.num2;
        console.log(this.res);
    },
    'mul':function(){
        this.res=this.num1 * this.num2;
        console.log(this.res)  
    },
    'div':function(){
        this.res=this.num1 / this.num2;
        console.log(this.res);
    },  
};
let set1={
    'num1':20,
    'num2':20,
    'res':0,
};
//Here we go call methods for different operations

//call method for sum
calc.sum.call(set1);

//call method for sub
calc.sub.call(set1);

//call method for mul
calc.mul.call(set1);

//call method for div
calc.div.call(set1);



let calc2={
    'sum':function(a,b){
        let res=a+b;
        console.log(res);

    },
    'sub':function(a,b){
        let res=a-b;
        console.log(res);
    },
    'mul':function(a,b){
        let res=a*b;
        console.log(res);
    },
    'div':function(a,b){
        let res=a/b;
        console.log(res);
    }
};

let set2={
    
}
let ary=[80,40];
//apply for sum
calc2.sum.apply(set2 , ary);

//apply for sub
calc2.sub.apply(set2 , ary);

//apply for mul
calc2.mul.apply(set2 , ary);

//apply for div
calc2.div.apply(set2 , ary);






let calc3={
    'sum':function(){
        this.res=this.num1 + this.num2;
        console.log(this.res);

    },
    'sub':function(){
        this.res=this.num1 + this.num2;
        console.log(this.res);
    },
    'mul':function(){
        this.res=this.num1 * this.num2;
        console.log(this.res);
    },
    'div':function(){
        this.res=this.num1 / this.num2;
        console.log(this.res);
    },

};
set3={
    'num1':30,
    'num2':40,
    'res':0,
};
//bind for sum
let bind_sum=calc3.sum.bind(set3);
bind_sum();

//bind for mul
let bind_sub=calc3.sub.bind(set3);
bind_sub();


//bind for mul
let bind_mul=calc3.mul.bind(set3);
bind_mul();



//bind for div
let bind_div=calc3.div.bind(set3);
bind_div();
    








