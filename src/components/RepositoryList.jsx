import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

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
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
