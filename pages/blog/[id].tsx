import React, { FC } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@lib/utilities";
import { Container } from "@mui/material/";
import PageHeader from "@components/PageHeader";
import PageNav, { INavLink } from "@components/PageNav";
import useDidMountEffect from "@components/utilities/hooks";
import MarkdownRender from "@lib/MarkdownRender";

interface IBlogPostProps {}

const BlogPost: FC<IBlogPostProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: blog, error: blogError } = useSWR(
    id !== undefined &&
      `/blogs/${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useDidMountEffect(() => {
    if (blogError !== undefined) {
      router.push("/404");
    }
  }, [blogError]);

  const headers = getHeaders(blog?.content ?? '');
  const navLinks: INavLink[] = headers.map(header => {
    return { name: header, link: header.split(' ').join('-'), position: undefined };
  });

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
        sectionTitle="Blog Post"
        titleLineOne="Blog"
        titleLineTwo="Post"
        subTitleOne="Don't miss out on any of the latest updates "
        subTitleTwo="from our great writers"
        sx={{ overflow: "hidden" }}
      />
      <Container id="navContainer" sx={{ mb: "200px" }}>
        <PageNav navLinks={navLinks}>
            <MarkdownRender
              description={blog?.content}
            />
        </PageNav>
      </Container>
    </>
  );
};

const getHeaders = (content: string) => {
  const r = /#{1,6}.+(?=\n)/g;
  return content?.match(r)?.filter(s => s.startsWith("# "))?.map(s => s.slice(2)) ?? [];
};

export default BlogPost;
