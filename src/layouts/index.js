import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Global } from '@emotion/core'

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, location } = this.props;
    const isPost =
      location.pathname !== '/' && !location.pathname.match(/^\/blog\/?$/);

    return (
      <React.Fragment>
        <Global
          styles={{
            'html, body, #___gatsby': {
              height: '100%'
            },
            body: {
              backgroundColor: '#002635'
            },
            '::selection': {
              background: '#FF6138',
              color: 'white'
            }
          }}
        />
        <Root>
          <Helmet
            title="Dustin Schau - Blog"
            meta={[
              {
                name: 'description',
                content:
                  'The blog of the Omaha, Nebraska based front-end developer, Dustin Schau',
              },
              {
                name: 'keywords',
                content:
                  'Developer, javascript, programming, designer, angular, react, node, user experience, design, omaha, nebraska',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header isPost={isPost} />
          <Content isPost={isPost} Footer={Footer}>
            {children}
          </Content>
        </Root>
      </React.Fragment>
    );
  }
}
