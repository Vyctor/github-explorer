import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "Nome do repositório",
  description: "lorem lorem ipsum lorem ipsum lorem ipsum",
  link: "https://github.com/vyctor",
};

export default function RepositoryList() {
  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vyctor/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
