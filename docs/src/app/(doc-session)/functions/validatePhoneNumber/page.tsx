import "@/css/functions.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function ValidatePhoneNumber() {
	return (
		<div id="page-content-wrapper">
			<div className="relative mr-10 flex justify-end p-4">
				<DrawerComponent />
			</div>
			<div className="container-fluid container">
				<h1 className="title">
					Phone Number Validation Function Documentation
				</h1>
				<p>
					The <code>validatePhoneNumber</code> function is used to validate
					phone numbers. It returns an object with two properties:
					&apos;isValid&apos; (boolean) and &apos;errorMsg&apos; (string). The
					&apos;isValid&apos; property will be true if the phone number meets
					the specified criteria, and &apos;errorMsg&apos; will contain the
					error message if the phone number is invalid, or it will be null if
					the phone number is valid.
				</p>

				<h2 className="subtitle">Function Signature</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`function validatePhoneNumber(
	phoneNumber: string,
	errorMsg?: string[]
): { isValid: boolean, errorMsg: string | null };`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Parameters</h2>
				<ul>
					<li>
						<code>phoneNumber</code> (string) - The phone number to be
						validated.
					</li>
					<li>
						<code>errorMsg</code> (string[]) [optional] - An array of error
						messages to customize the response. If not provided, the function
						will use default error messages.
					</li>
				</ul>

				<h2 className="subtitle">Default Error Messages</h2>
				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`[
	'Invalid value passed',
	'Invalid phone number',
	'Unknown error',
]`}
				</SyntaxHighlighter>

				<h2 className="subtitle">Examples</h2>

				<SyntaxHighlighter language="javascript" style={a11yDark}>
					{`const result1 = validatePhoneNumber('555-123-4567');
console.log(result1);
// Output: { isValid: false, errorMsg: 'Invalid phone number' }

const customErrorMsg = [null, 'Custom error 2'];
const result2 = validatePhoneNumber('(555) 123-4567', customErrorMsg);
console.log(result2);
// Output: { isValid: false, errorMsg: 'Custom error 2' }`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
