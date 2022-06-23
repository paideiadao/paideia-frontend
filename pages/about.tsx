import PageHeader from "@components/PageHeader";
import PageNav from "@components/PageNav";
import Blockquote from "@components/Blockquote";
import { Typography, Grid, Container } from "@mui/material";

const navLinks = [
  {
    name: 'Introduction',
    icon: 'info',
    link: 'introduction',
    position: undefined
  },
  {
    name: 'Disclaimer',
    icon: 'gavel',
    link: 'disclaimer',
    position: undefined
  },
  {
    name: 'Our Philosophy',
    icon: 'account_balance',
    link: 'philosophy',
    position: undefined
  },
  {
    name: 'Roadmap',
    icon: 'signpost',
    link: 'roadmap',
    position: undefined
  },
  {
    name: 'Tokenomics',
    icon: 'data_usage',
    link: 'tokenomics',
    position: undefined
  },
];

export default function About() {

  return (
    <>
      <PageHeader
        bgUrl="/about-header-bg.png"
        sectionTitle="About"
        titleLineOne="What Is"
        titleLineTwo="Paideia&lt;"
        subTitleOne="A Web3 DAO Management"
        subTitleTwo="Software Suite"
      />
      <Container sx={{ px: "24px", py: '60px' }}>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <PageNav navLinks={navLinks} />
          </Grid>
          <Grid item md={9}>
            <section id="introduction">
              <Grid container>
                <Grid item md={8}>
                  <Blockquote small sx={{ mb: '32px' }}>
                    Paideia is an organization whose purpose is to create a functional, secure, and well-documented DAO software suite that supports DAOs as they form and develop. It will make it easy for anyone to initiate a DAO, distribute tokens using various methods, create proposals and collect votes. It will help various organizations share funds in a secure and fair way.
                  </Blockquote>
                </Grid>
                <Grid item md={4}>

                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={4}>
                </Grid>
                <Grid item md={8}>
                  <Typography>
                    Anyone who needs to manage a treasury as a group will benefit from these tools. Examples include:
                  </Typography>
                  <Grid container>
                    <Grid item md={6}>
                      Hello
                    </Grid>
                    <Grid item md={6}>
                      is it me
                    </Grid>
                    <Grid item md={6}>
                      you're looking for
                    </Grid>
                    <Grid item md={6}>
                      I can see it in your eyes
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

            </section>
            <section id="disclaimer">
              <Typography variant="h4">
                Disclaimer
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Vel eros donec ac odio tempor orci. Viverra adipiscing at in tellus integer feugiat. Turpis massa tincidunt dui ut ornare lectus. Eu scelerisque felis imperdiet proin fermentum leo. Sit amet facilisis magna etiam tempor orci eu lobortis. Ornare massa eget egestas purus viverra accumsan in nisl. Amet aliquam id diam maecenas ultricies mi eget. At erat pellentesque adipiscing commodo elit at. Eget magna fermentum iaculis eu. Cras adipiscing enim eu turpis egestas pretium. Tellus at urna condimentum mattis pellentesque id nibh. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Neque egestas congue quisque egestas diam in arcu. Maecenas ultricies mi eget mauris pharetra et ultrices. Nulla aliquet enim tortor at auctor urna nunc id.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar. Urna neque viverra justo nec ultrices dui sapien. Arcu bibendum at varius vel. Eu feugiat pretium nibh ipsum. Ac ut consequat semper viverra nam libero justo. Cras ornare arcu dui vivamus arcu felis bibendum. Praesent elementum facilisis leo vel fringilla est. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Risus commodo viverra maecenas accumsan. Ultrices eros in cursus turpis massa tincidunt dui.
              </Typography>
            </section>
            <section id="philosophy">
              <Typography variant="h4">
                Our Philosophy
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Vel eros donec ac odio tempor orci. Viverra adipiscing at in tellus integer feugiat. Turpis massa tincidunt dui ut ornare lectus. Eu scelerisque felis imperdiet proin fermentum leo. Sit amet facilisis magna etiam tempor orci eu lobortis. Ornare massa eget egestas purus viverra accumsan in nisl. Amet aliquam id diam maecenas ultricies mi eget. At erat pellentesque adipiscing commodo elit at. Eget magna fermentum iaculis eu. Cras adipiscing enim eu turpis egestas pretium. Tellus at urna condimentum mattis pellentesque id nibh. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Neque egestas congue quisque egestas diam in arcu. Maecenas ultricies mi eget mauris pharetra et ultrices. Nulla aliquet enim tortor at auctor urna nunc id.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc pulvinar. Urna neque viverra justo nec ultrices dui sapien. Arcu bibendum at varius vel. Eu feugiat pretium nibh ipsum. Ac ut consequat semper viverra nam libero justo. Cras ornare arcu dui vivamus arcu felis bibendum. Praesent elementum facilisis leo vel fringilla est. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Risus commodo viverra maecenas accumsan. Ultrices eros in cursus turpis massa tincidunt dui.
              </Typography>
            </section>
            <section id="roadmap">
              <Typography variant="h4">
                Roadmap
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                At urna condimentum mattis pellentesque id nibh tortor id. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. In eu mi bibendum neque egestas congue quisque egestas diam. Dolor sed viverra ipsum nunc aliquet bibendum. Habitant morbi tristique senectus et netus et malesuada fames ac. Egestas pretium aenean pharetra magna ac placerat vestibulum. Turpis massa tincidunt dui ut ornare. Quam id leo in vitae turpis massa. Laoreet sit amet cursus sit amet dictum sit. Turpis egestas sed tempus urna et pharetra pharetra massa. Amet purus gravida quis blandit. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Est sit amet facilisis magna etiam tempor orci eu. Pellentesque id nibh tortor id aliquet lectus. At lectus urna duis convallis convallis tellus. Pellentesque habitant morbi tristique senectus et. Habitant morbi tristique senectus et netus et malesuada fames. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Eu facilisis sed odio morbi quis commodo odio aenean sed. Cursus vitae congue mauris rhoncus aenean vel elit. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent tristique. Ante metus dictum at tempor commodo ullamcorper. Tellus molestie nunc non blandit. Neque viverra justo nec ultrices. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Mi ipsum faucibus vitae aliquet. At augue eget arcu dictum varius duis at consectetur lorem. Orci a scelerisque purus semper eget duis at. Erat imperdiet sed euismod nisi. Proin nibh nisl condimentum id venenatis a condimentum. Rhoncus aenean vel elit scelerisque. Tellus mauris a diam maecenas. Vel turpis nunc eget lorem dolor sed. Ante metus dictum at tempor commodo ullamcorper. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Donec enim diam vulputate ut pharetra sit. Morbi quis commodo odio aenean sed adipiscing.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                At urna condimentum mattis pellentesque id nibh tortor id. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. In eu mi bibendum neque egestas congue quisque egestas diam. Dolor sed viverra ipsum nunc aliquet bibendum. Habitant morbi tristique senectus et netus et malesuada fames ac. Egestas pretium aenean pharetra magna ac placerat vestibulum. Turpis massa tincidunt dui ut ornare. Quam id leo in vitae turpis massa. Laoreet sit amet cursus sit amet dictum sit. Turpis egestas sed tempus urna et pharetra pharetra massa. Amet purus gravida quis blandit. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Est sit amet facilisis magna etiam tempor orci eu. Pellentesque id nibh tortor id aliquet lectus. At lectus urna duis convallis convallis tellus. Pellentesque habitant morbi tristique senectus et. Habitant morbi tristique senectus et netus et malesuada fames. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Eu facilisis sed odio morbi quis commodo odio aenean sed. Cursus vitae congue mauris rhoncus aenean vel elit. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Turpis egestas integer eget aliquet nibh praesent tristique. Ante metus dictum at tempor commodo ullamcorper. Tellus molestie nunc non blandit. Neque viverra justo nec ultrices. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Mi ipsum faucibus vitae aliquet. At augue eget arcu dictum varius duis at consectetur lorem. Orci a scelerisque purus semper eget duis at. Erat imperdiet sed euismod nisi. Proin nibh nisl condimentum id venenatis a condimentum. Rhoncus aenean vel elit scelerisque. Tellus mauris a diam maecenas. Vel turpis nunc eget lorem dolor sed. Ante metus dictum at tempor commodo ullamcorper. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Donec enim diam vulputate ut pharetra sit. Morbi quis commodo odio aenean sed adipiscing.
              </Typography>
            </section>
            <section id="tokenomics">
              <Typography variant="h4">
                Tokenomics
              </Typography>
              <Typography sx={{ mb: '24px' }}>
                Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Vel eros donec ac odio tempor orci. Viverra adipiscing at in tellus integer feugiat. Turpis massa tincidunt dui ut ornare lectus. Eu scelerisque felis imperdiet proin fermentum leo. Sit amet facilisis magna etiam tempor orci eu lobortis. Ornare massa eget egestas purus viverra accumsan in nisl. Amet aliquam id diam maecenas ultricies mi eget. At erat pellentesque adipiscing commodo elit at. Eget magna fermentum iaculis eu. Cras adipiscing enim eu turpis egestas pretium. Tellus at urna condimentum mattis pellentesque id nibh. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Neque egestas congue quisque egestas diam in arcu. Maecenas ultricies mi eget mauris pharetra et ultrices. Nulla aliquet enim tortor at auctor urna nunc id.
              </Typography>
            </section>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
