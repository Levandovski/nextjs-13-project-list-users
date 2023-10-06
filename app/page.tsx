import Users from "@/components/Users";

interface IUsers {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string
}

async function fecthUsers() {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

export default async function HomePage() {
  const users: IUsers[] = await fecthUsers();
  return (
    <Users  users={users}  />
  )
}