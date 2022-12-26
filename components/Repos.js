import React, { useState, useEffect } from "react";

function Repos() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/WiceDev/repos")
      .then((res) => res.json())
      .then((json) => {
        setRepos(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="repos">
      <div className="repos_title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <circle
            cx="160"
            cy="96"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="160"
            cy="416"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M160 368V144"
          />
          <circle
            cx="352"
            cy="160"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M352 208c0 128-192 48-192 160"
          />
        </svg>
        Repositories
      </div>
      <div className="repos_des">My public projects on GitHub</div>
      <div className="repos_content">
        <div className="repos_content_repos">
          {repos ? (
            repos
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .map((repo) => (
                <div
                  className="repos_content_repos_repo"
                  key={repo.name}
                  onClick={() => {
                    window.open(repo.html_url);
                  }}
                >
                  <div className="repos_content_repos_repo_left">
                    <div className="repos_content_repos_repo_left_name">
                      {repo.name}
                    </div>
                    <div className="repos_content_repos_repo_left_des">
                      {repo.description}
                    </div>
                  </div>
                  <div className="repos_content_repos_repo_right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 47.94 47.94"
                    >
                      <path d="m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z" />
                    </svg>
                    {repo.stargazers_count}
                  </div>
                </div>
              ))
          ) : (
            <div className="repos_load">
              Cant Load Repositories Refresh the page
            </div>
          )}
        </div>
      </div>
      <div className="repos_bottom">
        <img
          src="../icons/github.svg
          "
          alt=""
        />
        <a href="">fork</a>
      </div>
    </div>
  );
}

export default Repos;
