import { UserCircleIcon } from "@heroicons/react/24/outline";

import styles from "./AppTopBar.module.scss";

type Props = {
  companyName: string;
};

export function AppTopBar({ companyName }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brand}>ProjectBrain AI</div>

        <div className={styles.right}>
          <button type="button" className={styles.profileButton} aria-label="Profile">
            <UserCircleIcon className={styles.profileIcon} aria-hidden="true" />
          </button>

          <div className={styles.company}>{companyName}</div>
        </div>
      </div>
    </div>
  );
}
