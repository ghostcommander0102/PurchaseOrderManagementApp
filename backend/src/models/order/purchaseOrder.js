const { Model, DataTypes, Sequelize } = require("sequelize");
const config = require("../../../config/config.json");

const sequelize = new Sequelize(config.development);

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
PurchaseOrder.init(
  {
    modelNumber: DataTypes.STRING,
    unitPrice: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE,
    vendorName: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "orders",
  }
);

module.exports.PurchaseOrder = PurchaseOrder;
