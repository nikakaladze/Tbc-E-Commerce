import { getCurrentSession } from "@/actions/auth";
import Image from "next/image";
import { json } from "stream/consumers";

const Home = async () => {
  const {user} = await getCurrentSession();

  return(
    <div>{JSON.stringify(user)}</div>
  )
}

export default Home;
