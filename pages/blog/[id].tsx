import React, { FC } from "react";
import { useRouter } from "next/router";
import { Container, Box, Typography, List, ListItem } from "@mui/material/";
import PageHeader from "@components/PageHeader";
import PageNav, { INavLink } from "@components/PageNav";
import SectionHeading from "@components/SectionHeading";
import Blockquote from "@components/Blockquote";
import Image from "next/image";

const navLinks: INavLink[] = [
  {
    name: "Section 1",
    link: "section-1",
    position: undefined,
  },
  {
    name: "Section 2",
    link: "section-2",
    position: undefined,
  },
];

interface IBlogPostProps {}

const BlogPost: FC<IBlogPostProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
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
      <Container id="navContainer">
        <PageNav navLinks={navLinks}>
          <Box component="section" id="section-1" sx={{ mb: "160px" }}>
            <Box sx={{ maxWidth: "760px" }}>
              <Typography variant="h1">
                H1. Heading Title for First Section
              </Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Typography variant="h2">H2. Heading</Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Typography variant="h3">H3. Heading</Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Typography variant="h4">H4. Heading</Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Typography variant="h5">H5. Heading</Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Typography variant="h6">H6. Heading</Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Blockquote small>
                Small Blockquote. Sed ut dui ut lacus dictum fermentum vel
                tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales
                felis. Duis nunc eros, mattis at dui ac, convallis semper risus.
                In adipiscing ultrices tellus, in suscipit massa vehicula eu.
              </Blockquote>
              <Box
                sx={{
                  maxWidth: "320px",
                  margin: "auto",
                  textAlign: "center",
                  mb: "32px",
                  pt: "16px",
                }}
              >
                <Image
                  src="/images/placeholder/5.jpg"
                  width={320}
                  height={220}
                  layout="responsive"
                />
                <Typography variant="caption">Caption of an image</Typography>
              </Box>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>
              <Blockquote>
                Large Blockquote. Sed ut dui ut lacus dictum fermentum vel
                tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales
                felis. Duis nunc eros, mattis at dui ac, convallis semper risus.
                In adipiscing ultrices tellus, in suscipit massa vehicula eu.
              </Blockquote>
              <Typography variant="p">
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui
                blanditiis praesentium voluptatum deleniti atque corrupti, quos
                dolores et quas molestias excepturi sint, obcaecati cupiditate
                non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>

              <Typography variant="h5">Unordered List</Typography>
              <List
                dense
                sx={{
                  pl: "40px",
                  mb: "32px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.0225em",
                  listStyleType: "disc",
                  "& li": {
                    display: "list-item",
                    pl: 0,
                  },
                }}
              >
                <ListItem>Distribute governance tokens</ListItem>
                <ListItem>Raise funds</ListItem>
                <ListItem>Manage their treasury</ListItem>
                <ListItem>Track member reputation</ListItem>
                <ListItem>Provide liquidity</ListItem>
                <List
                  dense
                  disablePadding
                  sx={{
                    pl: "40px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.0225em",
                    listStyleType: "circle",
                    "& li": {
                      display: "list-item",
                      pl: 0,
                    },
                  }}
                >
                  <ListItem>Nested Items</ListItem>
                  <ListItem>
                    Create proposals on expenditures or governance
                  </ListItem>
                  <List
                    dense
                    disablePadding
                    sx={{
                      pl: "40px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.0225em",
                      listStyleType: "disc",
                      "& li": {
                        display: "list-item",
                        pl: 0,
                      },
                    }}
                  >
                    <ListItem>Nest again</ListItem>
                  </List>
                </List>
                <ListItem>
                  Easily deploy their funds to achieve their goals
                </ListItem>
                <ListItem>
                  Experiment with different types of automated algorithmic
                  democratic processes
                </ListItem>
              </List>

              <Typography variant="h5">Ordered List</Typography>
              <List
                component="ol"
                dense
                sx={{
                  pl: "40px",
                  mb: "32px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.0225em",
                  listStyleType: "decimal",
                  "& li": {
                    display: "list-item",
                    pl: 0,
                  },
                }}
              >
                <ListItem>Test ordered list</ListItem>
                <List
                  component="ol"
                  dense
                  disablePadding
                  sx={{
                    pl: "40px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.0225em",
                    listStyleType: "upper-alpha",
                    "& li": {
                      display: "list-item",
                      pl: 0,
                    },
                  }}
                >
                  <ListItem>Test ordered list</ListItem>
                  <ListItem>Test ordered list</ListItem>
                  <List
                    component="ol"
                    dense
                    disablePadding
                    sx={{
                      pl: "40px",
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.0225em",
                      listStyleType: "upper-roman",
                      "& li": {
                        display: "list-item",
                        pl: 0,
                      },
                    }}
                  >
                    <ListItem>Test ordered list</ListItem>
                    <ListItem>Test ordered list</ListItem>
                    <ListItem>Test ordered list</ListItem>
                  </List>
                  <ListItem>Test ordered list</ListItem>
                </List>
                <ListItem>Test ordered list</ListItem>
                <ListItem>Test ordered list</ListItem>
              </List>

              <Typography variant="p">
                Nam libero tempore, cum soluta nobis est eligendi optio, cumque
                nihil impedit, quo minus id, quod maxime placeat, facere
                possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet, ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat…
              </Typography>
              <Typography variant="p">
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui
                blanditiis praesentium voluptatum deleniti atque corrupti, quos
                dolores et quas molestias excepturi sint, obcaecati cupiditate
                non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>
              <Typography variant="p">
                This is a paragraphy variant. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
                pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
                aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
                venenatis. Donec a dui et dui fringilla consectetur id nec
                massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
                amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
                semper risus. In adipiscing ultrices tellus, in suscipit massa
                vehicula eu.
              </Typography>

              <Typography variant="h4">H4. Heading</Typography>
              <Typography variant="subtitle1">
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="h5">H5. Heading</Typography>
              <Typography variant="subtitle2">
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" display="block" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Box>
          </Box>
          <Box component="section" id="section-2" sx={{ mb: "160px" }}>
            <Box sx={{ maxWidth: "760px" }}>
              <Typography variant="h1">This is title for section 2</Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
                rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
                volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
                fringilla consectetur id nec massa. Aliquam erat volutpat. Sed
                ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed
                lacinia lectus. Duis sit amet sodales felis. Duis nunc eros,
                mattis at dui ac, convallis semper risus. In adipiscing ultrices
                tellus, in suscipit massa vehicula eu.
              </Typography>
              <Blockquote>
                Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed
                sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros,
                mattis at dui ac, convallis semper risus. In adipiscing ultrices
                tellus, in suscipit massa vehicula eu.
              </Blockquote>
              <Typography variant="p">
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui
                blanditiis praesentium voluptatum deleniti atque corrupti, quos
                dolores et quas molestias excepturi sint, obcaecati cupiditate
                non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </Typography>
              <Typography variant="p">
                Nam libero tempore, cum soluta nobis est eligendi optio, cumque
                nihil impedit, quo minus id, quod maxime placeat, facere
                possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet, ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat…
              </Typography>
            </Box>
          </Box>
        </PageNav>
      </Container>
    </>
  );
};

export default BlogPost;
