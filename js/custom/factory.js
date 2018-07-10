app.factory("myfactory",()=>{
    console.log("factory called...");
    const salaryOperations = {
        salary :0,
        
takeSalary(salary){
    this.salary = salary   //this points to salaryoperations
},
hra(){
    return this.salary * 0.30;
},
da(){
    return this.salary * 0.20;
},
ta(){
    return this.salary * 0.30;
},
pf(){
    return this.salary * 0.05;
},
gs(){
    return this.salary + this.hra() + this.da() + this.ta() - this.pf();
},
tax(){
    return this.gs() * 0.10;
},
ns(){
    return this.gs() - this.tax();
}
   }
    console.log("factory returns the object");
    return salaryOperations;
})