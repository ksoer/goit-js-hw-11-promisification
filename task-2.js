// Задание 2
// Перепиши функцию toggleUserState() так, 
// чтобы она не испольазовла callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
      return new Promise((res)=> {
          const updatedUsers = allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      );
    res(updatedUsers);
    });
};
    
  
  const user = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
   */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(user);
  toggleUserState(users, 'Lux').then(user);