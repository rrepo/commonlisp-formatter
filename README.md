# commonlisp-formatter
commonlisp-formatter is a Visual Studio Code extension that automatically formats your Common Lisp and Lisp code, ensuring clean, readable, and maintainable codebases. This formatter is perfect for both small scripts and large projects, maintaining consistent coding standards effortlessly.

![formatter](https://i.imgur.com/Za9dkBk.gif)

# Features
- Automatic Indentation: Properly indents code according to Lisp’s hierarchical structure, making nested expressions clear and easy to read.
- Consistent Line Breaks: Inserts line breaks where needed, improving readability for complex expressions.
- Special Syntax Handling: Accurately formats and handles Lisp-specific syntax, including expressions like '(, \`(, and similar forms, preserving code correctness and readability.
- Comment Alignment: Neatly aligns comments, ensuring annotations stay organized without disturbing the code structure.
- Nested Structure Formatting: Manages deeply nested lists and expressions effectively, maintaining clarity even in complex codebases.
- Easy Formatting with Shortcut: Quickly format code with the ALT + SHIFT + F shortcut, just like other file types in VSCode, or set it to format on save for a seamless workflow.
- Custom Formatting Rules: Adheres to specific formatting needs, including:
- Indenting according to code hierarchy with consistent levels.
- Automatically adding new lines before each opening parenthesis ( and special forms like '(, \`( when appropriate.
- Inserting newlines to separate blocks and keeping lines manageable in length.
- Support for Multiple Lisp Dialects: Works with both lisp and commonlisp file types, making it a versatile tool for various Lisp projects.
- Output Channel Logging: Provides detailed logs of formatting actions in the output channel, helping you debug and track changes.

# Usage

1. Install the Extension:
  - Open Visual Studio Code.
  -Navigate to the Extensions view (Ctrl+Shift+X), search for commonlisp-formatter, and click Install.

2. Format Your Code:
  - Open a .lisp or .cl file.
  - Use ALT + SHIFT + F to quickly format the code or choose Format Document from the Command Palette (Ctrl+Shift+P).
  - Enable format on save in VSCode settings for automatic formatting.

3. Customize Settings:
  - Modify the extension’s settings to adapt the formatter to your preferred coding style and standards.
  - Why Choose commonlisp-formatter?
  - Consistent code formatting is essential for readability and collaboration, especially in Lisp projects. commonlisp-formatter automates this task, allowing you to focus on coding without worrying about formatting inconsistencies.
  - Its robust feature set, handling of Lisp-specific syntax, and shortcut support make it an invaluable tool for any Lisp developer using VSCode.

# Why Choose commonlisp-formatter?
Consistent code formatting is essential for readability and collaboration, especially in Lisp projects. commonlisp-formatter automates this task, allowing you to focus on coding without worrying about formatting inconsistencies. Its robust feature set, handling of Lisp-specific syntax, and shortcut support make it an invaluable tool for any Lisp developer using VSCode.

