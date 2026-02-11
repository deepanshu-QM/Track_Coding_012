//Level : 1 Transformation --> 
const old_users = [
    {id:1, Name:"Pradeep Kumar",Age :23},
    {id:2, Name:"Sonam Singh",Age:21},
    {id:3,Name:"Chetan Kumar",Age:22},
    {id:4,Name:"Atul kumar",Age:24},
    {id:5,Name:"Kumar Ketan",Age:21},
    {id:6,Name:"Vishwajeet Singh",Age:27}
    ];
    
    const transformVar = old_users.map(user => {
        return `My Name is :${user.Name}  I am :${user.Age} Years Old`
    });
    console.log(transformVar)
    



    //Level : 2 Transformation ->
    const new_var = old_users.map(user => {
        return {
        ...user,
        isAdult :user.Age >= 22,
        Category :user.Age >= 22 ? "Adult":"Not Adult"
        };
    });
    
    console.log(new_var)
    
    