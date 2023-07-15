import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('submits purchase order successfully', () => {
		render(<App />);

		// Fill in the form fields
		fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2022-01-01' } });
		fireEvent.change(screen.getByLabelText('Vendor Name:'), { target: { value: 'Example Vendor' } });
		// Create a test file input with a sample CSV file
		const file = new File(['Model Number,Unit Price,Quantity\nABC123,10.99,5'], 'purchase-orders.csv', { type: 'text/csv' });
		fireEvent.change(screen.getByLabelText('CSV File:'), { target: { files: [file] } });

		// Submit the form
		fireEvent.click(screen.getByText('Submit'));
	});

	it('displays validation error message', () => {
		render(<App />);

		// Submit the form without filling in any fields
		fireEvent.click(screen.getByText('Submit'));

		// Assert that the validation error message is displayed
		expect(screen.getByText('Please fill in all the required fields')).toBeInTheDocument();
	});
});
