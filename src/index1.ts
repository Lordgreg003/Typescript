function calculateTask(income : number , taxyear:number ): number {
    if (taxyear < 2022) 
    return income * 1.2 ;
return income * 1.3;
}
calculateTask(10_000,2022);