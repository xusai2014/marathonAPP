
import React from 'react';
import {mount} from 'react-mounter';

import App from '../imports/ui/App.js';
import PersonalContainer from '../imports/ui/profile.js';
import Login from '../imports/ui/login.js';

FlowRouter.route('/', {
    subscriptions: function(params, queryParams) {
        this.register('users', Accounts.connection.subscribe('users'));
    },
    action: function() {
      // mount(App,{content: <PersonalContainer />});
    }
});

