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

		const formData = new FormData();
		formData.append('file', file);
		formData.append('date', date);
		formData.append('vendorName', vendorName);

		fetch('http://localhost:5000/api/purchase-order', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					// Purchase order submitted successfully
					setErrorMessage('');
					// Reset form fields
					setFile(null);
					setDate('');
					setVendorName('');
				} else {
					// Handle validation errors
					setErrorMessage(data.error);
				}
			})
			.catch((error) => {
				console.error('Error submitting purchase order:', error);
				setErrorMessage('Failed to submit purchase order');
			});
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
