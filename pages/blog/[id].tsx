import React, { FC } from 'react';
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Typography
} from '@mui/material/';
import PageHeader from '@components/PageHeader';
import PageNav from '@components/PageNav';
import SectionHeading from '@components/SectionHeading';
import Blockquote from '@components/Blockquote';

interface INavLink {
  name: string;
  icon: string;
  link: string;
  position: number | undefined;
}

const navLinks: INavLink[] = [
  {
    name: "Heading",
    icon: "waving_hand",
    link: "heading",
    position: undefined,
  },
  {
    name: "Another",
    icon: "waving_hand",
    link: "another",
    position: undefined,
  },
];

interface IBlogPostProps {

}

const BlogPost: FC<IBlogPostProps> = ({ }) => {
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
        sx={{ overflow: 'hidden' }}
      />
      <Container id="navContainer">
        <PageNav navLinks={navLinks}>
          <Box component="section" id="heading" sx={{ mb: '160px' }}>
            <SectionHeading
              category="Here is a section"
              title={'Blog post ' + id}
              sx={{ mb: "32px" }}
            />
            <Box sx={{ maxWidth: "760px", mx: "auto" }}>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.
              </Typography>
              <Blockquote>
                Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.
              </Blockquote>
              <Typography variant="p">
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </Typography>
              <Typography variant="p">
                Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat…
              </Typography>
            </Box>
          </Box>
          <Box component="section" id="another" sx={{ mb: '160px' }}>
            <SectionHeading
              category="Here is another section"
              title="Another thing"
              sx={{ mb: "32px" }}
            />
            <Box sx={{ maxWidth: "760px", mx: "auto" }}>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.
              </Typography>
              <Blockquote>
                Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.
              </Blockquote>
              <Typography variant="p">
                At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </Typography>
              <Typography variant="p">
                Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat…
              </Typography>
            </Box>
          </Box>
        </PageNav>
      </Container>
    </>
  );
};

export default BlogPost;