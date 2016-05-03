import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default ({ onChange, defaultValue }) => <TextField
  fullWidth
  multiLine
  rows={10}
  defaultValue={defaultValue}
  inputStyle={{ fontFamily: 'Osaka-mono, "MS Gothic", monospace' }}
  onChange={onChange}
/>;
