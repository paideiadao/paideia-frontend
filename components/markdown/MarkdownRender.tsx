import React, { useContext, FC } from 'react';
import { Typography, List, ListItem } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ThemeContext } from '@lib/ThemeContext';
import Link from '@components/Link';
import Blockquote from '@components/Blockquote';

const MarkdownRender = (props: { description: string }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Typography variant="h1" {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h2" {...props} />,
        h3: ({ node, ...props }) => <Typography variant="h3" {...props} />,
        h4: ({ node, ...props }) => <Typography variant="h4" {...props} />,
        h5: ({ node, ...props }) => <Typography variant="h5" {...props} />,
        h6: ({ node, ...props }) => <Typography variant="h6" {...props} />,
        p: ({ node, ...props }) => <Typography variant="p" {...props} />,
        ul: ({ node, ...props }) => props.depth === 0 ? (
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
                display: 'list-item',
                pl: 0,
              },
            }}
            {...props} />
        ) : (
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
                display: 'list-item',
                pl: 0,
              },
            }}
            {...props} />
        ),
        li: ({ node, ...props }) => <ListItem {...props} />,
        ol: ({ node, ...props }) => props.depth === 0 ? (
          <List
            component="ol"
            dense
            sx={{
              pl: "40px",
              mb: '32px',
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.0225em",
              listStyleType: "decimal",
              "& li": {
                display: 'list-item',
                pl: 0,
              },
            }}
            {...props} />
        ) : (
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
                display: 'list-item',
                pl: 0,
              },
            }}
            {...props} />
        ),
        // @ts-ignore
        a: ({ node, ...props }) => <Link {...props} sx={{ wordBreak: 'break-all' }} />,
        blockquote: ({ node, ...props }) => <Blockquote {...props} />
      }}
      remarkPlugins={[remarkGfm]}
    >
      {props.description}
    </ReactMarkdown>
  );
};

export default MarkdownRender;