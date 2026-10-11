import { Loader } from "lucide-react";
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main className={styles.container}>
      <Loader className={styles.spinner} />
    </main>
  );
}
