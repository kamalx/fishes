import Rebase from 're-base';
import * as config from './config';

// this file is used to create a database connection
// with a firebase database
// config is loaded from a separate file named config.js
// which stores secrets and is maintained separately
// outside of version control.
// see sample-config.js for a template of the said config file.

const base = Rebase.createClass(config.config);

// following export would give all our app components
// access to our database connection
export default base;
