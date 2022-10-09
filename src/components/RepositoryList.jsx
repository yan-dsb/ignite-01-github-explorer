import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

export function RepositoryList(){
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      const dataFormatted = data.map(repo => {
        return { ...repo, link: repo.html_url}
      })
      setRepositories(dataFormatted)
    })
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => (<RepositoryItem key={repository.id} repository={repository} />))}
      </ul>
    </section>
  )
}
