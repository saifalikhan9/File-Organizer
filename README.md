# file-organizer-by-extention

A simple Node.js package to organize files in a directory based on their file extensions.

## Installation

To install the package, run the following command in your project directory:

```
npm i file-organizer-by-extention
```

## Usage

Here's how you can use the `file-organizer-by-extention` package in your project:

```javascript
import organizeFilesByExtension from 'file-organizer';

// Specify the directory you want to organize
const directoryToOrganize = '/path/to/your/directory';

// Call the function to organize files
organizeFilesByExtension(directoryToOrganize);
```

## Function

### `organizeFilesByExtension(directory)`

This function organizes files in the specified directory by moving them into subdirectories based on their file extensions.

- `directory`: The path to the directory containing the files you want to organize.

## How it works

1. The function reads all files in the specified directory.
2. For each file, it determines the file extension.
3. It creates a new subdirectory named after the file extension if it doesn't already exist.
4. The file is then moved into the corresponding subdirectory.

## Example

If your directory structure looks like this:

```
/my_folder
    file1.txt
    image.png
    document.pdf
    script.js
```

After running `organizeFilesByExtension('/my_folder')`, it will become:

```
/my_folder
    /txt
        file1.txt
    /png
        image.png
    /pdf
        document.pdf
    /js
        script.js
```

## Error Handling

The function includes basic error handling:
- It logs an error if there's an issue reading the directory.
- It logs an error if there's a problem creating a new folder.
- It logs an error if there's an issue moving a file.

## Dependencies

This package uses the following dependencies:
- `fs-extra`: For enhanced file system methods
- `path`: For handling file paths

Make sure these are installed in your project.

## Notes

- This function will only organize files, not subdirectories.
- Files without extensions will not be moved.
- Be cautious when using this on important directories, as it modifies the directory structure.

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).



## Support

[Say hello](https://www.linkedin.com/in/saifalikhan10/)
