import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description:'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
  const [counter, setCounter] = useState(0)
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem
          repository={repository}
        />
        <RepositoryItem
          repository={repository}
        />
        <RepositoryItem
          repository={repository}
        />
        <RepositoryItem
          repository={repository}
        />
        {counter}
        <button type="button" onClick={() => setCounter(prev => prev + 1)}>increment + 1</button>
      </ul>
    </section>
  )
}
