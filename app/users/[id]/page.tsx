
interface IParams {
    params: {
        id: string
    }, searchParams: {

    }
}

interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string
  }

async function getUser(id: string) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json();
    console.log(data.data)
    return data.data;
}

export default async function UserPage({ params }: IParams) {

    const user: IUser = await getUser(params.id)
    console.log(params)
    return (
        <div className="bg-slate-400 p-10 rounded-md">
            <img src={user.avatar} alt='Information user' className="m-auto my-4" />
           <h3 className="text-3xl font-bold">
              {user.id} {user.first_name} {user.last_name}
           </h3>
           <p>email: {user.email}</p>
        </div>
    )
}