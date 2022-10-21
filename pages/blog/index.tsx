import useSWR from "swr";
import { fetcher } from "@lib/utilities";
import PageHeader from "@components/PageHeader";
import { Container } from "@mui/material";
import Highlights from "@components/Highlights";
import ArticleList from "@components/ArticleList";

const Blog = () => {
  const { data: highlightsData } = useSWR(
    `/blogs/?highlights_only=true`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const { data: articleData } = useSWR(
    `/blogs/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <>
      <PageHeader
        bgUrl="/backgrounds/blog-bg.png"
        imgPositionSx={{
          width: "2233px",
          height: "1627px",
          left: "calc(50% + 400px)",
        }}
        mobileBgUrl="/backgrounds/blog-mobile.png"
        mobileSx={{
          width: "1019px",
          height: "1203px",
          top: "-100px",
          left: "calc(50% + 300px)",
        }}
        sectionTitle="Blog"
        titleLineOne="Our Latest"
        titleLineTwo="Articles"
        subTitleOne="Don't miss out on any of the latest updates "
        subTitleTwo=" "
      />
      <Highlights
        highlights={
          highlightsData
            ? highlightsData.map((highlight: { name: string, description: string, link: string }) => {
                return { ...highlight,
                  title: highlight.name,
                  content: highlight.description,
                  link: `/blog/${highlight.link}`
                };
              })
            : []
        }
        title="Featured blog posts"
        titleSmall="Don't miss these"
      />
      <Container sx={{ py: "240px" }}>
        <ArticleList articles={articleData ?? []} />
      </Container>
    </>
  );
};

export default Blog;
