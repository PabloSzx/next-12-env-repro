import { GetStaticProps } from "next";

export interface PageProps {
  date: number;
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
  return {
    props: {
      date: Date.now(),
    },
    revalidate: 5,
  };
};

export default function Index({ date }: PageProps) {
  return <p>{date}</p>;
}
