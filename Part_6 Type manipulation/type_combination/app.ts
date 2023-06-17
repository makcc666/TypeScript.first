{
    type TProduct = 'apple' | 'milk' | 'tomato';
    type TPrice = '$1000' | '$12124' | '$5';

    type TItem = `${TProduct} ${TPrice}` | `${TPrice} ${TProduct}`;
    const item1:TItem = "apple $5";
    const item2:TItem = "$5 apple";
    // const item3:TItem = "milk $123"; // ERROR

}