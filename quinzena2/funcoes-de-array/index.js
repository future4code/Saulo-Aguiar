//1)

//a)

// let nomeDogs = [];

// pets.map((item) => {
//   nomeDogs.push(item.nome);
// });

// console.log(nomeDogs);

//b)

// let dogSalsicha = [];

// dogSalsicha = pets.filter((item) => {
//   return item.raca === `Salsicha`;
// });

// let dogSalsicha = [];

// pets.map((item) => {
//   if (item.raca === `Salsicha`) {
//     dogSalsicha.push(item);
//   }
// });

// console.log(dogSalsicha);

//c)

// let dogsPoodle = [];

// dogsPoodle = pets.filter((item) => {
//   return item.raca === `Poodle`;
// });

// dogsPoodle.map((item) => {
//   console.log(`Você ganhou 10% de deconto para tosar o ${item.nome}`);
// });

//2)

// //a)
// let nomeProdutos = [];

// produtos.map((item) => {
//   nomeProdutos.push(item.nome);
//   nomeProdutos.push(item.preco);
// });

// console.log(nomeProdutos);

// b)

// let prodComDesc = [];

// produtos.map((item) => {
//   prodComDesc.push(item.nome);

//   let precoDesconto = item.preco - item.preco * (5 / 100);
//   prodComDesc.push(precoDesconto);
// });

// console.log(prodComDesc);

//c)

// let nomeBebidas = [];

// nomeBebidas = produtos.filter((item) => {
//   return item.categoria === 'Bebidas';
// });

// console.log(nomeBebidas);

//d)

// let palavraYpe = [];

// palavraYpe = produtos.filter((item) => {
//   return item.nome.includes('Ypê');
// });

// console.log(palavraYpe);

//e)

// let palavraYpe = [];

// palavraYpe = produtos.filter((item) => {
//   return item.nome.includes('Ypê');
// });

// palavraYpe.map((item) => {
//   console.log(`Compre ${item.nome} por ${item.preco}`);
// });