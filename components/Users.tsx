import Link from "next/link";
import React from "react";

type TUsers = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string
}

interface IUsers {
    users: TUsers[];
}

export default function Users(allUsers: IUsers) {
    const { users } = allUsers;

    return (
        <ul>
            {users.map((user) => (
                <Link href={`/users/${user.id}`} key={user.id}>
                    <li
                        key={user.id}
                        className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
                        <div>
                            <h5 className="font-bold">
                                {user.id} {user.first_name} {user.last_name}
                            </h5>
                            <p className="text-slate-100">
                                email: {user.email}
                            </p>
                        </div>
                        <img src={user.avatar} alt="Images from users" className="rounded-full w-20" />
                    </li>
                </Link>
            ))}
        </ul>
    )
}

