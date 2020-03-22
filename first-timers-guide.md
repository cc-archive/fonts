# Storybook Docs

Storybook Docs helps in turning Storybook stories into world-class documentation.

## Docspage Installation

When one installs Docs, every story gets a DocsPage. DocsPage pulls information from  stories, components, source code, and story metadata to construct a sensible, zero-config default.

**Step 0:** 
After setting up the project change into project directory 

```
$ cd fonts/
```
**Step 1:**
Install addon-docs package.

```
$ npm install @storybook/addon-docs
```
**Step 3:**
Add addons-docs to .storybook/main.js along with other addons.

![img](file:///home/megha/Downloads/Screenshot%202020-03-15%20at%201.51.07%20PM.png)

Upon restarting docs tab appears on top.

**Step 4:**
In package.json move all the dependencies from dependencies dictionary to devDependencies dictionar, sorted by alphabetical order and remove dependencies dictionary. After that run,

```
$ npm install
```
**Step 5:**
Docs has peer dependencies on react, react-is, and babel-loader. So as to write stories in MDX format,one needs to add below dependencies as well:

```
$ npm install react react-is babel-loader
```
**Step 6:**

In .storybook/main.js, add below line in stories,so that it could process files with .mdx extension
'../src/**/*stories.mdx

Now one can write stories in MDX format.
[MDX](https://mdxjs.com/) allows you to write long-form markdown documentation and stories in one file. you can also use it to write pure documentation pages and embed them inside your Storybook alongside your stories.





