import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/', { path: '/home' });
  this.route('home');
  this.route('about');
  this.route('speaker');
});

export default Router;
