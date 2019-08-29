import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

class Home extends React.Component {


  head() {
    return (
      <Helmet bodyAttributes={{class: "usersPage"}}>
        <title>Users - React Starter Kit</title>
      </Helmet>
    );
  }

  render() {

    return (
      <Fragment>
        {this.head()}
        <div className="grid pageHeaderSection">
          <div className="column column_12_12">
            <div className="content_wrap">
              <h2>Users</h2>
              <p className="desc">
                Вымешленный текст
              </p>
            </div>
          </div>

        </div>
        <div className="users_wrap clear_fix">
          Тут будет мой текст
        </div>
      </Fragment>
    )
  }
}

export default Home;
