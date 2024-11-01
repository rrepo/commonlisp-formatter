import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Lisp Formatter");

	// フォーマットコマンドの登録
	const disposable = vscode.commands.registerCommand('console.formatLispCode', () => {
		vscode.window.showInformationMessage('Formatting Lisp code...');
		outputChannel.appendLine("Lisp Formatter command executed.");
	});

	// ドキュメントフォーマッティングプロバイダーの登録
	vscode.languages.registerDocumentFormattingEditProvider(['lisp', 'commonlisp'], {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			outputChannel.appendLine("Lisp file formatting triggered!");
			const code = document.getText();
			const formattedCode = formatLispCode(code);
			outputChannel.appendLine("Formatted Lisp code:");
			outputChannel.appendLine(formattedCode);

			const fullRange = new vscode.Range(
				document.positionAt(0),
				document.positionAt(code.length)
			);
			return [vscode.TextEdit.replace(fullRange, formattedCode)];
		}
	});

	context.subscriptions.push(disposable, outputChannel);
}

export function deactivate() { }

// Lispコードフォーマット関数
function formatLispCode(code: string): string {
	let indentLevel = 0;
	let result = '';
	let i = 0;

	// 改行と余分なスペースを削除して正規化
	code = code
		.replace(/(;.*?)(\r?\n)/g, (match, comment, newline) => `${comment}TTT${newline}`)
		.replace(/\s+/g, ' ')
		.replace(/`\s*\(/g, '`(')
		.trim();

	while (i < code.length) {
		const char: string = code[i];

		if ((char === '(') && (i === 0 || code[i - 1] !== '\'' && code[i - 1] !== '`')) {
			let content = '';
			let innerIndex = i + 1;
			let nestedLevel = 1;

			while (innerIndex < code.length && nestedLevel > 0) {
				if (code[innerIndex] === '(') nestedLevel++;
				else if (code[innerIndex] === ')') nestedLevel--;
				if (nestedLevel > 0) content += code[innerIndex];
				innerIndex++;
			}

			if (indentLevel === 0) {
				result += '\n';
			}

			if (content.trim().length < 20) {
				result += `(`;
				indentLevel++;
			} else {
				result += `\n${' '.repeat(indentLevel * 2)}(`;
				indentLevel++;
			}
		} else if (char === ')') {
			indentLevel = Math.max(0, indentLevel - 1);
			result += `)`;
		} else if (char === ";" && code[i + 1] === ";") {
			result += `\n${' '.repeat(indentLevel * 2)};`;
		} else if (char === "T" && code[i + 1] === "T" && code[i + 2] === "T") {
			i += 3;
			if (code[i + 1] !== "(") {
				result += `\n${' '.repeat(indentLevel * 2)}`;
			}
		} else {
			result += char;
		}
		i++;
	}

	return result;
}
