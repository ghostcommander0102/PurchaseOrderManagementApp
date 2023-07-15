'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PurchaseOrder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PurchaseOrder.init({
        modelNumber: DataTypes.STRING,
        unitPrice: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER,
        date: DataTypes.DATE,
        vendorName: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PurchaseOrder',
    });
    return PurchaseOrder;
};