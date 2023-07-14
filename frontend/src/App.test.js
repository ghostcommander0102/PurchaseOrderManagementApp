import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('submits purchase order successfully', async () => {
		// Render the component
		render(<App />);

		// Fill in the form fields
		fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2022-01-01' } });
		fireEvent.change(screen.getByLabelText('Vendor Name:'), { target: { value: 'Example Vendor' } });

		// Create a test file
		const file = new File(['Model Number,Unit Price,Quantity\nABC123,10.99,5'], 'test.csv', { type: 'text/csv' });
		fireEvent.change(screen.getByLabelText('CSV File:'), { target: { files: [file] } });

		// Submit the form
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

		// Wait for the API call to complete
		await screen.findByText('Purchase order submitted successfully');

		// Assert that the form fields are reset
		expect(screen.getByLabelText('Date:')).toHaveValue('');
		expect(screen.getByLabelText('Vendor Name:')).toHaveValue('');
		expect(screen.getByLabelText('CSV File:')).toHaveValue('');
	});

	test('displays validation error message', async () => {
		// Render the component
		render(<App />);

		// Submit the form without filling in the required fields
		fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

		// Wait for the validation error message to appear
		await screen.findByText('Please fill in all the required fields');

		// Assert that the form fields are not reset
		expect(screen.getByLabelText('Date:')).toHaveValue('');
		expect(screen.getByLabelText('Vendor Name:')).toHaveValue('');
		expect(screen.getByLabelText('CSV File:')).toHaveValue('');
	});
});
