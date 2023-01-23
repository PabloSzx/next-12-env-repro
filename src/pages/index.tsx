import { GetStaticProps } from "next";
import { TEST_ENV } from "repro-next-13-env-issue";

export interface PageProps {
  date: number;
  env: string | null;
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  return {
    props: {
      date: Date.now(),
      env: TEST_ENV,
    },
    revalidate: 5,
  };
};

export default function Index({ date, env }: PageProps) {
  return (
    <>
      <p>{date}</p>
      <p>{env || "No env variable"}</p>
    </>
  );
}
