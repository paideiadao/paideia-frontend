import PageHeader from "@components/PageHeader";
import { Container } from "@mui/material";
import Highlights from "@components/Highlights";
import ArticleList from "@components/ArticleList";

const highlights = [
  {
    label: "Gaming",
    title: "Using paideia in the gaming world",
    content: `ErgoGames.io took root in the idea that the Ergo Blockchain has tremendous potential to become a leading layer-1 solution, and that blockchain-based games will play an integral role in the network's growth.`,
    link: "/",
    image: "/images/highlight.png",
  },
  {
    label: "Art Media",
    title: "Teams of artists can combine forces",
    content:
      "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
    link: "/",
  },
  {
    label: "Music DAOs",
    title: "Want to collaborate with other musicians? ",
    content: "Do it with Paideia",
    link: "/",
  },
  {
    label: "Music DAOs",
    title: "Want to collaborate with other musicians? ",
    content: "Do it with Paideia",
    link: "/",
  },
  {
    label: "Art Media",
    title: "Teams of artists can combine forces",
    content:
      "You can share your NFT proceeds by using a DAO to distribute and control raised funds",
    link: "/",
  },
]

const articles = [
  {
    name: "WIN FREE STUFF",
    description: "Want to win a bunch of money? ",
    link: "/",
    category: "Contest",
  },
  {
    name: "How to stake Paideia",
    description: "Learn everything you need to know about staking Paideia tokens on the platform. ",
    link: "/",
    category: "Education",
  },
  {
    name: "Weekly Dev Update",
    description: "This is the weekly Paideia dev update with all the most interesting info you can even imagine. ",
    link: "/",
    category: "News",
  },
  {
    name: "Weekly Dev Update",
    description: "This is the weekly Paideia dev update with all the most interesting info you can even imagine. ",
    link: "/",
    category: "News",
  },
  {
    name: "Weekly Dev Update",
    description: "This is the weekly Paideia dev update with all the most interesting info you can even imagine. ",
    link: "/",
    category: "News",
  },
  {
    name: "Weekly Dev Update",
    description: "This is the weekly Paideia dev update with all the most interesting info you can even imagine. ",
    link: "/",
    category: "News",
  },
  {
    name: "Weekly Dev Update",
    description: "This is the weekly Paideia dev update with all the most interesting info you can even imagine. ",
    link: "/",
    category: "News",
  },
  {
    name: "Weekly Dev Update",
    description: "This is the weekly Paideia dev update with all the most interesting info you can even imagine. ",
    link: "/",
    category: "News",
  },
];

const Blog = () => {
  return (
    <>
      <PageHeader
        bgUrl="/about-header-bg.png"
        sectionTitle="Blog"
        titleLineOne="Our Latest"
        titleLineTwo="Articles"
        subTitleOne="Don't miss out on any of the latest updates "
        subTitleTwo=" "
      />
      <Highlights highlights={highlights} title="Featured blog posts" titleSmall="Don't miss these" />
      <Container sx={{ py: "240px" }}>
        <ArticleList articles={articles} />
      </Container>
    </>
  );
}

export default Blog;
