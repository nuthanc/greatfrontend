### Differences from Author

* Author had types
```ts
export type FileData = ReadOnly<{
    id: number;
    name: string;
    children?: ReadonlyArray<FileData>;
}
>
```
* File and FileObject components
* Separately filtered directions and non-directories and sorted them and finally combined them
    * I think mine is better in performance
* Styles as classes and in styles.css instead of js in css like me
* Common elements for file and folder and conditionally apply styles and event handling