import Rebase from 're-base';
import * as config from './config';

// this file is used to create a database connection
// with a firebase database

const base = Rebase.createClass(config.config);

// following export would give all our app components
// access to our database connection
export default base;
