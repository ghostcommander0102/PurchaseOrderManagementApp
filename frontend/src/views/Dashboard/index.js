import React, { useEffect, useState } from 'react';
import CSVUploadForm from '../../components/CSVUploadForm';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect, dispatch } from 'react-redux';
import { submitPurchaseOrder } from '../../actions/ordermanagement';

function DashBoard({ ordermanagement }) {
    const [file, setFile] = useState(null);
    const [date, setDate] = useState('');
    const [vendorName, setVendorName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(ordermanagement);
        setErrorMessage(ordermanagement.error);
        setSuccessMessage(ordermanagement.successMessage);
        setLoading(ordermanagement.loading);
    }, [ordermanagement]);

    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form fields
        if (!date || !vendorName || !file) {
            setErrorMessage('Please fill in all the required fields');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('date', date);
        formData.append('vendorName', vendorName);

        dispatch(submitPurchaseOrder(formData));
    };

    return (
        <div className="App">
            <h1>Purchase Order Form</h1>
            <CSVUploadForm
                file={file}
                setFile={setFile}
                date={date}
                setDate={setDate}
                vendorName={vendorName}
                setVendorName={setVendorName}
                loading={loading}
                errorMessage={errorMessage}
                successMessage={successMessage}
                handleSubmit={handleSubmit}
                handleFileChange={handleFileChange}
            />
        </div>
    );
}

DashBoard.propTypes = {
    ordermanagement: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    ordermanagement: state.ordermanagement,
});

export default connect(
    mapStateToProps
)(DashBoard);
