
import React from 'react';
import { Meteor } from 'meteor/meteor';
import {mount} from 'react-mounter';
import { Tracker } from 'meteor/tracker'

import AppContainer from '../imports/ui/App.jsx';
import PersonalContainer from '../imports/ui/profile.jsx';
import GroupContainer from '../imports/ui/group.jsx';
import NotFound from '../imports/ui/NotFound.jsx';

FlowRouter.route('/', {
    subscriptions: function(params, queryParams) { 
      const id = Meteor.userId();
      /**give up subscribing on this, because the flowrouter.susbready() affect the data react**/
      // this.register('subGroups',DDPCon.subscribe('groupsMarathon',id,function(){}));
    },
    action: function() {
       mount(AppContainer,{content: <PersonalContainer />});
    }
});

FlowRouter.route('/groups/:id', {
    subscriptions: function(params, queryParams) { 
      const id = params.id;
      //this.register('subGroup',DDPCon.subscribe('groupMarathon',id,function(){}));
    },
    action: function(params) {
      const id = params.id;
      mount(AppContainer,{content: <GroupContainer id={id} />});
    }
});

FlowRouter.route('/groups/:id/create/:userId', {
    subscriptions: function(params, queryParams) {
      
    },
    action: function(params) {
      const id = params.id;
      mount(AppContainer,{content: <GroupContainer id={id} />});
    }
});


FlowRouter.notFound = {
    subscriptions: function() {
    },
    action: function() {
      mount(AppContainer,{content: <NotFound />});
    }
};

