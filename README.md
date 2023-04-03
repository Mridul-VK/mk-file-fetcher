# MK File Fetcher

A simple yet powerful package that helps to fetch all the files of a given type from a given folder no matter how many folders you make inside that.

# Installation

### Using NPM

```bash
$ npm install mk-file-fetcher
```

### Using yarn

```bash
$ yarn add mk-file-fetcher
```

# Usage

Using this is very simple. The package has just one function so just import it and use it

```javascript
import { Fetcher } from "mk-file-fetcher";

const files = Fetcher.getFiles("directory-name", ".js");

console.log(files);
// output --> ["directory-name/file1.js", "directory-name/sub-directory/file2.js",...]
```

You can provide relative paths to the folder too.

```javascript
const files = Fetcher.getFiles("../../big-folder/subfolder", ".js");

console.log(files);
// output --> ["../../big-folder/subfolder/file1.js", "../../big-folder/subfolder/sub-directory/file2.js",...]
```
