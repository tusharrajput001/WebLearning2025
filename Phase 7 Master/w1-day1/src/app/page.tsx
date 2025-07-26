import Image from "next/image";
import UserCard from "./component/userCard";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <UserCard name="Tushar" email="tusharr0491@gmail.com" age={22} />
    </>
  );
}
