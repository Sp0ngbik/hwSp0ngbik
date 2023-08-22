type AddressType = {
  street: string; 
  city: string
};

export type UserType = {
  name:string,
  age:number,
  id:number,
  address:AddressType
};

type UserListPropsType = {
  users: Array<UserType>
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
       {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
         <li key={user.id} id={`hw01-user-${user.id}`}>
           <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
           {user.address.street}, {user.address.city}
         </li>
       ))}
      </ul>
    </div>
  );
};
