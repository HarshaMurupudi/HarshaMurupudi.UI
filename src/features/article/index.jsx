import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as runtime from 'react/jsx-runtime';
import { compileSync, runSync } from '@mdx-js/mdx';
import { connect } from 'react-redux';

function compileMDX(mdx) {
  const code = String(
    compileSync(mdx, {
      outputFormat: 'function-body',
      development: false,
    })
  );

  return code;
}

function Article({ drawerContentId }) {
  const [content, setContent] = useState();

  console.log(drawerContentId);

  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 250)
          body
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);

  useEffect(() => {
    // props.data_for_blocks.body is the raw MDX body

    const selectedNode = nodes.find(
      (node) => node.fields.slug === `/${drawerContentId}/`
    );

    const { body } = selectedNode;

    console.log(nodes);
    const code = compileMDX(body);

    const { default: Content } = runSync(code, runtime);
    setContent(Content());
  }, []);

  return <div>{content && content}</div>;
}

const mapStateToProps = (state) => ({
  drawerContentId: state.getIn(['app', 'drawerContentId']),
});

export default connect(mapStateToProps, null)(Article);
