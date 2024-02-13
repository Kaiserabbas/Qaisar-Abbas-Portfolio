import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("https://api.github.com/users/Kaiserabbas/repos");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    }

    fetchStats();
  }, []);
    return (

    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Github <strong className="purple">Code Calander</strong>
        </h1>
        <GitHubCalendar
          username="Kaiserabbas"
          blockSize={15}
          blockMargin={5}
          color="steelblue  "
          fontSize={16}
          />
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {stats && (
              <h1>⭐{stats.reduce((acc, repo) => acc + repo.stargazers_count, 0)}</h1>
             )
          }
      </Row>
    </>
    );
}

export default Github;
