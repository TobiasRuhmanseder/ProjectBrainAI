import { AppTopBar } from "@/components/AppTopBar";
import { ProjectCard, type ProjectCardProject } from "@/components/ProjectCard";

import styles from "./DashboardIndex.module.scss";

type Props = {
  company: { name: string };
  projects: ProjectCardProject[];
};

export default function DashboardIndex({ company, projects }: Props) {
  return (
    <>
      <AppTopBar companyName={company.name} />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.lead}>
              Your projects in <span className={styles.leadStrong}>{company.name}</span>. Next we
              will replace the demo props with real database data.
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
