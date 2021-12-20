export function searchCustomers() {

  if(!localStorage['customers']){
    localStorage['customers'] = '[]';
  }

  let customers = localStorage['customers'];
  customers = JSON.parse(customers);
  return customers;
    // const datosDeEjemplo = [
      // {
        // id: '1',
        // firstname: 'Lucas',
        // lastname: 'Moy',
        // email: 'lucasmoy@yahoo.com',
        // phone: '123123123',
        // address: 'Avenida Sempre Viva 123'
      // },
      // {
        // id: '2',
        // firstname: 'Laura',
        // lastname: 'Sanchez',
        // email: 'laura@yahoo.com',
        // phone: '43214312',
        // address: 'San Roque'
      // }
    // ];
}

export function removeCustomer(id:string) {
  let customers = searchCustomers();

  let indice = customers.findIndex((customer:any) => customer.id == id);
  customers.splice(indice, 1);

  localStorage['customers'] = JSON.stringify(customers);
}

export function saveCustomer(customer:any) {
  let customers = searchCustomers();
  customers.push(customer);
  localStorage['customers'] = JSON.stringify(customers);

}
