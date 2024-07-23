import { Apresentation } from "../components/Apresentation";
import { Header } from "../components/Header";
import './style.css';
import data from '../data/data.json'

export function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 w-screen">
      <Header title={data.title} />
      <Apresentation />
    </main>
  );
}
