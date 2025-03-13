"use client"

import { useFindAllUsersQuery } from "@/graphql/generated/output";

export default function Home() {
  const { data, loading } = useFindAllUsersQuery();

  return loading ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {data?.findAllUsers.map((user) => (
        <li key={user.id}>
          {user.email}
        </li>
      ))}
    </ul>
  );
}
