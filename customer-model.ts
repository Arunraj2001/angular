interface customer{
    custid:number;
    custname:string;
    custaddrs:string;
    custno:number;
    custdis?:boolean;
    cuspurchased()
}
var cust:customer={
custid:101,
custname:"arun",
custaddrs:"trichy",
custno:9675565,
cuspurchased() {
    return (`10 items purchased`)
}


}
console.log(cust)