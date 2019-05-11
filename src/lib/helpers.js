export const filterByAmount = (array, amount) =>{
    if(amount===0)return array;
    return array.filter(item => item.price <= amount);
};

