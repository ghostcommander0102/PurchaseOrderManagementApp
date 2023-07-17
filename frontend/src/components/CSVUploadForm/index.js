import React from 'react';

function CSVUploadForm({ file, setFile, date, setDate, vendorName, setVendorName, loading, errorMessage, successMessage, handleSubmit, handleFileChange }) {
    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage.message}</p>}
            <label htmlFor="dateInput">Date:</label>
            <input type="date" id="dateInput" data-testid="dateInput" value={date} onChange={(e) => setDate(e.target.value)} required />
            <br />
            <label htmlFor="nameInput">Vendor Name:</label>
            <input type="text" id="nameInput" data-testid="nameInput" value={vendorName} onChange={(e) => setVendorName(e.target.value)} required />
            <br />
            <label htmlFor="fileInput">CSV File:</label>
            <input type="file" id="fileInput" data-testid="fileInput" onChange={handleFileChange} required />
            <br />
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}

export default CSVUploadForm;
