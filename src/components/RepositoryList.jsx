import RepositoryItem from "./RepositoryItem";

const repository = {
  name: "Nome do repositório",
  description: "lorem lorem ipsum lorem ipsum lorem ipsum",
  link: "https://github.com/vyctor",
};

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
