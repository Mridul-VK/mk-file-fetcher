# MK File Fetcher
A simple yet powerful package that helps to fetch all the files of a given type from a given folder no matter how many folders you make inside that.
# Usage
Install the package
```bash
$ npm install mk-file-fetcher

//OR

$ yarn add mk-file-fetcher
```

Import the function & start using
```javascript
import getFiles from "mk-file-fetcher";

const files = getFiles("directory-name", ".js");
```