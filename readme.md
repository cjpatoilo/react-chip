<a href="https://github.com/cjpatoilo/react-chip"><img width="100%" src="https://cjpatoilo.com/react-chip/artwork.png" alt="ReactChip - Manage a list of chips based on a strings list."></a>

> Manage a list of chips based on a strings list.

[![Travis Status](https://travis-ci.org/cjpatoilo/react-chip.svg?branch=master)](https://travis-ci.org/cjpatoilo/react-chip?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/jkpmrpbafdt6xuap?svg=true)](https://ci.appveyor.com/project/cjpatoilo/react-chip)
[![Codacy Status](https://img.shields.io/codacy/grade/c438e3187dbc48288a901ce19a4624f3/master.svg)](https://www.codacy.com/app/cjpatoilo/react-chip/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/react-chip.svg)](https://david-dm.org/cjpatoilo/react-chip)
[![Version Status](https://badge.fury.io/js/react-chip.svg)](https://www.npmjs.com/package/react-chip)
[![Download Status](https://img.shields.io/npm/dt/react-chip.svg)](https://www.npmjs.com/package/react-chip)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/react-chip)


## Why it's awesome

[description]


## Install

**Install with npm**

```sh
$ npm install react-chip
```

**Install with Yarn**

```sh
$ yarn add react-chip
```

## Usage

```jsx
import React from 'react'
import ReactChip from 'react-chip'

// basic usage
<ReactChip onChange={chips => {console.log(chips)}} />

// advanced usage
<ReactChip
  className={'MyClassName'}
  defaultChips={['React', 'Node.js']}
  defaultValue={'JavaScript'}
  id={'my-id'}
  name={'something'}
  maxLength={10}
  onChange={chips => {console.log(chips)}}
/>
```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/react-chip#contributing).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [mit License](https://github.com/cjpatoilo/react-chip#license).
