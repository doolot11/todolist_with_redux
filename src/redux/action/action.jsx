export const addExpense = ({title, price, date}) =>({
  type: 'ADD',
  title,
  price,
  date,
})

export const deleteExpenses = id => ({
    type: 'DELETE',
    id:id,
})