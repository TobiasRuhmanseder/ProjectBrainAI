import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

import styles from "./ProjectCard.module.scss";

export type ProjectCardProject = {
  id: number;
  name: string;
  status: string;
  description: string;
};

type Props = {
  project: ProjectCardProject;
};

function statusLabel(status: string) {
  switch (status) {
    case "active":
      return "Active";
    case "planning":
      return "Planning";
    default:
      return status;
  }
}

function statusBadgeClass(status: string): string {
  switch (status) {
    case "active":
      return styles.badgeActive;
    case "planning":
      return styles.badgePlanning;
    default:
      return styles.badgeDefault;
  }
}

const CHAT_PLACEHOLDER = "What do you know about this project?";

export function ProjectCard({ project }: Props) {
  const chatId = `project-${project.id}-chat`;

  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.headRow}>
            <h2 className={styles.title}>{project.name}</h2>
            <span
              className={`${styles.badge} ${statusBadgeClass(project.status)}`}
            >
              {statusLabel(project.status)}
            </span>
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.chat}>
          <label className={styles.chatLabel} htmlFor={chatId}>
            Ask about this project
          </label>
          <div className={styles.chatField}>
            <ChatBubbleLeftRightIcon
              className={styles.chatIcon}
              aria-hidden="true"
            />
            <input
              id={chatId}
              className={styles.chatInput}
              type="text"
              name={`chat[${project.id}]`}
              placeholder={CHAT_PLACEHOLDER}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
