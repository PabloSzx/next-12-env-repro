import { GetStaticProps } from "next";

export interface PageProps {
  date: number;
  env: string | null;
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  return {
    props: {
      date: Date.now(),
      env: process.env.NEXT_PUBLIC_TEST_ENV || null,
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
