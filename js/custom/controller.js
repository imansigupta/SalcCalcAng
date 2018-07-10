app.controller("myctrl",($scope,myfactory)=>{
    console.log("controller called...and $scope is ",$scope);
    $scope.compute=()=>{
        var result = myfactory.takeSalary($scope.salary)
        console.log("value achieved",$scope.salary);
        this.printResult();
    },
    printResult=()=>{
        console.log("i m in this function....")   
        console.log("type of ",typeof myfactory)
            for(let key in myfactory){
                
                if(key == 'salary' || key == 'takeSalary'){
                    continue;//so as to skip the first two operations in salaryOperations because one is variable and other is argumented function which is called earlier and hence no need to call here
                }
                $scope[key]= myfactory[key]();
            }                  

        
    }
})