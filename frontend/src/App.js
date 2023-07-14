import React, { useState } from 'react';

function App() {
	const [file, setFile] = useState(null);
	const [date, setDate] = useState('');
	const [vendorName, setVendorName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="App">
			<h1>Purchase Order Form</h1>
			{errorMessage && <p className="error">{errorMessage}</p>}
			<form onSubmit={handleSubmit}>
				<label>Date:</label>
				<input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
				<br />
				<label>Vendor Name:</label>
				<input type="text" value={vendorName} onChange={(e) => setVendorName(e.target.value)} />
				<br />
				<label>CSV File:</label>
				<input type="file" onChange={handleFileChange} />
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
